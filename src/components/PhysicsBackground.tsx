import React, { useEffect, useRef, useState } from 'react';

export type PhysicsMode = 'constellation' | 'attract' | 'repel' | 'orbit' | 'curvatureFlow' | 'fireworks';
export type ColorTheme = 'academic' | 'cyberpunk' | 'sunset' | 'emerald';

interface PhysicsBackgroundProps {
  mode?: PhysicsMode;
  colorTheme?: ColorTheme;
  showControlWidget?: boolean;
  onExplosionCountChange?: (count: number) => void;
}

interface NodeParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseAlpha: number;
  alpha: number;
  life?: number;
  maxLife?: number;
  symbol?: string;
  rotation?: number;
  vRot?: number;
  isMathSymbol?: boolean;
  mass: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

const MATH_SYMBOLS = [
  '∇u', 'H = 0', 'λ', '∂M', 'Δu = 0', 'Ric = 0', '∫_M', 'g_{ij}', 
  '∇·n', 'κ_1, κ_2', 'dω = 0', '∑', '∞', 'M^n → R^{n+k}', 'S_{ij}'
];

const THEME_COLORS: Record<ColorTheme, string[]> = {
  academic: ['#3b82f6', '#60a5fa', '#93c5fd', '#10b981', '#34d399', '#818cf8'],
  cyberpunk: ['#ec4899', '#a855f7', '#06b6d4', '#f59e0b', '#3b82f6', '#f43f5e'],
  sunset: ['#f97316', '#fb7185', '#e11d48', '#c084fc', '#fbbf24', '#f43f5e'],
  emerald: ['#4ade80', '#10b981', '#34d399', '#059669', '#6ee7b7', '#a7f3d0']
};

export const PhysicsBackground: React.FC<PhysicsBackgroundProps> = ({
  mode = 'constellation',
  colorTheme = 'emerald',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<NodeParticle[]>([]);
  const shockwavesRef = useRef<Shockwave[]>([]);
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean; active: boolean }>({
    x: -1000,
    y: -1000,
    isDown: false,
    active: false,
  });

  const [currentMode, setCurrentMode] = useState<PhysicsMode>(mode);
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(colorTheme);
  const [gravity, setGravity] = useState<number>(0);
  const [nodeCount, setNodeCount] = useState<number>(65);
  const [showConnections, setShowConnections] = useState<boolean>(true);
  const [explosionCounter, setExplosionCounter] = useState<number>(0);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  // Sync props to state if props change
  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  useEffect(() => {
    setCurrentTheme(colorTheme);
  }, [colorTheme]);

  // Spawn initial ambient nodes
  const initNodes = (width: number, height: number, count: number) => {
    const palette = THEME_COLORS[currentTheme];
    const newNodes: NodeParticle[] = [];

    for (let i = 0; i < count; i++) {
      const isSymbol = Math.random() < 0.25;
      const color = palette[Math.floor(Math.random() * palette.length)];
      newNodes.push({
        id: Math.random(),
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.6,
        vy: (Math.random() - 0.5) * 1.6,
        radius: isSymbol ? 10 : Math.random() * 3 + 2,
        color,
        baseAlpha: Math.random() * 0.4 + 0.4,
        alpha: Math.random() * 0.4 + 0.4,
        symbol: isSymbol ? MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)] : undefined,
        isMathSymbol: isSymbol,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.04,
        mass: Math.random() * 1.5 + 0.8,
      });
    }
    nodesRef.current = newNodes;
  };

  // Helper to trigger exploding node burst at (x, y)
  const triggerExplosionAt = (x: number, y: number, burstCount = 24) => {
    const palette = THEME_COLORS[currentTheme];
    const newParticles: NodeParticle[] = [];

    for (let i = 0; i < burstCount; i++) {
      const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 8 + 3;
      const isSymbol = Math.random() < 0.4;
      const color = palette[Math.floor(Math.random() * palette.length)];

      newParticles.push({
        id: Math.random(),
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: isSymbol ? 12 : Math.random() * 5 + 3,
        color,
        baseAlpha: 0.9,
        alpha: 0.9,
        life: 1,
        maxLife: Math.random() * 80 + 40,
        symbol: isSymbol ? MATH_SYMBOLS[Math.floor(Math.random() * MATH_SYMBOLS.length)] : undefined,
        isMathSymbol: isSymbol,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.1,
        mass: 1,
      });
    }

    // Add a shockwave ring
    shockwavesRef.current.push({
      x,
      y,
      radius: 5,
      maxRadius: 180,
      alpha: 0.8,
      color: palette[Math.floor(Math.random() * palette.length)],
    });

    nodesRef.current.push(...newParticles);
    setExplosionCounter((prev) => prev + 1);
  };

  // Setup Canvas & Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (nodesRef.current.length < nodeCount) {
        initNodes(width, height, nodeCount);
      }
    };

    window.addEventListener('resize', handleResize);
    initNodes(width, height, nodeCount);

    // Global Pointer Listeners for interactive click explosions
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      let px = 0;
      let py = 0;
      if ('touches' in e) {
        if (e.touches.length > 0) {
          px = e.touches[0].clientX;
          py = e.touches[0].clientY;
        }
      } else {
        px = (e as MouseEvent).clientX;
        py = (e as MouseEvent).clientY;
      }

      // Check if clicking inside physics control panel UI to avoid accidental explosion trigger
      const panelEl = document.getElementById('physics-toybox-panel');
      if (panelEl && panelEl.contains(e.target as Node)) {
        return;
      }

      triggerExplosionAt(px, py, 28);
    };

    const handlePointerMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Main Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const linkDistSq = 140 * 140;

      // 1. Update & Draw Shockwaves
      for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
        const sw = shockwavesRef.current[i];
        sw.radius += 5;
        sw.alpha -= 0.02;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwavesRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.globalAlpha = sw.alpha;
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        // Push nearby nodes radially away from shockwave edge
        for (let j = 0; j < nodes.length; j++) {
          const n = nodes[j];
          const dx = n.x - sw.x;
          const dy = n.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - sw.radius) < 25 && dist > 0.1) {
            const force = (1 - Math.abs(dist - sw.radius) / 25) * 4;
            n.vx += (dx / dist) * force;
            n.vy += (dy / dist) * force;
          }
        }
      }

      // 2. Draw Connected Edge Lines (Geometric Constellation Grid)
      if (showConnections) {
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const n1 = nodes[i];
            const n2 = nodes[j];
            const dx = n2.x - n1.x;
            const dy = n2.y - n1.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < linkDistSq) {
              const alpha = (1 - Math.sqrt(distSq) / 140) * 0.25 * Math.min(n1.alpha, n2.alpha);
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);
              ctx.strokeStyle = n1.color;
              ctx.globalAlpha = alpha;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Update Node Physics Positions & Forces
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];

        // Apply Mouse Force based on current physics mode
        if (mouse.active) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mDistSq = mdx * mdx + mdy * mdy;
          const mDist = Math.sqrt(mDistSq);

          if (mDist < 250 && mDist > 1) {
            const normX = mdx / mDist;
            const normY = mdy / mDist;

            if (currentMode === 'attract') {
              const force = (250 - mDist) * 0.003;
              n.vx += normX * force;
              n.vy += normY * force;
            } else if (currentMode === 'repel') {
              const force = (250 - mDist) * 0.005;
              n.vx -= normX * force;
              n.vy -= normY * force;
            } else if (currentMode === 'orbit') {
              const force = (250 - mDist) * 0.002;
              // Tangential orbit force
              n.vx += -normY * force + normX * 0.001;
              n.vy += normX * force + normY * 0.001;
            } else if (currentMode === 'curvatureFlow') {
              // Pull toward cursor weighted by mean curvature simulation
              const force = Math.sin(mDist * 0.05) * 0.3;
              n.vx += normX * force;
              n.vy += normY * force;
            }
          }
        }

        // Apply Gravity if set
        if (gravity !== 0) {
          n.vy += gravity * 0.1;
        }

        // Friction & Velocity Damping
        n.vx *= 0.985;
        n.vy *= 0.985;

        // Position update
        n.x += n.vx;
        n.y += n.vy;

        if (n.vRot && n.rotation !== undefined) {
          n.rotation += n.vRot;
        }

        // Particle Lifetime management for explosion fragments
        if (n.life !== undefined && n.maxLife !== undefined) {
          n.life += 1;
          n.alpha = (1 - n.life / n.maxLife) * n.baseAlpha;

          if (n.life >= n.maxLife) {
            // Remove exploded node if ambient node count is high, else reset to ambient
            if (nodes.length > nodeCount) {
              nodes.splice(i, 1);
              continue;
            } else {
              delete n.life;
              delete n.maxLife;
              n.alpha = n.baseAlpha;
              n.x = Math.random() * width;
              n.y = Math.random() * height;
            }
          }
        }

        // Screen Boundary Bounce with elasticity
        const bounce = 0.8;
        if (n.x < 0) {
          n.x = 0;
          n.vx *= -bounce;
        } else if (n.x > width) {
          n.x = width;
          n.vx *= -bounce;
        }

        if (n.y < 0) {
          n.y = 0;
          n.vy *= -bounce;
        } else if (n.y > height) {
          n.y = height;
          n.vy *= -bounce;
        }

        // 4. Render Node Particle / Math Symbol
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, n.alpha));

        if (n.isMathSymbol && n.symbol) {
          ctx.font = '600 13px "STIX Two Text", "Inter", serif';
          ctx.fillStyle = n.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          if (n.rotation) {
            ctx.translate(n.x, n.y);
            ctx.rotate(n.rotation);
            ctx.fillText(n.symbol, 0, 0);
          } else {
            ctx.fillText(n.symbol, n.x, n.y);
          }
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = n.color;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [currentMode, currentTheme, gravity, nodeCount, showConnections]);

  // Handler for trigger all nodes explode
  const explodeAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const w = canvas.width;
    const h = canvas.height;
    for (let i = 0; i < 4; i++) {
      triggerExplosionAt(
        Math.random() * (w * 0.8) + w * 0.1,
        Math.random() * (h * 0.8) + h * 0.1,
        20
      );
    }
  };

  return (
    <>
      {/* Fullscreen Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
      />

      {/* Floating Interactive Physics Toybox Widget */}
      <div
        id="physics-toybox-panel"
        className="fixed bottom-4 right-4 z-50 transition-all duration-300"
      >
        {!isPanelOpen ? (
          <button
            onClick={() => setIsPanelOpen(true)}
            className="flex items-center gap-2 bg-slate-900/95 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 px-4 py-2.5 rounded-full border border-emerald-500/40 shadow-lg shadow-emerald-500/10 backdrop-blur-md font-mono text-xs sm:text-sm cursor-pointer transition-all hover:scale-105"
            title="Click to customize Interactive Background Physics!"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span>Physics Simulation Toybox</span>
            {explosionCounter > 0 && (
              <span className="bg-emerald-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full font-mono">
                {explosionCounter} bursts
              </span>
            )}
          </button>
        ) : (
          <div className="bg-slate-950/95 text-slate-200 border border-emerald-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl w-72 sm:w-80 text-xs sm:text-sm space-y-3.5 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2 font-mono font-bold text-emerald-400 uppercase">
                <i className="fa-solid fa-atom text-emerald-400"></i>
                <span>Active Node Simulation</span>
              </div>
              <button
                onClick={() => setIsPanelOpen(false)}
                className="text-slate-400 hover:text-white px-1.5 py-0.5 rounded hover:bg-slate-800 transition"
              >
                ✕
              </button>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              💡 <strong>Click anywhere on the webpage</strong> to explode geometric nodes & math formulas!
            </p>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={explodeAll}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-1.5 px-2.5 rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 shadow transition cursor-pointer"
              >
                <i className="fa-solid fa-burst text-amber-300"></i>
                <span>Explode All!</span>
              </button>
              <button
                onClick={() => {
                  nodesRef.current = [];
                  shockwavesRef.current = [];
                  if (canvasRef.current) {
                    initNodes(canvasRef.current.width, canvasRef.current.height, nodeCount);
                  }
                }}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 py-1.5 px-2.5 rounded-lg font-medium text-xs flex items-center justify-center gap-1.5 transition cursor-pointer border border-slate-700"
              >
                <i className="fa-solid fa-rotate-left"></i>
                <span>Reset Nodes</span>
              </button>
            </div>

            {/* Mouse Force Modes */}
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Mouse Force Mode:
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                {[
                  { id: 'constellation', label: '🕸️ Constellation', desc: 'Floating mesh' },
                  { id: 'attract', label: '🧲 Attract Gravity', desc: 'Pull to cursor' },
                  { id: 'repel', label: '💥 Repel Force', desc: 'Push from cursor' },
                  { id: 'orbit', label: '🪐 Planetary Orbit', desc: 'Swirl around' },
                  { id: 'curvatureFlow', label: '🌊 Mean Curvature', desc: 'Geometric flow' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentMode(item.id as PhysicsMode)}
                    className={`px-2 py-1.5 rounded-md text-left transition cursor-pointer ${
                      currentMode === item.id
                        ? 'bg-blue-600/80 text-white font-medium border border-blue-400/50'
                        : 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-300'
                    }`}
                  >
                    <div className="font-medium">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Themes */}
            <div>
              <label className="block text-[11px] font-medium text-slate-300 mb-1">
                Color Palette:
              </label>
              <div className="flex gap-1.5">
                {[
                  { id: 'academic', label: 'Academic' },
                  { id: 'cyberpunk', label: 'Cyber' },
                  { id: 'sunset', label: 'Sunset' },
                  { id: 'emerald', label: 'Emerald' },
                ].map((thm) => (
                  <button
                    key={thm.id}
                    onClick={() => setCurrentTheme(thm.id as ColorTheme)}
                    className={`flex-1 py-1 rounded text-[10px] font-medium transition cursor-pointer ${
                      currentTheme === thm.id
                        ? 'bg-blue-500 text-white font-bold'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {thm.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Adjustments */}
            <div className="space-y-2 pt-1 border-t border-slate-800">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Gravity:</span>
                <div className="flex gap-1">
                  {[0, 0.5, 1.5].map((gVal) => (
                    <button
                      key={gVal}
                      onClick={() => setGravity(gVal)}
                      className={`px-2 py-0.5 rounded text-[10px] ${
                        gravity === gVal ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {gVal === 0 ? 'Zero G' : `${gVal}g`}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Node Connections:</span>
                <button
                  onClick={() => setShowConnections(!showConnections)}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                    showConnections ? 'bg-blue-600/80 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {showConnections ? 'Visible ON' : 'Hidden OFF'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

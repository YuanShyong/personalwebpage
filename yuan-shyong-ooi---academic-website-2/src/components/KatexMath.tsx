import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface KatexMathProps {
  math: string;
  block?: boolean;
  className?: string;
}

export const KatexMath: React.FC<KatexMathProps> = ({ math, block = false, className = '' }) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: block,
          throwOnError: false,
        });
      } catch (err) {
        console.warn('KaTeX error:', err);
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math, block]);

  return <span ref={containerRef} className={`inline-block ${className}`} />;
};

// Helper component to render HTML text containing inline math like $...$ or LaTeX code
export const FormattedMathText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  if (!text) return null;

  // Split text by $...$ to render inline math
  const parts = text.split(/(\$[^\$]+\$)/g);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const mathContent = part.slice(1, -1);
          return <KatexMath key={idx} math={mathContent} block={false} className="mx-0.5 text-blue-300 font-medium" />;
        }
        return <span key={idx} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </span>
  );
};

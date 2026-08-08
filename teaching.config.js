// =========================================================================
// TEACHING CONFIGURATION FILE (teaching.config.js)
// Edit this file directly to update academic courses, teaching experience,
// upcoming and past seminar talks, office hours, and student resources!
// =========================================================================

const teachingConfig = {
  teachingStatement: "My teaching philosophy focuses on demystifying abstract geometric ideas through visualization, dynamic problem solving, and rigorous proofs. I encourage students to see calculus and differential geometry not merely as formulas, but as a rich visual language describing curves, surfaces, curvature, and physical space.",

  // Teaching Positions & Courses Taught
  experience: [
    {
      institution: "National University of Tainan (NUTN)",
      role: "Assistant Professor (2026 - Present)",
      years: "2026 - Present",
      courses: "Differential Geometry, Advanced Calculus, Linear Algebra, Multivariable Calculus.",
      courseList: [
        {
          code: "MATH 301",
          name: "Differential Geometry",
          semester: "Fall 2026",
          level: "Undergraduate",
          description: "Curves and surfaces in R3, Gauss map, first and second fundamental forms, principal curvatures, Gauss-Bonnet theorem.",
          notesLink: "#"
        },
        {
          code: "MATH 201",
          name: "Advanced Calculus I",
          semester: "Fall 2026",
          level: "Undergraduate",
          description: "Topology of Euclidean spaces, limits, continuity, compactness, multivariable differentiation, and Taylor's theorem.",
          notesLink: "#"
        }
      ]
    },
    {
      institution: "National Taiwan University (NTU)",
      role: "Instructor (2024 - 2025)",
      years: "2024 - 2025",
      courses: "Calculus 1 & 2, Multivariable Calculus, Vector Calculus.",
      courseList: [
        {
          code: "CAL 101",
          name: "Calculus I & II",
          semester: "2024 - 2025",
          level: "Undergraduate",
          description: "Single and multivariable differential and integral calculus for mathematics and science majors.",
          notesLink: "#"
        },
        {
          code: "CAL 202",
          name: "Vector Calculus & Differential Forms",
          semester: "Spring 2025",
          level: "Undergraduate",
          description: "Line and surface integrals, Green's, Stokes', and Divergence theorems with introduction to differential forms.",
          notesLink: "#"
        }
      ]
    },
    {
      institution: "Pusan National University (PNU)",
      role: "Co-Lecturer (2023 - 2024)",
      years: "2023 - 2024",
      courses: "Graduate course on Geometric Measure Theory and Minimal Surfaces.",
      courseList: [
        {
          code: "GRAD 702",
          name: "Geometric Measure Theory",
          semester: "Fall 2023",
          level: "Graduate",
          description: "Hausdorff measures, rectifiable sets, varifolds, currents, and regularity theory for area-minimizing hypersurfaces.",
          notesLink: "#"
        }
      ]
    }
  ],

  // Academic Talks & Seminars
  talks: [
    {
      id: "talk-2026-hainan",
      date: "July 2026",
      event: "Hainan University Geometry Workshop",
      title: "Rigidity and Stability of Translating Solitons in MCF",
      location: "Hainan, China",
      link: "",
      type: "upcoming"
    },
    {
      id: "talk-2026-ibs-cgp",
      date: "July 2026",
      event: "IBS-CGP Seminar",
      title: "Uniqueness and Singularities of Minimal Submanifolds",
      location: "Pohang, South Korea",
      link: "https://cgp.ibs.re.kr/activities/seminars/cgp_seminar",
      type: "upcoming"
    },
    {
      id: "talk-2026-nptu",
      date: "March 2026",
      event: "National Pingtung University Department Colloquium",
      title: "An Introduction to Mean Curvature Flow and Soliton Solutions",
      location: "Pingtung, Taiwan",
      link: "https://math.nptu.edu.tw/p/406-1138-193456,r964.php?Lang=zh-tw",
      type: "past"
    },
    {
      id: "talk-2026-nutn",
      date: "March 2026",
      event: "National University of Tainan Applied Math Seminar",
      title: "Geometric Analysis of Higher Codimension Minimal Submanifolds",
      location: "Tainan, Taiwan",
      link: "https://www.nutn.edu.tw/information_details.html?boardno=103020&classid=3",
      type: "past"
    },
    {
      id: "talk-2026-ncts",
      date: "March 2026",
      event: "NCTS Differential Geometry Seminar",
      title: "Stability of λ-Translators in Weighted Space",
      location: "NTU, Taipei, Taiwan",
      link: "https://ncts.ntu.edu.tw/events_1_detail.php?nid=3081",
      type: "past"
    },
    {
      id: "talk-2026-tms",
      date: "Jan 2026",
      event: "2026 TMS Annual Meeting",
      title: "Special Session on Geometric Analysis & Nonlinear PDEs",
      location: "Taiwan Mathematical Society",
      link: "https://2026tms-en.tms.org.tw/abstract/special-sessions",
      type: "past"
    },
    {
      id: "talk-2025-japan-taiwan",
      date: "Nov 2025",
      event: "The 5th Japan-Taiwan Joint Conference on Differential Geometry",
      title: "Rigidity of Graphical Translators Moving in Non-Graphical Direction",
      location: "Tokushima, Japan",
      link: "https://www-math.st.tokushima-u.ac.jp/~yasumoto/5thJapanTaiwan20251102/",
      type: "past"
    },
    {
      id: "talk-2025-nthu",
      date: "March 2025",
      event: "NTHU Geometry Seminar",
      title: "Minimal Submanifolds with Isolated Singularities",
      location: "National Tsing Hua University, Hsinchu",
      link: "",
      type: "past"
    },
    {
      id: "talk-2024-ncts-forum",
      date: "Aug 2024",
      event: "NCTS: Young Geometric Analysts Forum",
      title: "Recent Advances in High Codimension Minimal Surfaces",
      location: "Taipei, Taiwan",
      link: "",
      type: "past"
    },
    {
      id: "talk-2024-taipei-postdoc",
      date: "April 2024",
      event: "Academia Sinica and NCTS: Taipei Postdoc Seminar",
      title: "Soliton Solutions in Mean Curvature Flow",
      location: "Academia Sinica, Taipei",
      link: "",
      type: "past"
    }
  ],

  // Student Office Hours
  officeHours: {
    time: "Tuesdays & Thursdays, 14:00 - 16:00 (or by email appointment)",
    location: "Department of Applied Mathematics, NUTN Campus",
    notes: "Students in Calculus or Differential Geometry are welcome to drop by for questions or problem sets!"
  },

  // Student Resources & Fun Links
  studentResources: [
    {
      title: "MathCha Online Plotter",
      description: "Interactive WYSIWYG mathematical diagram editor and LaTeX drawing tool.",
      url: "https://www.mathcha.io",
      icon: "fa-solid fa-chart-line"
    },
    {
      title: "3D Tetris Game (Created by Dr. Ooi)",
      description: "A fun spatial-reasoning geometry game built in HTML5/WebGL.",
      url: "https://yuanshyong.github.io/3d-tetris/",
      icon: "fa-solid fa-cubes"
    },
    {
      title: "Board Game Arena",
      description: "Strategy board games platform - great for logical strategy exercise!",
      url: "https://boardgamearena.com/player?id=92004757",
      icon: "fa-solid fa-chess"
    }
  ]
};

export default teachingConfig;

if (typeof module !== 'undefined') {
  module.exports = teachingConfig;
}

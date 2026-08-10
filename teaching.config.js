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
      courses: "Geometry, Advanced Calculus I, Probability Theory.",
      courseList: [
        {
          id: "math-301-diff-geom",
          code: "150024",
          name: "幾何學 Geometry",
          semester: "Fall 2026",
          level: "Undergraduate",
          institution: "NUTN",
          time: "星期四，節次7、8、9",
          location: "C302",
          instructor: "Dr. Yuan Shyong Ooi (黃垣熊)",
          officeHours: "Mon 13:00 - 14:50 & Tue 16:00 - 17:50",
          description: "本課程會根據 Manfredo P. do Carmo 的 Differential Geometry of Curves and Surfaces 2/e, 2016 第一章到第四章來上。",
          prerequisites: "線性代數、微積分、高等微積分（二）",
          textbook: "Manfredo P. do Carmo 的 Differential Geometry of Curves and Surfaces 2/e, 2016",
          gradingPolicy: "作業 (30%), 期中考(30%), 期末上台報告(30%), 出席率（10%）",
          announcements: [
            {
              date: "Sept 10, 2026",
              title: "Welcome to Differential Geometry!",
              content: "Course syllabus and first homework set have been uploaded. Office hours start next week."
            }
          ],
          syllabus: [
            { week: "Week 1-3", topic: "Theory of Plane and Space Curves", description: "Arc length parameterization, Frenet-Serret frame, curvature, and torsion." },
            { week: "Week 4-7", topic: "Surfaces in R3 and First Fundamental Form", description: "Regular surfaces, tangent plane, first fundamental form, and isometry." },
            { week: "Week 8-11", topic: "Gauss Map and Second Fundamental Form", description: "Shape operator, normal curvature, principal curvatures, Gauss and mean curvatures." },
            { week: "Week 12-16", topic: "Intrinsic Geometry & Gauss-Bonnet Theorem", description: "Geodesics, parallel transport, Theorema Egregium, and global Gauss-Bonnet formula." }
          ],
          materials: [
            { title: "Course Syllabus (PDF)", link: "#", type: "pdf", date: "Fall 2026" },
            { title: "Lecture Notes 01: Curves & Frenet Frame", link: "#", type: "notes", date: "Sept 2026" },
            { title: "Homework 01 - Curves Parameterization", link: "#", type: "assignment", date: "Sept 2026" }
          ]
        },
        {
          id: "150012-adv-calc",
          code: "150012",
          name: "高等微積分（一）Advanced Calculus I",
          semester: "Fall 2026",
          level: "Undergraduate",
          institution: "NUTN",
          time: "星期一，節次A、B；星期四，節次A、B",
          location: "C305",
          instructor: "Dr. Yuan Shyong Ooi (黃垣熊)",
          officeHours: "Mon 13:00 - 14:50 & Tue 16:00 - 17:50",
          description: "高等微積分是微積分的一門延伸課程。在一般的微積分課程中，教學內容比較偏重計算和應用，然而在這門課程中將引進分析上比較嚴謹的語言及工具，它提供微積分中一些重要結果的理論基礎。學生藉由本課程所學習到的知識可做為將來學習其他高等分析課程的基礎。第一學期主要著重在Wade課本內容第一章到第五章，關於單變數函數的分析技巧。",
          prerequisites: "微積分",
          textbook: "William R. Wade, An Introduction to Analysis, 4th Edition, 2022",
          gradingPolicy: "作業 (30%), 期中考 (35%), 期末考 (35%)",
          announcements: [
            {
              date: "Sept 12, 2026",
              title: "Homework 1 Released",
              content: "Problem set 1 on metric space topology is now posted under Materials."
            }
          ],
          syllabus: [
            { week: "Week 1-4", topic: "Euclidean Space & Metric Topology", description: "Open/closed sets, limit points, convergence, and completeness." },
            { week: "Week 5-8", topic: "Compactness and Connectedness", description: "Heine-Borel theorem, continuous functions on compact sets, uniform continuity." },
            { week: "Week 9-12", topic: "Multivariable Differentiation", description: "Total derivative, directional derivatives, Taylor series, and extrema." },
            { week: "Week 13-16", topic: "Inverse and Implicit Function Theorems", description: "Contraction mapping principle, proofs and applications of Inverse/Implicit theorems." }
          ],
          materials: [
            { title: "Syllabus & Grading Scheme", link: "#", type: "pdf", date: "Fall 2026" },
            { title: "Problem Set 01 (Real Analysis)", link: "#", type: "assignment", date: "Sept 2026" }
          ]
        },
        {
          id: "150014-prob-theory",
          code: "150014",
          name: "幾率論 Probability Theory",
          semester: "Fall 2026",
          level: "Undergraduate",
          institution: "NUTN",
          time: "星期二，節次7、8、9",
          location: "J104",
          instructor: "Dr. Yuan Shyong Ooi (黃垣熊)",
          officeHours: "Mon 13:00 - 14:50 & Tue 16:00 - 17:50",
          description: "本課程主要根據 Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman 的 Probability and Statistical Inference (GE)(10版) 來上。上學期內容包含課本的第一章至第五章。習題也會從課本出。",
          prerequisites: "微積分",
          textbook: " Robert V. Hogg, Elliot A. Tanis, Dale L. Zimmerman 的 Probability and Statistical Inference (GE)(10版)",
          gradingPolicy: "作業 (30%), 期中考 (35%), 期末考 (35%)",
          announcements: [
            {
              date: "Sept 12, 2026",
              title: "Homework 1 Released",
              content: "Problem set 1 on metric space topology is now posted under Materials."
            }
          ],
          syllabus: [
            { week: "Week 1-4", topic: "Euclidean Space & Metric Topology", description: "Open/closed sets, limit points, convergence, and completeness." },
            { week: "Week 5-8", topic: "Compactness and Connectedness", description: "Heine-Borel theorem, continuous functions on compact sets, uniform continuity." },
            { week: "Week 9-12", topic: "Multivariable Differentiation", description: "Total derivative, directional derivatives, Taylor series, and extrema." },
            { week: "Week 13-16", topic: "Inverse and Implicit Function Theorems", description: "Contraction mapping principle, proofs and applications of Inverse/Implicit theorems." }
          ],
          materials: [
            { title: "Syllabus & Grading Scheme", link: "#", type: "pdf", date: "Fall 2026" },
            { title: "Problem Set 01 (Real Analysis)", link: "#", type: "assignment", date: "Sept 2026" }
          ]
        }
      ]
    },
    {
      institution: "National Taiwan University (NTU)",
      role: "Instructor (2024 - 2025)",
      years: "2024 - 2025",
      courses: "Calculus 1 & 2 (Single variable calculus), Calculus 3 & 4 (Multivariable calculus and Vector calculus)",
      courseList: [
        {
          id: "cal-12-ntu",
          code: "MATH4006/4007",
          name: "Calculus 1 & 2",
          semester: "Fall 2024",
          level: "Undergraduate",
          institution: "NTU",
          time: "NA",
          location: "NA",
          officeHours: "NA",
          description: "Single variable calculus",
          textbook: "Stewart, Calculus: Early Transcendentals 9/e Metric Version"
        },
        {
          id: "cal-34-ntu",
          code: "MATH4008/4009",
          name: "Calculus 3 & 4",
          semester: "Spring 2025",
          level: "Undergraduate",
          institution: "NTU",
          time: "NA",
          location: "NA",
          officeHours: "NA",
          description: "Multivariable Calculus and Vector Calculus",
          textbook: "Stewart, Calculus: Early Transcendentals 9/e Metric Version"
        }
      ]
    },
    {
      institution: "Pusan National University (PNU)",
      role: "Co-Lecturer (2023 - 2024)",
      years: "2023 - 2024",
      courses: "Graduate course on Geometric Measure Theory.",
      courseList: [
        {
          name: "Geometric Measure Theory",
          semester: "Fall 2023",
          level: "Graduate",
          institution: "PNU",
          time: "NA",
          location: "NA",
          officeHours: "NA",
          description: "Hausdorff measures, rectifiable sets, varifolds, currents, and regularity theory for area-minimizing hypersurfaces.",
          textbook: "L. Simon, 'Lectures on Geometric Measure Theory'"
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
      title: "Rigidity and Classification of Translating Solitons under Symmetry",
      location: "Hainan, China",
      link: "",
      type: "past"
    },
    {
      id: "talk-2026-ibs-cgp",
      date: "July 2026",
      event: "IBS-CGP Seminar",
      title: "Rigidity and Classification of Translating Solitons under Symmetry",
      location: "Pohang, South Korea",
      link: "https://cgp.ibs.re.kr/activities/seminars/cgp_seminar",
      type: "past"
    },
    {
      id: "talk-2026-nptu",
      date: "March 2026",
      event: "National Pingtung University Department Colloquium",
      title: "Rigidity and Classification of Graphical Mean Curvature Flow Translators and λ-Translators",
      location: "Pingtung, Taiwan",
      link: "https://math.nptu.edu.tw/p/406-1138-193456,r964.php?Lang=zh-tw",
      type: "past"
    },
    {
      id: "talk-2026-nutn",
      date: "March 2026",
      event: "National University of Tainan Applied Math Seminar",
      title: "生活中的極小曲面",
      location: "Tainan, Taiwan",
      link: "https://www.nutn.edu.tw/information_details.html?boardno=103020&classid=3",
      type: "past"
    },
    {
      id: "talk-2026-ncts",
      date: "March 2026",
      event: "NCTS Differential Geometry Seminar",
      title: "Recent Progress in Rigidity of Free Boundary Minimal Hypersurfaces",
      location: "NTU, Taipei, Taiwan",
      link: "https://ncts.ntu.edu.tw/events_1_detail.php?nid=3081",
      type: "past"
    },
    {
      id: "talk-2026-tms",
      date: "Jan 2026",
      event: "2026 TMS Annual Meeting",
      title: "Rigidity and Stability of Graphical Translators and λ-Translating Hypersurfaces",
      location: "Taiwan Mathematical Society",
      link: "https://2026tms-en.tms.org.tw/abstract/special-sessions",
      type: "past"
    },
    {
      id: "talk-2025-japan-taiwan",
      date: "Nov 2025",
      event: "The 5th Japan-Taiwan Joint Conference on Differential Geometry",
      title: "Characterizing stable minimal surfaces outside a unit ball",
      location: "Tokushima, Japan",
      link: "https://www-math.st.tokushima-u.ac.jp/~yasumoto/5thJapanTaiwan20251102/",
      type: "past"
    },
    {
      id: "talk-2025-nthu",
      date: "March 2025",
      event: "NTHU Geometry Seminar",
      location: "National Tsing Hua University, Hsinchu",
      link: "",
      type: "past"
    },
    {
      id: "talk-2024-ncts-forum",
      date: "Aug 2024",
      event: "NCTS: Young Geometric Analysts Forum",
      location: "Taipei, Taiwan",
      link: "",
      type: "past"
    },
    {
      id: "talk-2024-taipei-postdoc",
      date: "April 2024",
      event: "Academia Sinica and NCTS: Taipei Postdoc Seminar",
      location: "Academia Sinica, Taipei",
      link: "",
      type: "past"
    }
  ],

  // Student Office Hours
  officeHours: {
    time: "Mon 13:00 - 14:50 & Tue 16:00 - 17:50",
    location: "C209-3, Department of Applied Mathematics, NUTN",
    notes: "Students are welcome to drop by for questions or problem sets!"
  },

  // Student Resources & Fun Links
  studentResources: [
    {
      title: "MathCha Online Plotter",
      description: "Interactive WYSIWYG mathematical diagram editor and LaTeX drawing tool.",
      url: "https://www.mathcha.io",
      icon: "fa-solid fa-chart-line"
    },
  ]
};

export default teachingConfig;

if (typeof module !== 'undefined') {
  module.exports = teachingConfig;
}

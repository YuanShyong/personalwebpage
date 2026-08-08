// =========================================================================
// PERSONAL WEBSITE CONFIGURATION & DATA (ROBERTA VALTORTA STYLE)
// =========================================================================
// All website content is stored cleanly in this single configuration file.
// To update your website, simply edit the text below!
// =========================================================================

const siteData = {
  // Basic Profile Info
  profile: {
    name: "Yuan Shyong Ooi, PhD",
    chineseName: "黃垣熊",
    role: "Assistant Professor",
    email: "shyong224@gmail.com",
    secondaryEmail: "yuanshyong@ncts.ntu.edu.tw",
    department: "Department of Applied Mathematics",
    institution: "National University of Tainan (NUTN)",
    location: "Tainan, Taiwan",
    bannerImage: "assets/banner.jpg", // Replace with custom banner if desired
    avatarImage: "assets/photo.jpg",  // Replace with profile photo
    cvLink: "assets/cv.pdf",          // Path or URL to CV PDF
    
    // Academic & Social Links
    links: [
      { name: "Google Scholar", icon: "fa-solid fa-graduation-cap", url: "#" },
      { name: "MathSciNet", icon: "fa-solid fa-square-root-variable", url: "https://mathscinet.ams.org/mathscinet/MRAuthorID/1303444" },
      { name: "ResearchGate", icon: "fa-brands fa-researchgate", url: "https://www.researchgate.net/profile/Yuan-Shyong-Ooi" },
      { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/yuanshyong" },
      { name: "NCTS Profile", icon: "fa-solid fa-building-columns", url: "https://ncts.ntu.edu.tw/people_detail.php?gid=436&bgid=7" }
    ]
  },

  // Homepage Tagline & Bio
  home: {
    tagline: "Differential geometer exploring minimal submanifolds, mean curvature flow, and soliton rigidity.",
    bioParagraphs: [
      "I am an Assistant Professor in the <a href='https://www.amath.nutn.edu.tw/' target='_blank'>Department of Applied Mathematics at National University of Tainan (NUTN)</a> in Taiwan. I earned my Ph.D. in Mathematics from National Taiwan University in 2020 under the supervision of Prof. Yng-Ing Lee.",
      "Prior to joining NUTN, I was a Postdoctoral Fellow at the National Center for Theoretical Sciences (NCTS) at National Taiwan University (2024–2026), a Postdoctoral Fellow at Pusan National University in South Korea (2021–2024), and an Instructor/Postdoctoral Fellow at National Taiwan University (2020–2021).",
      "My research lies at the intersection of differential geometry and geometric analysis. I focus primarily on minimal submanifold theory—including higher codimension minimal submanifolds, Bernstein-type problems, and graphical minimal submanifolds—as well as soliton solutions of mean curvature flow (such as self-shrinkers and \\(\\lambda\\)-translating hypersurfaces), stability, and rigidity theorems.",
      "Additional details about my research can be explored in the publications and projects sections. For inquiries or potential academic collaborations, feel free to reach out via email."
    ],
    highlightBadge: {
      title: "Faculty Appointment",
      description: "Appointed as Full-time Faculty Member (Assistant Professor) in the Department of Applied Mathematics at National University of Tainan starting August 2026."
    }
  },

  // Research Projects / Themes
  projects: [
    {
      title: "Minimal Submanifolds in Higher Codimension",
      category: "Geometric Analysis",
      description: "Investigating the existence, uniqueness, and isolated singularity behavior of minimal submanifolds in higher codimension ambient spaces, extending classical codimension-one results and Bernstein-type theorems."
    },
    {
      title: "Soliton Solutions for Mean Curvature Flow",
      category: "Differential Geometry & Geometric Flows",
      description: "Studying self-similar solutions, self-shrinkers, and translating solitons for mean curvature flow (MCF). Focus on classifying graphical translators moving along non-graphical directions."
    },
    {
      title: "Stability & Rigidity of \\(\\lambda\\)-Translating Hypersurfaces",
      category: "Weighted Riemannian Geometry",
      description: "Defining stability notions for \\(\\lambda\\)-translators in weighted Euclidean spaces and establishing characterizations of grim reaper hyperplanes, cylindrical translators, and hyperplanes under curvature bounds."
    }
  ],

  // Publications
  publications: [
    {
      title: "Stability Properties and Rigidity Results of \\(\\lambda\\)-Translating Hypersurfaces",
      authors: "Yuan Shyong Ooi and Jihyeon Lee",
      journal: "Communications in Analysis and Geometry",
      year: "2023",
      volume: "In Press / Volume 23",
      doi: "",
      arxiv: "",
      pdf: "",
      abstract: "Defines stability for \\(\\lambda\\)-translators and obtains new rigidity theorems, proving characterizations of grim reaper hyperplanes and hyperplanes under curvature bounds."
    },
    {
      title: "Rigidity results for graphical translators for the mean curvature flow moving in non-graphical direction",
      authors: "John Man Shun Ma, Yuan Shyong Ooi*, and Juncheol Pyo",
      journal: "Proceedings of the American Mathematical Society",
      year: "2023",
      volume: "151, no. 12, pp. 5391–5402",
      doi: "10.1090/proc/16550",
      arxiv: "2210.03707",
      pdf: "",
      abstract: "Establishes rigidity results for graphical translators of mean curvature flow moving along directions non-parallel to the graphical direction."
    },
    {
      title: "Higher codimension minimal submanifold with isolated singularity",
      authors: "Yuan Shyong Ooi",
      journal: "Journal of Geometric Analysis",
      year: "2022",
      volume: "32, no. 5, Paper No. 164, 30 pp.",
      doi: "10.1007/s12220-022-00908-w",
      arxiv: "",
      pdf: "",
      abstract: "Analyzes higher codimension minimal submanifolds possessing isolated singularities, providing existence and regularity criteria."
    },
    {
      title: "Uniqueness of Minimal Graph in General Codimension",
      authors: "Yng-Ing Lee, Yuan Shyong Ooi*, and Mao-Pei Tsui",
      journal: "Journal of Geometric Analysis",
      year: "2019",
      volume: "29, pp. 1211–1233",
      doi: "10.1007/s12220-018-0036-7",
      arxiv: "",
      pdf: "",
      abstract: "Proves uniqueness of graphical minimal submanifolds in general codimension under gradient and metric conditions."
    }
  ],

  // Teaching
  teaching: [
    {
      course: "Advanced Calculus & Probability and Statistics",
      institution: "National University of Tainan (NUTN)",
      role: "Instructor",
      period: "2026 – Present",
      description: "Core undergraduate courses in analysis, probability theory, and mathematical statistics."
    },
    {
      course: "Calculus III & IV (MATH4008/MATH4009)",
      institution: "National Taiwan University (NTU)",
      role: "Instructor",
      period: "Spring 2021",
      description: "Multivariable Calculus and Vector Calculus for mathematics and science majors."
    },
    {
      course: "Real Analysis & Calculus",
      institution: "National Taiwan University (NTU)",
      role: "Teaching Assistant / Tutor",
      period: "2012 – 2018",
      description: "Conducted problem tutorials, grading, and review sessions across 12 academic semesters."
    }
  ],

  // CV Sections (Positions, Education, Talks)
  cv: {
    positions: [
      {
        title: "Assistant Professor",
        institution: "National University of Tainan (NUTN)",
        period: "Aug 2026 – Present",
        location: "Tainan, Taiwan"
      },
      {
        title: "Postdoctoral Fellow",
        institution: "National Center for Theoretical Sciences (NCTS), NTU",
        period: "Mar 2024 – Jul 2026",
        location: "Taipei, Taiwan"
      },
      {
        title: "Adjunct Assistant Professor / Postdoctoral Fellow",
        institution: "National Taiwan University (NTU)",
        period: "Oct 2020 – Jul 2021; Sep 2024 – Jul 2025",
        location: "Taipei, Taiwan"
      },
      {
        title: "Postdoctoral Fellow",
        institution: "Pusan National University (PNU)",
        period: "Aug 2021 – Feb 2024",
        location: "Busan, South Korea"
      }
    ],
    education: [
      {
        degree: "Ph.D. in Mathematics",
        institution: "National Taiwan University (NTU)",
        year: "2014 – 2020",
        thesis: "Dissertation: Existence and Uniqueness of Minimal Submanifold in Higher Codimension (Advisor: Prof. Yng-Ing Lee)"
      },
      {
        degree: "M.Sc. in Mathematics",
        institution: "National Taiwan University (NTU)",
        year: "2011 – 2014",
        thesis: "Thesis: Min-max construction of minimal surface (Advisor: Prof. Yng-Ing Lee)"
      },
      {
        degree: "B.Sc. (Honours) in Mathematics",
        institution: "Universiti Sains Malaysia (USM)",
        year: "2007 – 2010",
        thesis: "Penang, Malaysia"
      }
    ],
    talks: [
      {
        title: "Characterizing Stable Minimal Surface Outside a Unit Ball",
        event: "5th Japan-Taiwan Joint Conference on Differential Geometry",
        location: "Takamatsu, Japan",
        date: "Nov 2025"
      },
      {
        title: "Rigidity result of graphical mean curvature flow translating solution",
        event: "UCSB Differential Geometry Seminar",
        location: "UCSB (Online)",
        date: "Feb 2024"
      },
      {
        title: "Geometry and Symmetric Spaces Seminar",
        event: "2023 OCAMI-RIRCM International Workshop",
        location: "Osaka Metropolitan University, Japan",
        date: "Feb 2023"
      },
      {
        title: "Rigidity and Stability Results for Soliton Solutions in MCF",
        event: "PNU BRL Geometry Seminar Series",
        location: "Pusan National University, Korea",
        date: "2021–2022"
      }
    ]
  },

  // Contact Info
  contact: {
    text: "Feel free to reach out via email for research discussions, preprints, or potential academic collaborations.",
    email: "shyong224@gmail.com",
    office: "Department of Applied Mathematics, National University of Tainan",
    address: "No. 33, Sec. 2, Shu-Lin St., West Central District, Tainan City 70005, Taiwan"
  }
};

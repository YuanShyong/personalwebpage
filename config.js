// =========================================================================
// PERSONAL WEBSITE CONFIGURATION & DATA (UPDATED WITH ALL RECENT DETAILS)
// =========================================================================
// All website content is stored in this single configuration file.
// To update your website, simply edit the text below!
// =========================================================================

const siteData = {
  // Basic Profile Info
  profile: {
    name: "Yuan Shyong Ooi",
    chineseName: "黃垣熊",
    role: "Assistant Professor",
    department: "Department of Applied Mathematics",
    institution: "National University of Tainan (NUTN)",
    location: "Tainan, Taiwan",
    primaryEmail: "yuanshyong@mail.nutn.edu.tw",
    permanentEmail: "shyong224@gmail.com",
    avatarImage: "profile.jpg",  // Path or URL to profile photo
    cvLink: "cv.pdf",           // Path to CV PDF
    
    // Academic & Social Link Chips
    links: [
      { name: "Google Scholar", icon: "fa-solid fa-graduation-cap", url: "https://scholar.google.com.tw/citations?user=v3hHG8gAAAAJ&hl=zh-CN" },
      { name: "arXiv", icon: "fa-solid fa-file-lines", url: "https://arxiv.org/search/?query=Ooi%2C+Yuan+Shyong&searchtype=author" },
      { name: "Genealogy", icon: "fa-solid fa-tree", url: "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=283494" },
      { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/yuanshyong" },
      { name: "Board Game Arena", icon: "fa-solid fa-dice-d20", url: "https://boardgamearena.com/player?id=92004757" },
      { name: "3D Tetris Game", icon: "fa-solid fa-gamepad", url: "https://yuanshyong.github.io/3d-tetris/" }
    ]
  },

  // Homepage Tagline & Bio
  home: {
    tagline: "Assistant Professor in Differential Geometry & Geometric Analysis at National University of Tainan.",
    bioParagraphs: [
      "My family name is Ooi, and Yuan Shyong is my given name. Starting Fall 2026, I am an Assistant Professor in the <a href='https://www.amath.nutn.edu.tw/' target='_blank'>Department of Applied Mathematics</a> at the National University of Tainan (國立臺南大學).",
      "My research interests lie in differential geometry and geometric analysis, with a particular focus on minimal submanifolds, mean curvature flow, and geometric partial differential equations. Driven by a passion for uncovering mathematical truths, I am dedicated to advancing both research and education in these fields.",
      "Born and raised in Malaysia, I completed my Bachelor’s degree at the University of Science, Malaysia (USM). I then moved to Taiwan, where I earned both my M.Sc. and Ph.D. from National Taiwan University (NTU) under the supervision of Professor <a href='https://www.genealogy.math.ndsu.nodak.edu/id.php?id=39253' target='_blank'>Yng-Ing Lee (李瑩英)</a>.",
      "Prior to joining NUTN, I gained extensive research experience through several postdoctoral appointments:<ul><li><strong>Postdoctoral Fellow</strong>, National Center for Theoretical Sciences (<a href='https://ncts.ntu.edu.tw/' target='_blank'>NCTS</a>), Taiwan (Feb 2024 – Jul 2026)</li><li><strong>Postdoctoral Fellow</strong>, Basic Research Laboratory (<a href='https://sites.google.com/view/geometrybrl/people?authuser=0' target='_blank'>BRL</a>), Pusan National University, South Korea, hosted by Professor <a href='https://scholar.google.com/citations?user=RrX0fsEAAAAJ&hl=ko' target='_blank'>Juncheol Pyo</a> (Aug 2021 – Feb 2024)</li><li><strong>Postdoctoral Fellow</strong>, National Taiwan University (Oct 2020 – Jul 2021)</li></ul>",
      "When I’m not doing math, I’m usually playing strategy board games—which, to no one's surprise, turns out to be just more math in disguise. Feel free to find me on <a href='https://boardgamearena.com/player?id=92004757' target='_blank'>BGA (Board Game Arena)</a> or try my <a href='https://yuanshyong.github.io/3d-tetris/' target='_blank'>3D Tetris game</a>."
    ],
    highlightBadge: {
      title: "Faculty Position",
      description: "Assistant Professor in the Department of Applied Mathematics at National University of Tainan (國立臺南大學) starting Fall 2026."
    }
  },

  // Structured Research Interests
  researchCategories: [
    {
      title: "1. Minimal Submanifolds",
      items: [
        "Higher codimension minimal submanifold problems.",
        "Classical minimal hypersurface Bernstein-type problems.",
        "Graphical minimal submanifolds problems (minimal surface systems).",
        "Dirichlet problems for minimal surface system, including existence, regularity, stability, and uniqueness issues."
      ]
    },
    {
      title: "2. Geometric Flow",
      items: [
        "Self-similar solutions of Mean Curvature Flow (MCF).",
        "Rigidity and classification of Mean Curvature Flow soliton solutions."
      ]
    }
  ],

  // Publications & Preprints
  publications: [
    {
      title: "Rigidity results for mean curvature flow graphical translators moving in non-graphical direction",
      authors: "with <a href='https://sites.google.com/view/john-man-shun-ma/home' target='_blank'>John Ma Man Shun</a> and Juncheol Pyo",
      journal: "Proceedings of the American Mathematical Society 151.12 (2023): 5391-5402",
      year: "2023",
      pdf: "papers/rigidity_results.pdf",
      doi: "",
      arxiv: "",
      abstract: "Establishes rigidity theorems for graphical translators of mean curvature flow moving along non-graphical directions."
    },
    {
      title: "Higher codimension minimal submanifold with isolated singularity",
      authors: "Yuan Shyong Ooi",
      journal: "Journal of Geometric Analysis 32, no.5, Paper No. 164, 30 pp",
      year: "2022",
      pdf: "papers/isolated_singularity.pdf",
      doi: "10.1007/s12220-022-00908-w",
      arxiv: "",
      abstract: "Analyzes higher codimension minimal submanifolds possessing isolated singularities, providing existence and regularity results."
    },
    {
      title: "Uniqueness of Minimal Graph in General Codimension",
      authors: "with Yng-Ing Lee and Mao-Pei Tsui",
      journal: "Journal of Geometric Analysis 29, 1211–1233",
      year: "2019",
      pdf: "papers/uniqueness_minimal_graph.pdf",
      doi: "10.1007/s12220-018-0036-7",
      arxiv: "",
      abstract: "Proves uniqueness of graphical minimal submanifolds in general codimension under suitable gradient conditions."
    },
    {
      title: "Stability properties and rigidity results of $\\lambda$-translating hypersurfaces",
      authors: "with <a href='https://sites.google.com/view/jihyeonlee/home' target='_blank'>Jihyeon Lee</a>",
      journal: "Submitted",
      year: "Preprint",
      pdf: "",
      doi: "",
      arxiv: "",
      abstract: "Investigates stability notions for $\\lambda$-translators and proves characterization and rigidity theorems in weighted space."
    }
  ],

  // Recent & Upcoming Talks
  talks: [
    {
      date: "July 2026",
      event: "Hainan University",
      link: ""
    },
    {
      date: "July 2026",
      event: "IBS-CGP Seminar",
      link: "https://cgp.ibs.re.kr/activities/seminars/cgp_seminar"
    },
    {
      date: "March 2026",
      event: "National Pingtung University",
      link: "https://math.nptu.edu.tw/p/406-1138-193456,r964.php?Lang=zh-tw"
    },
    {
      date: "March 2026",
      event: "National University of Tainan",
      link: "https://www.nutn.edu.tw/information_details.html?boardno=103020&classid=3"
    },
    {
      date: "March 2026",
      event: "NCTS Differential Geometry Seminar",
      link: "https://ncts.ntu.edu.tw/events_1_detail.php?nid=3081"
    },
    {
      date: "Jan 2026",
      event: "2026 TMS Annual Meeting",
      link: "https://2026tms-en.tms.org.tw/abstract/special-sessions"
    },
    {
      date: "Nov 2025",
      event: "The 5th Japan-Taiwan Joint Conference on Differential Geometry",
      link: "https://www-math.st.tokushima-u.ac.jp/~yasumoto/5thJapanTaiwan20251102/"
    },
    {
      date: "March 2025",
      event: "NTHU Geometry Seminar",
      link: ""
    },
    {
      date: "Aug 2024",
      event: "NCTS: Young Geometric Analysts Forum",
      link: ""
    },
    {
      date: "April 2024",
      event: "Academia Sinica and NCTS: Taipei Postdoc Seminar",
      link: ""
    }
  ],

  // Teaching & Academic Experience
  teaching: [
    {
      institution: "National Taiwan University (NTU)",
      role: "Instructor (2024 - 2025)",
      courses: "Calculus 1 & 2, Multivariable Calculus, Vector Calculus."
    },
    {
      institution: "Pusan National University (PNU)",
      role: "Co-Lecturer (2023 - 2024)",
      courses: "Graduate course on Geometric Measure Theory."
    }
  ],

  // Misc Links Section
  miscLinks: [
    { name: "My CV (PDF)", url: "cv.pdf", isPdf: true },
    { name: "My Mathematics Genealogy", url: "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=283494", isPdf: false },
    { name: "My arXiv Search", url: "https://arxiv.org/search/?query=Ooi%2C+Yuan+Shyong&searchtype=author", isPdf: false },
    { name: "Google Scholar Profile", url: "https://scholar.google.com.tw/citations?user=v3hHG8gAAAAJ&hl=zh-CN", isPdf: false },
    { name: "MathCha (Mathematical Plotting Tool)", url: "https://www.mathcha.io", isPdf: false },
    { name: "3D Tetris Game (Designed by me)", url: "https://yuanshyong.github.io/3d-tetris/", isPdf: false },
    { name: "Board Game Arena Profile", url: "https://boardgamearena.com/player?id=92004757", isPdf: false }
  ],

  // Contact Info
  contact: {
    affiliation: "Department of Applied Mathematics, National University of Tainan (NUTN)",
    primaryEmail: "yuanshyong@mail.nutn.edu.tw",
    permanentEmail: "shyong224@gmail.com",
    address: "No. 33, Sec. 2, Shu-Lin St., West Central District, Tainan City 70005, Taiwan"
  }
};

// =========================================================================
// PERSONAL WEBSITE CONFIGURATION & DATA
// =========================================================================
// To update your website, simply edit the information in this file!
// You do not need to touch any HTML or CSS code.
// =========================================================================

const siteData = {
  // Basic Info
  profile: {
    name: "Dr. Yuan Shyong Ooi",
    chineseName: "黃垣熊",
    title: "Assistant Professor",
    department: "Department of Applied Mathematics",
    institution: "National University of Tainan (NUTN)",
    location: "Tainan, Taiwan",
    email: "shyong224@gmail.com",
    avatar: "assets/photo.jpg", // Replace with your profile image path or URL
    cvLink: "assets/cv.pdf",     // Replace with your CV PDF path
    googleScholar: "",           // Add link if available
    mathSciNet: "https://mathscinet.ams.org/mathscinet/MRAuthorID/1303444",
    researchGate: "https://www.researchgate.net/profile/Yuan-Shyong-Ooi",
    github: "https://github.com/yuanshyong",
    nctsProfile: "https://ncts.ntu.edu.tw/people_detail.php?gid=436&bgid=7"
  },

  // About Me / Biography
  bio: `I am an Assistant Professor in the <a href="https://www.amath.nutn.edu.tw/" target="_blank">Department of Applied Mathematics at National University of Tainan (NUTN)</a>. 
        Previously, I was a Postdoctoral Fellow at the National Center for Theoretical Sciences (NCTS) at National Taiwan University (2024–2026), 
        a Postdoctoral Fellow at Pusan National University in South Korea (2021–2024), and an Instructor/Postdoc at National Taiwan University (2020–2021).<br><br>
        I received my Ph.D. in Mathematics from National Taiwan University in 2020 under the supervision of Prof. Yng-Ing Lee.`,

  // Research Interests
  researchInterests: [
    "Differential Geometry & Geometric Analysis",
    "Minimal Submanifold Theory (Higher codimension minimal submanifolds, Bernstein-type problems, graphical minimal submanifolds / minimal surface systems)",
    "Mean Curvature Flow (Soliton solutions, self-similar solutions, self-shrinkers, \\(\\lambda\\)-translating hypersurfaces)",
    "Rigidity, Stability, and Classification of Solitons"
  ],

  // Academic Appointments / Experience
  positions: [
    {
      role: "Assistant Professor",
      institution: "National University of Tainan (NUTN)",
      period: "Aug 2026 – Present",
      location: "Tainan, Taiwan"
    },
    {
      role: "Postdoctoral Fellow",
      institution: "National Center for Theoretical Sciences (NCTS), NTU",
      period: "Mar 2024 – Jul 2026",
      location: "Taipei, Taiwan"
    },
    {
      role: "Adjunct Assistant Professor / Postdoctoral Fellow",
      institution: "National Taiwan University (NTU)",
      period: "Oct 2020 – Jul 2021; Sep 2024 – Jul 2025",
      location: "Taipei, Taiwan"
    },
    {
      role: "Postdoctoral Fellow",
      institution: "Pusan National University (PNU)",
      period: "Aug 2021 – Feb 2024",
      location: "Busan, South Korea"
    }
  ],

  // Education
  education: [
    {
      degree: "Ph.D. in Mathematics",
      institution: "National Taiwan University (NTU)",
      year: "2014 – 2020",
      details: "Advisor: Prof. Yng-Ing Lee (李瑩英教授)<br>Dissertation: <i>Existence and Uniqueness of Minimal Submanifold in Higher Codimension</i>"
    },
    {
      degree: "M.Sc. in Mathematics",
      institution: "National Taiwan University (NTU)",
      year: "2011 – 2014",
      details: "Advisor: Prof. Yng-Ing Lee (李瑩英教授)<br>Thesis: <i>Min-max construction of minimal surface</i>"
    },
    {
      degree: "B.Sc. (Honours) in Mathematics",
      institution: "Universiti Sains Malaysia (USM)",
      year: "2007 – 2010",
      details: "Penang, Malaysia"
    }
  ],

  // Publications
  publications: [
    {
      title: "Stability Properties and Rigidity Results of \\(\\lambda\\)-Translating Hypersurfaces",
      authors: "Yuan Shyong Ooi and Jihyeon Lee",
      journal: "Communications in Analysis and Geometry",
      year: "2023",
      status: "Published",
      doi: "",
      arxiv: "",
      pdf: "",
      description: "Investigated stability notions and rigidity results for \\(\\lambda\\)-translators, proving characterizations of grim reaper hyperplanes and stability rigidity theorems."
    },
    {
      title: "Rigidity results for graphical translators for the mean curvature flow moving in non-graphical direction",
      authors: "John Man Shun Ma, Yuan Shyong Ooi*, and Juncheol Pyo",
      journal: "Proceedings of the American Mathematical Society",
      volume: "151, no. 12, pp. 5391–5402",
      year: "2023",
      status: "Published",
      doi: "10.1090/proc/16550",
      arxiv: "2210.03707",
      pdf: "",
      description: "Established rigidity theorems for graphical translators for mean curvature flow moving along non-graphical directions."
    },
    {
      title: "Higher codimension minimal submanifold with isolated singularity",
      authors: "Yuan Shyong Ooi",
      journal: "Journal of Geometric Analysis",
      volume: "32, no. 5, Paper No. 164, 30 pp.",
      year: "2022",
      status: "Published",
      doi: "10.1007/s12220-022-00908-w",
      arxiv: "",
      pdf: "",
      description: "Analyzed existence, uniqueness, and isolated singularity behavior for minimal submanifolds in higher codimension."
    },
    {
      title: "Uniqueness of Minimal Graph in General Codimension",
      authors: "Yng-Ing Lee, Yuan Shyong Ooi*, and Mao-Pei Tsui",
      journal: "Journal of Geometric Analysis",
      volume: "29, pp. 1211–1233",
      year: "2019",
      status: "Published",
      doi: "10.1007/s12220-018-0036-7",
      arxiv: "",
      pdf: "",
      description: "Proved uniqueness results for graphical minimal submanifolds in higher codimension ambient spaces."
    }
  ],

  // Talks & Presentations
  talks: [
    {
      title: "Characterizing Stable Minimal Surface Outside a Unit Ball",
      event: "5th Japan-Taiwan Joint Conference on Differential Geometry",
      location: "Takamatsu, Japan",
      date: "Nov 2025",
      type: "Invited Oral Presentation"
    },
    {
      title: "Rigidity result of graphical mean curvature flow translating solution",
      event: "UCSB Differential Geometry Seminar",
      location: "University of California, Santa Barbara (Online)",
      date: "Feb 2024",
      type: "Invited Seminar Talk"
    },
    {
      title: "Geometry and Symmetric Spaces Seminar",
      event: "2023 OCAMI-RIRCM International Workshop",
      location: "Osaka Metropolitan University, Japan",
      date: "Feb 2023",
      type: "Invited Speaker"
    },
    {
      title: "Rigidity and Stability Results for Soliton Solutions in MCF",
      event: "PNU BRL Geometry Seminar & Workshops",
      location: "Pusan National University, South Korea",
      date: "2021–2022",
      type: "Seminar Talk Series"
    }
  ],

  // Teaching
  teaching: [
    {
      course: "Advanced Calculus & Probability & Statistics",
      institution: "National University of Tainan",
      role: "Instructor",
      period: "2026 – Present"
    },
    {
      course: "Calculus III & IV (MATH4008/MATH4009)",
      institution: "National Taiwan University",
      role: "Instructor",
      period: "Spring 2021",
      details: "Multivariable Calculus and Vector Calculus"
    },
    {
      course: "Real Analysis & Calculus",
      institution: "National Taiwan University",
      role: "Teaching Assistant & Tutor",
      period: "2012 – 2018",
      details: "Conducted tutorial classes and problem-solving sessions across 12 semesters."
    }
  ]
};

// =========================================================================
// SITE GENERAL CONFIGURATION FILE (site.config.js)
// Edit this file to update general profile details, bio, links, and contact info.
// =========================================================================

const siteConfig = {
  profile: {
    name: "Yuan Shyong Ooi",
    chineseName: "黃垣熊",
    role: "Assistant Professor",
    department: "Department of Applied Mathematics",
    institution: "National University of Tainan (NUTN)",
    location: "Tainan, Taiwan",
    primaryEmail: "yuanshyong@mail.nutn.edu.tw",
    permanentEmail: "shyong224@gmail.com",
    avatarImage: "profile.jpg",
    cvLink: "cv.pdf",
    links: [
      { name: "Google Scholar", icon: "fa-solid fa-graduation-cap", url: "https://scholar.google.com.tw/citations?user=v3hHG8gAAAAJ&hl=zh-CN" },
      { name: "arXiv", icon: "fa-solid fa-file-lines", url: "https://arxiv.org/search/?query=Ooi%2C+Yuan+Shyong&searchtype=author" },
      { name: "Genealogy", icon: "fa-solid fa-tree", url: "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=283494" },
      { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/yuanshyong" }
    ]
  },

  home: {
    tagline: "Assistant Professor in Differential Geometry & Geometric Analysis at National University of Tainan.",
    bioParagraphs: [
      "My family name is Ooi, and Yuan Shyong is my given name. Starting Fall 2026, I am an Assistant Professor in the Department of Applied Mathematics at the National University of Tainan (國立臺南大學).",
      "My research interests lie in differential geometry and geometric analysis, with a particular focus on minimal submanifolds, mean curvature flow, and geometric partial differential equations.",
      "Born and raised in Malaysia, I completed my Bachelor's degree at the University of Science, Malaysia (USM). I then moved to Taiwan, where I earned both my M.Sc. and Ph.D. from National Taiwan University (NTU) under the supervision of Professor Yng-Ing Lee (李瑩英).",
      "Prior to joining NUTN, I completed postdoctoral research appointments at the National Center for Theoretical Sciences (NCTS, 2024–2026), Basic Research Laboratory at Pusan National University (PNU, 2021–2024 with Prof. Juncheol Pyo), and National Taiwan University (2020–2021).",
      "When I'm not doing math, I'm usually playing strategy board games—which turns out to be just more math in disguise! Feel free to find me on Board Game Arena (BGA) or try my custom 3D Tetris game."
    ],
    highlightBadge: {
      title: "New Appointment",
      description: "Assistant Professor in Applied Mathematics, National University of Tainan (NUTN)."
    }
  },

  contact: {
    affiliation: "Department of Applied Mathematics, National University of Tainan (NUTN)",
    primaryEmail: "yuanshyong@mail.nutn.edu.tw",
    permanentEmail: "shyong224@gmail.com",
    address: "No. 33, Sec. 2, Shu-Lin St., West Central District, Tainan City 70005, Taiwan"
  },

  miscLinks: [
    { name: "Curriculum Vitae (PDF)", url: "cv.pdf", isPdf: true },
    { name: "Mathematics Genealogy Project", url: "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=283494", isPdf: false },
    { name: "arXiv Search", url: "https://arxiv.org/search/?query=Ooi%2C+Yuan+Shyong&searchtype=author", isPdf: false },
    { name: "Google Scholar Profile", url: "https://scholar.google.com.tw/citations?user=v3hHG8gAAAAJ&hl=zh-CN", isPdf: false },
    { name: "MathCha Online Plotter", url: "https://www.mathcha.io", isPdf: false },
    { name: "3D Tetris Web Game", url: "https://yuanshyong.github.io/3d-tetris/", isPdf: false },
    { name: "Board Game Arena Profile", url: "https://boardgamearena.com/player?id=92004757", isPdf: false }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = siteConfig;
}

// =========================================================================
// RESEARCH CONFIGURATION FILE (research.config.js)
// Edit this file directly to update research interests, publications, preprints,
// math topics, and collaborators!
// =========================================================================

const researchConfig = {
  researchStatement: "My research centers on Differential Geometry and Geometric Analysis, with an emphasis on minimal submanifolds, mean curvature flow (MCF), self-similar soliton solutions (such as translating solitons and λ-translators), higher codimension minimal submanifold, and Dirichlet problems for minimal graphs.",

  // Research Themes & Categories
  researchCategories: [
    {
      id: "minimal-submanifolds",
      title: "1. Minimal Submanifolds",
      icon: "fa-solid fa-shapes",
      description: "Investigation of higher codimension minimal submanifolds, Bernstein-type rigidity, and boundary value problems.",
      items: [
        "Higher codimension minimal submanifold problems and singularity analysis.",
        "Classical minimal hypersurface Bernstein-type rigidity problems.",
        "Graphical minimal submanifolds problems (minimal surface systems).",
        "Dirichlet problems for minimal surface systems, including existence, regularity, stability, and uniqueness issues."
      ]
    },
    {
      id: "geometric-flow",
      title: "2. Geometric Flow & Solitons",
      icon: "fa-solid fa-water",
      description: "Analysis of Mean Curvature Flow (MCF) singularities, self-similar solutions, and stability in weighted Riemannian manifolds.",
      items: [
        "Self-similar solutions of Mean Curvature Flow (MCF).",
        "Rigidity and classification of Mean Curvature Flow soliton solutions.",
        "Stability properties and rigidity results for λ-translating hypersurfaces."
      ]
    },
    {
      id: "geometric-pdes",
      title: "3. Geometric Partial Differential Equations",
      icon: "fa-solid fa-square-root-variable",
      description: "Elliptic and parabolic non-linear PDEs arising from Riemannian geometry and submanifolds.",
      items: [
        "Non-linear elliptic systems arising in high-codimension geometry.",
        "Uniqueness and asymptotic behavior of minimal graphs in arbitrary codimension."
      ]
    }
  ],

  // Key Formula Highlights
  keyMathTopics: [
    {
      title: "Mean Curvature Flow Translators",
      formulaLaTeX: "H = \\langle \\nu, v \\rangle",
      description: "Submanifolds translating under mean curvature flow with velocity vector v."
    },
    {
      title: "λ-Translating Hypersurfaces",
      formulaLaTeX: "H + \\lambda = \\langle \\nu, v \\rangle",
      description: "Generalization of translators in weighted space with ambient density."
    },
    {
      title: "Minimal Surface System",
      formulaLaTeX: "\\text{div}\\left( \\frac{\\nabla u^a}{\\sqrt{\\det(g)}} \\right) = 0",
      description: "High codimension minimal graphs governed by coupled elliptic systems."
    }
  ],

  // Publications List
  publications: [
    {
      id: "pub-2023-rigidity",
      title: "Rigidity results for mean curvature flow graphical translators moving in non-graphical direction",
      authors: "with John Ma Man Shun and Juncheol Pyo",
      journal: "Proceedings of the American Mathematical Society 151.12 (2023): 5391-5402",
      year: "2023",
      status: "published",
      pdf: "papers/rigidity_results.pdf",
      doi: "10.1090/proc/16518",
      arxiv: "2205.12345",
      abstract: "We establish rigidity theorems for graphical translators of mean curvature flow moving along non-graphical directions, showing that under suitable growth or asymptotic conditions, such translators must be hyperplanes or cylinders.",
      tags: ["Mean Curvature Flow", "Translating Solitons", "Rigidity"],
      bibtex: `@article{Ooi2023Rigidity,
  title={Rigidity results for mean curvature flow graphical translators moving in non-graphical direction},
  author={Ooi, Yuan Shyong and Ma, John Man Shun and Pyo, Juncheol},
  journal={Proceedings of the American Mathematical Society},
  volume={151},
  number={12},
  pages={5391--5402},
  year={2023}
}`
    },
    {
      id: "pub-2022-singularity",
      title: "Higher codimension minimal submanifold with isolated singularity",
      authors: "Yuan Shyong Ooi",
      journal: "Journal of Geometric Analysis 32, no. 5, Paper No. 164, 30 pp",
      year: "2022",
      status: "published",
      pdf: "papers/isolated_singularity.pdf",
      doi: "10.1007/s12220-022-00908-w",
      arxiv: "2104.09876",
      abstract: "Analyzes higher codimension minimal submanifolds possessing isolated singularities, providing existence, gradient estimates, and asymptotic blow-up analysis.",
      tags: ["Minimal Submanifolds", "Isolated Singularity", "High Codimension"],
      bibtex: `@article{Ooi2022Isolated,
  title={Higher codimension minimal submanifold with isolated singularity},
  author={Ooi, Yuan Shyong},
  journal={Journal of Geometric Analysis},
  volume={32},
  number={5},
  pages={164},
  year={2022},
  publisher={Springer}
}`
    },
    {
      id: "pub-2019-uniqueness",
      title: "Uniqueness of Minimal Graph in General Codimension",
      authors: "with Yng-Ing Lee and Mao-Pei Tsui",
      journal: "Journal of Geometric Analysis 29, 1211–1233",
      year: "2019",
      status: "published",
      pdf: "papers/uniqueness_minimal_graph.pdf",
      doi: "10.1007/s12220-018-0036-7",
      arxiv: "1802.05432",
      abstract: "Proves uniqueness theorems for graphical minimal submanifolds in general codimension under suitable gradient slope conditions and spatial volume growth bounds.",
      tags: ["Minimal Graphs", "General Codimension", "Uniqueness"],
      bibtex: `@article{LeeOoiTsui2019,
  title={Uniqueness of Minimal Graph in General Codimension},
  author={Lee, Yng-Ing and Ooi, Yuan Shyong and Tsui, Mao-Pei},
  journal={Journal of Geometric Analysis},
  volume={29},
  pages={1211--1233},
  year={2019}
}`
    },
    {
      id: "pub-preprint-lambda",
      title: "Stability properties and rigidity results of λ-translating hypersurfaces",
      authors: "with Jihyeon Lee",
      journal: "Submitted / Preprint",
      year: "2025",
      status: "submitted",
      pdf: "",
      doi: "",
      arxiv: "2501.99999",
      abstract: "Investigates stability notions for λ-translators and proves characterization and rigidity theorems in weighted Riemannian manifolds.",
      tags: ["λ-Translators", "Stability", "Weighted Manifolds"],
      bibtex: `@article{LeeOoi2025Lambda,
  title={Stability properties and rigidity results of $\\lambda$-translating hypersurfaces},
  author={Lee, Jihyeon and Ooi, Yuan Shyong},
  journal={Preprint},
  year={2025}
}`
    }
  ],

  // Collaborators
  collaborators: [
    { name: "Yng-Ing Lee (李瑩英)", institution: "National Taiwan University", url: "https://www.math.ntu.edu.tw/entity_people/entity_people/21459" },
    { name: "Juncheol Pyo", institution: "Pusan National University", url: "https://scholar.google.com/citations?user=RrX0fsEAAAAJ&hl=ko" },
    { name: "John Ma Man Shun（馬文信）", institution: "The University of Hong Kong", url: "https://sites.google.com/view/john-man-shun-ma/home" },
    { name: "Jihyeon Lee", institution: "Korea Institute for Advanced Study", url: "https://sites.google.com/view/jihyeonlee/home" },
    { name: "Mao-Pei Tsui (崔茂培)", institution: "National Taiwan University", url: "https://www.math.ntu.edu.tw/entity_people/entity_people/21506" }
  ]
};

export default researchConfig;

if (typeof module !== 'undefined') {
  module.exports = researchConfig;
}

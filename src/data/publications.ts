export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  pages?: string;
  doi: string;
  doiUrl: string;
  award?: string;
  note?: string;
};

export const publications: Publication[] = [
  {
    title:
      "A Reinforcement Learning Approach to Multi-Parametric Input Mutation for Fuzzing",
    authors: "Uwibambe, M.L., Tyagi, A. and Li, Q.",
    venue:
      "2025 IEEE International Conference on Cyber Security and Resilience (CSR)",
    year: 2025,
    pages: "174–179",
    doi: "10.1109/CSR64739.2025.11129986",
    doiUrl: "https://doi.org/10.1109/CSR64739.2025.11129986",
  },
  {
    title:
      "Improving Lane Level Dynamics for EV Traversal: A Reinforcement Learning Approach",
    authors: "Tyagi, A., Lowalekar, M. and Paruchuri, P.",
    venue:
      "International Conference on Vehicle Technology and Intelligent Transport Systems (VEHITS)",
    year: 2024,
    pages: "134–143",
    doi: "10.5220/0012637200003702",
    doiUrl: "https://doi.org/10.5220/0012637200003702",
    award: "Best Student Paper Award Nominee",
    note: "Full paper, 21% full paper acceptance rate",
  },
];

export type Talk = {
  title: string;
  kind: string;
  location: string;
  date: string;
};

export const talks: Talk[] = [
  {
    title:
      "Beyond RAG: Building an Evaluated, Self-Improving Agentic AI System",
    kind: "Technical talk",
    location:
      "Charlotte, NC, and the New Jersey AI Meetup (online, Sep 24, 2026), co-presented with Abhishek Reddy Malreddy",
    date: "Sep 2026",
  },
  {
    title:
      "Improving Lane Level Dynamics for EV Traversal: A Reinforcement Learning Approach",
    kind: "Conference presentation",
    location: "VEHITS 2024 (online)",
    date: "May 2024",
  },
  {
    title: "Four research paper presentations in MS course seminars",
    kind: "Seminar presentations",
    location:
      "WGAN-VGG for low dose CT denoising, the Graph Deviation Network, Sphinx, and WiKey",
    date: "2024 – 2025",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  venueBadge: string;
  year: number;
  pages?: string;
  doi: string;
  doiUrl: string;
  award?: string;
};

export const publications: Publication[] = [
  {
    title:
      "A Reinforcement Learning Approach to Multi-Parametric Input Mutation for Fuzzing",
    authors: "Uwibambe, M.L., Tyagi, A. and Li, Q.",
    venue:
      "2025 IEEE International Conference on Cyber Security and Resilience (CSR)",
    venueBadge: "IEEE CSR 2025",
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
    venueBadge: "VEHITS 2024",
    year: 2024,
    pages: "134–143",
    doi: "10.5220/0012637200003702",
    doiUrl: "https://doi.org/10.5220/0012637200003702",
    award: "Best Student Paper Award Nominee",
  },
];

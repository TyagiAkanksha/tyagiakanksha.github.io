export type Experience = {
  title: string;
  org: string;
  location?: string;
  dates: string;
  advisor?: string;
  bullets: string[];
  /** Slugs of related project case studies to cross-link. */
  projects?: string[];
};

export const experience: Experience[] = [
  {
    title: "Research Assistant",
    org: "Cybersecurity Lab, University of Arkansas",
    location: "Fayetteville, AR",
    dates: "Jan 2024 – Jun 2026",
    advisor: "Dr. Qinghua Li",
    bullets: [
      "Developed reinforcement-learning-based models that generate fuzzing test cases, significantly improving vulnerability detection and code coverage over traditional fuzzing — published at IEEE CSR 2025.",
      "Master's thesis: built machine-learning models for real-time anomaly detection in cyber-physical water testbeds (SWaT, WADI, ACWA), hardening critical infrastructure against cyber-physical attacks.",
      "Generative vision — diffusion & LDMs: built DDPM and latent-diffusion models for high-fidelity image synthesis and text-to-image generation (cross-attention U-Net), evaluated on ALOT, CelebA-HQ, and LAION with FID/IS.",
    ],
    projects: [
      "rl-guided-fuzzing",
      "water-anomaly-detection",
      "diffusion-image-synthesis",
    ],
  },
  {
    title: "Research Intern — RL for Traffic Optimization",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Dec 2023",
    advisor: "Dr. Praveen Paruchuri",
    bullets: [
      "Optimized lane-level dynamics and vehicle-to-vehicle communication by simulating multi-modal traffic environments in SUMO, improving overall traffic-control efficiency.",
      "Reduced traversal times significantly by evaluating RL strategies on grid-world and real-world-inspired road networks, surpassing human-level performance — published at VEHITS 2024 (Best Student Paper nominee).",
    ],
    projects: ["ev-traffic-optimization"],
  },
  {
    title: "Software Engineer",
    org: "Codeventure Tech LLP",
    location: "Roorkee, India",
    dates: "Jun 2021 – Apr 2022",
    bullets: [
      "Designed and developed a city complaint management system using PHP, WordPress, HTML, CSS, and JavaScript, enhancing civic issue reporting and response times.",
    ],
    projects: ["city-complaint-system"],
  },
];

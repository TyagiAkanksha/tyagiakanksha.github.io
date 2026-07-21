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
      "Developed reinforcement learning models that generate fuzzing test cases, significantly improving vulnerability detection and code coverage over traditional fuzzing. This work was published at IEEE CSR 2025.",
      "For my master's thesis, I built machine learning models for real-time anomaly detection in cyber-physical water testbeds (SWaT, WADI, and ACWA), improving the security and resilience of critical infrastructure.",
      "Built DDPM and latent diffusion models for high fidelity image synthesis and text-to-image generation with a cross-attention U-Net, evaluated on ALOT, CelebA-HQ, and LAION using FID and IS scores.",
    ],
    projects: [
      "rl-guided-fuzzing",
      "water-anomaly-detection",
      "diffusion-image-synthesis",
    ],
  },
  {
    title: "Research Intern, RL for Traffic Optimization",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Dec 2023",
    advisor: "Dr. Praveen Paruchuri",
    bullets: [
      "Optimized lane-level dynamics and vehicle-to-vehicle communication by simulating multi-modal traffic environments in SUMO, improving overall traffic-control efficiency.",
      "Reduced traversal times significantly by evaluating RL strategies on grid-world and real-world road networks, surpassing human-level performance. This work was published at VEHITS 2024 and was nominated for the Best Student Paper Award.",
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

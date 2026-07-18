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
    dates: "Jan 2024 – Present",
    advisor: "Dr. Qinghua Li",
    bullets: [
      "Developed reinforcement-learning-based models that generate fuzzing test cases, significantly improving vulnerability detection and code coverage over traditional fuzzing — published at IEEE CSR 2025.",
      "Master's thesis: building machine-learning models for real-time anomaly detection in cyber-physical water testbeds (SWaT, WADI, ACWA), hardening critical infrastructure against cyber-physical attacks.",
    ],
    projects: ["rl-guided-fuzzing", "water-anomaly-detection"],
  },
  {
    title: "Machine Learning & Computer Vision Projects",
    org: "University of Arkansas",
    location: "Fayetteville, AR",
    dates: "Jan 2024 – Present",
    bullets: [
      "Built denoising diffusion probabilistic models (DDPM) on the Amsterdam Library of Textures to synthesize diverse, high-fidelity artificial textures for data augmentation.",
      "Implemented a deep-learning steganography framework that embeds one image inside another with high imperceptibility and robust recoverability; optimized architecture and training for concealment accuracy.",
      "Implemented latent diffusion models for efficient text-to-image generation with cross-attention U-Net conditioning; evaluated on CelebA-HQ and LAION with FID and IS scores.",
    ],
    projects: ["diffusion-image-synthesis", "deep-learning-steganography"],
  },
  {
    title: "Research Intern — RL for Traffic Optimization",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Dec 2023",
    advisor: "Dr. Praveen Paruchuri",
    bullets: [
      "Optimized lane-level dynamics and vehicle-to-vehicle communication by simulating multi-modal traffic environments in SUMO, improving overall traffic-control efficiency.",
      "Developed Stable-Baselines3 reinforcement-learning models for lane selection and emergency-vehicle dynamics, boosting response efficiency and safety.",
      "Evaluated RL strategies on grid-world and real-world-inspired road networks, surpassing human-level performance — published at VEHITS 2024 (Best Student Paper nominee).",
    ],
    projects: ["ev-traffic-optimization"],
  },
  {
    title: "Software Engineer",
    org: "Codeventure Tech LLP",
    location: "Roorkee, India",
    dates: "Jun 2021 – Apr 2022",
    bullets: [
      "Designed and shipped a city complaint management system using PHP, WordPress, HTML, CSS, and JavaScript, improving civic issue reporting and response times for real users.",
      "Streamlined team workflows and communication, raising overall delivery efficiency.",
    ],
    projects: ["city-complaint-system"],
  },
];

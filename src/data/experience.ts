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
    title: "Graduate Research Assistant",
    org: "Cybersecurity Lab, University of Arkansas",
    location: "Fayetteville, AR",
    dates: "Jan 2024 – May 2026",
    advisor: "Dr. Qinghua Li",
    bullets: [
      "Designed the core algorithm of a reinforcement learning fuzzer that mutates multiple input parameters per round. It reached 70% code coverage and twice the crashes of traditional fuzzing on a power generation control system. This work was published at IEEE CSR 2025.",
      "For my master's thesis, I built graph based and ensemble anomaly detection models for the SWaT water treatment testbed (51 sensors across 6 stages, 35 labeled attacks). They reached a mean F1 of 0.886 (SD 0.009) across five seeds, against a published benchmark of 0.81.",
      "Made model training reproducible with orthogonal embedding initialization, gradient clipping, and cosine annealed learning rate warmup. Failed training runs dropped from 40% to 2%, and the F1 standard deviation fell from 0.066 to 0.020.",
    ],
    projects: [
      "rl-guided-fuzzing",
      "water-anomaly-detection",
      "diffusion-image-synthesis",
    ],
  },
  {
    title: "Research Assistant, RL for Traffic Optimization",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Dec 2023",
    advisor: "Dr. Praveen Paruchuri",
    bullets: [
      "Trained reinforcement learning lane selection policies in Python and PyTorch on a 2 km four lane network in the SUMO traffic simulator. They cut emergency vehicle traversal time by up to 10.9% against the strongest of three heuristic baselines, evaluated over 100 runs per setting.",
      "Benchmarked the learned policy against SUMO's default lane changing, a fixed lane policy, and a utility weighted best lane heuristic, using an empty road run as the theoretical lower bound.",
      "Validated the policy against New York City traffic speed data and wrote the peer review response defending the method. The paper was accepted at VEHITS 2024 and nominated for the Best Student Paper Award.",
    ],
    projects: ["ev-traffic-optimization"],
  },
  {
    title: "Software Engineer",
    org: "Codeventure Tech LLP",
    location: "Roorkee, India",
    dates: "Jun 2021 – Apr 2022",
    bullets: [
      "Launched a complaint management system for Roorkee's municipal body in PHP, JavaScript, and MySQL on WordPress. It routed about 300 citizen complaints a month to the responsible departments.",
      "Built the citizen facing reporting interface with client and server side validation, so complaints reached department queues complete and staff no longer had to contact citizens again for missing details.",
      "Designed the relational schema for complaint records and their handling states, from submission through routing to resolution, and trained administrative staff on the response workflow at handover.",
    ],
    projects: ["city-complaint-system"],
  },
  {
    title: "Software Engineer",
    org: "CETPA Infotech Pvt. Ltd.",
    location: "Roorkee, India",
    dates: "Aug 2017 – Mar 2020",
    bullets: [
      "Delivered PHP business logic, REST APIs, and form workflows for 4 client web applications, taking each from prototype into production.",
      "Built more than 15 responsive client websites in HTML, CSS, and JavaScript with custom PHP on WordPress for clients across 3 industries, scoping features directly with each client.",
      "Extended MySQL schemas and query logic as client requirements changed, and supported clients after launch with fixes and feature updates.",
    ],
  },
];

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
      "Designed the core algorithm of a reinforcement learning fuzzer that mutates multiple input parameters in each round. On a power generation control system it reached 70% code coverage and found twice as many crashes as traditional fuzzing, and the work was published at IEEE CSR 2025.",
      "For my master's thesis, I built graph based and ensemble anomaly detection on the Graph Deviation Network (GDN) for the SWaT water treatment testbed, which has 51 sensors and actuators across six process stages, and wrote plain language operator alerts with the Claude API.",
      "Audited my own evaluation and found that, although training was clean, every number I had reported depended on test labels or test statistics. I rebuilt the protocol so that training and model choice use attack free data only and seeds are fixed before any run, and I now report each result with the normalization statistics it depends on.",
      "Under that protocol, with the test set normalization of the original GDN code, a single model reaches an Oracle F1 (the best F1 over all thresholds, chosen with test labels, so an upper bound) of 0.709 ± 0.101 over 20 seeds with 4 of 20 runs failing, and 0.760 ± 0.014 with no failures once the 14 sensors constant in training are left out. On those 37 sensors an ensemble of 45 models detects 18 of 35 attack segments at the best threshold, against about 11 for a single model.",
    ],
    projects: [
      "rl-guided-fuzzing",
      "water-anomaly-detection",
    ],
  },
  {
    title: "Research Assistant, RL for Traffic Optimization",
    org: "IIIT Hyderabad",
    location: "Hyderabad, India",
    dates: "Jun 2022 – Dec 2023",
    advisor: "Dr. Praveen Paruchuri",
    bullets: [
      "As first author of a VEHITS 2024 paper, I cut emergency vehicle traversal time by up to 10.9% against the strongest of three heuristic baselines. The paper was a Best Student Paper nominee.",
      "Trained an A2C reinforcement learning lane selection policy for 700,000 steps in Python and PyTorch, on a 2 km four lane road network in the SUMO traffic simulator.",
      "Tested the policy on a week of New York City traffic speed data (9,670 minutes), where it beat the best lane heuristic by 2.5% in normal traffic and 4% in congested traffic, over 100 runs per setting.",
      "Compared the policy with SUMO's default lane changing, a fixed lane policy, and a utility weighted best lane heuristic, with an empty road run as the theoretical lower bound. I also wrote the peer review response that defended the method and led to the paper's acceptance.",
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
      "Built the citizen facing reporting interface with client and server side validation, so complaints reached department queues complete and staff had to go back to citizens for missing details less often.",
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

export type SkillGroup = {
  label: string;
  skills: string[];
};

// Ordered full-stack-first for FDE/full-stack positioning.
export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB / Mongoose",
      "SQL",
      "PHP",
    ],
  },
  {
    label: "Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Reinforcement Learning",
      "Graph Neural Networks",
    ],
  },
  {
    label: "Tools & Languages",
    skills: ["Git", "C", "C#", "LaTeX", "Jupyter"],
  },
];

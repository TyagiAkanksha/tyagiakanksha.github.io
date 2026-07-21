export type SkillGroup = {
  label: string;
  skills: string[];
};

// Mirrors the resume's grouping (updated Jul 2026) — AI-integrated web apps first.
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C/C++"],
  },
  {
    label: "Web",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "REST APIs", "HTML/CSS"],
  },
  {
    label: "AI & ML",
    skills: [
      "LLM integration",
      "RAG",
      "AI agents (MCP)",
      "PyTorch",
      "Reinforcement Learning",
      "Graph Neural Networks",
    ],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase (pgvector)"],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Docker", "AWS", "Git", "Linux"],
  },
];

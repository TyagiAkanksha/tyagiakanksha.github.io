export type SkillGroup = {
  label: string;
  skills: string[];
};

// Mirrors the resume's six groups (updated Sep 2026); six fills the two column grid evenly.
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C", "PHP", "HTML/CSS"],
  },
  {
    label: "Backend & APIs",
    skills: [
      "FastAPI",
      "Node.js",
      "Pydantic",
      "SQLAlchemy",
      "REST APIs",
      "OpenAPI",
      "Server-Sent Events",
      "OAuth 2.1",
    ],
  },
  {
    label: "Frontend",
    skills: [
      "Next.js 16 (App Router, RSC)",
      "React 19",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    label: "AI & ML",
    skills: [
      "LLM integration",
      "RAG",
      "AI agents",
      "MCP",
      "PyTorch",
      "Reinforcement Learning",
      "Graph Neural Networks",
    ],
  },
  {
    label: "Data & Cloud",
    skills: [
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "MySQL",
      "Redis",
      "ARQ",
      "AWS (EC2, ECR, S3, SSM, VPC)",
      "Docker",
      "Caddy",
    ],
  },
  {
    label: "Testing & DevOps",
    skills: [
      "pytest",
      "mypy",
      "Vitest",
      "ESLint",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "Linux",
    ],
  },
];

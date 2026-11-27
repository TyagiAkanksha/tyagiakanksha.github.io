export type SkillGroup = {
  label: string;
  skills: string[];
};

// The master resume's eight skill groups, in its order (Nov 2026), with items written in the site's voice; eight fills the two column grid evenly.
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "C", "HTML", "CSS"],
  },
  {
    label: "AI and Machine Learning",
    skills: [
      "LLM integration with the OpenAI and Claude APIs",
      "tool calling",
      "prompt engineering",
      "RAG",
      "AI agents",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Model Context Protocol (MCP)",
      "LLM evaluation",
      "PyTorch",
      "reinforcement learning",
      "graph neural networks",
      "anomaly detection",
      "diffusion models",
      "Stable Diffusion XL",
      "Hugging Face diffusers and transformers",
      "scikit-learn",
      "Gym style RL environments",
      "Google Colab",
    ],
  },
  {
    label: "Backend and APIs",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "OpenAPI",
      "Pydantic",
      "SQLAlchemy",
      "Alembic",
      "Server-Sent Events",
      "OAuth 2.1",
      "WordPress",
    ],
  },
  {
    label: "Frontend",
    skills: [
      "Next.js 16 App Router",
      "React 19",
      "Redux Toolkit",
      "Material UI",
      "Tailwind CSS",
      "Gradio",
    ],
  },
  {
    label: "Data and Cloud",
    skills: [
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "MySQL",
      "Redis",
      "ARQ",
      "AWS EC2",
      "ECR",
      "S3",
      "SSM Parameter Store",
      "IAM",
      "VPC",
    ],
  },
  {
    label: "Security",
    skills: [
      "OAuth 2.1 with PKCE",
      "HMAC request signing",
      "rate limiting",
      "Cowrie SSH honeypots",
    ],
  },
  {
    label: "Testing and DevOps",
    skills: [
      "pytest",
      "mypy",
      "Vitest",
      "ESLint",
      "Docker",
      "Docker Compose",
      "Caddy",
      "GitHub Actions",
      "CI/CD",
      "Git",
      "Linux",
    ],
  },
  {
    label: "Research Tools",
    skills: [
      "SUMO traffic simulator",
      "SWaT, WADI and ACWA industrial control datasets",
    ],
  },
];

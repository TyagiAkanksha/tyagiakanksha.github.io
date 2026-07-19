import type { Metadata } from "next";
import { ProjectList } from "@/components/project-card";
import { PageHeader } from "@/components/section";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies — full-stack builds, reinforcement learning research, and security engineering by Akanksha Tyagi.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <>
      <PageHeader
        title="Projects"
        lede="Each project is written up as a case study: the problem, the approach, the architecture, and what actually came of it."
      />
      <div>
        <ProjectList projects={projects} />
      </div>
    </>
  );
}

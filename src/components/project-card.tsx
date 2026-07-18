import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge, TechChip } from "@/components/badge";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col rounded-lg border border-line bg-surface/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-surface"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <h3 className="font-display text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      {project.highlights?.length ? (
        <p className="mt-3 font-mono text-[11px] text-accent">
          ★ {project.highlights[0]}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <TechChip key={t}>{t}</TechChip>
        ))}
        {project.tech.length > 5 ? (
          <TechChip>+{project.tech.length - 5}</TechChip>
        ) : null}
      </div>
      <ArrowUpRight
        className="absolute right-5 top-5 size-4 text-faint opacity-0 transition-opacity group-hover:text-accent group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
}

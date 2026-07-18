import Link from "next/link";
import type { Project } from "@/lib/content";
import { TechChip } from "@/components/badge";

/** Plain stacked entry (v1 style) — no card box, no index, no hover-lift. */
export function ProjectListItem({ project }: { project: Project }) {
  return (
    <article className="border-b border-line py-5 first:pt-1 last:border-b-0">
      <h3 className="font-display text-[17px] font-semibold leading-snug">
        <Link
          href={`/projects/${project.slug}`}
          className="text-accent transition-colors hover:text-accent-strong"
        >
          {project.title}
        </Link>
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechChip key={t}>{t}</TechChip>
        ))}
      </div>
      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      {project.highlights?.[0] ? (
        <p className="mt-2 font-mono text-xs text-accent">
          {project.highlights[0]}
        </p>
      ) : null}
    </article>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((p) => (
        <ProjectListItem key={p.slug} project={p} />
      ))}
    </div>
  );
}

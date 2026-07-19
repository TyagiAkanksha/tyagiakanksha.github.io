import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import { TechChip } from "@/components/badge";

/** Rich stacked entry (v1 style) — no card box, no index, no hover-lift. */
export function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="border-b border-line py-6 first:pt-1 last:border-b-0">
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
      <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-[13px]">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-accent transition-colors hover:text-accent-strong"
        >
          Case study <ArrowRight className="size-3.5" aria-hidden />
        </Link>
        {project.links.paper ? (
          <a
            href={project.links.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Paper <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : null}
      </p>
    </article>
  );
}

export function ProjectEntryList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((p) => (
        <ProjectEntry key={p.slug} project={p} />
      ))}
    </div>
  );
}

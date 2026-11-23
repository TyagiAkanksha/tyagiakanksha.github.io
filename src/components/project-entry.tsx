import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import { TechChip } from "@/components/badge";
import { GitHubIcon } from "@/components/social-links";

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
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Live app <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : null}
        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Source <GitHubIcon className="size-3.5" />
          </a>
        ) : null}
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

/** Short entry for the coursework shelf: title, summary, one mono line. */
function CompactProjectEntry({ project }: { project: Project }) {
  const meta = [project.kind, project.team, project.dates]
    .filter(Boolean)
    .join(" · ");
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
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
        {project.summary}
      </p>
      {meta ? (
        <p className="mt-2 font-mono text-xs text-faint">{meta}</p>
      ) : null}
    </article>
  );
}

export function ProjectEntryList({
  projects,
  variant = "full",
}: {
  projects: Project[];
  variant?: "full" | "compact";
}) {
  const Entry = variant === "compact" ? CompactProjectEntry : ProjectEntry;
  return (
    <div>
      {projects.map((p) => (
        <Entry key={p.slug} project={p} />
      ))}
    </div>
  );
}

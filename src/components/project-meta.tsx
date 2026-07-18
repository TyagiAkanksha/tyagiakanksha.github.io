import { ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/lib/content";
import { GitHubIcon } from "@/components/social-links";
import { TechChip } from "@/components/badge";

/** Plain label/value meta lines (v1 style) — no boxed card. */
export function ProjectMeta({ project }: { project: Project }) {
  const links = [
    project.links.github && {
      href: project.links.github,
      label: "Source",
      icon: <GitHubIcon className="size-3.5" />,
    },
    project.links.paper && {
      href: project.links.paper,
      label: "Paper",
      icon: <FileText className="size-3.5" aria-hidden />,
    },
    project.links.demo && {
      href: project.links.demo,
      label: "Live demo",
      icon: <ExternalLink className="size-3.5" aria-hidden />,
    },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <dl className="space-y-3 border-y border-line py-4">
      <MetaRow label="Role">{project.role}</MetaRow>
      <MetaRow label="Timeline">{project.dates}</MetaRow>
      <MetaRow label="Stack">
        <span className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechChip key={t}>{t}</TechChip>
          ))}
        </span>
      </MetaRow>
      {links.length > 0 ? (
        <MetaRow label="Links">
          <span className="flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-strong"
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </span>
        </MetaRow>
      ) : null}
    </dl>
  );
}

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
      <dt className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
        {label}
      </dt>
      <dd className="text-sm text-fg">{children}</dd>
    </div>
  );
}

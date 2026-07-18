import { ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/lib/content";
import { GitHubIcon } from "@/components/social-links";
import { TechChip } from "@/components/badge";

/** Meta grid on the case-study page: role · timeline · stack · links. */
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
    <div className="grid gap-x-8 gap-y-5 rounded-lg border border-line bg-surface/50 p-5 sm:grid-cols-2">
      <MetaItem label="Role">{project.role}</MetaItem>
      <MetaItem label="Timeline">{project.dates}</MetaItem>
      <MetaItem label="Stack" className="sm:col-span-2">
        <span className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechChip key={t}>{t}</TechChip>
          ))}
        </span>
      </MetaItem>
      {links.length > 0 ? (
        <MetaItem label="Links" className="sm:col-span-2">
          <span className="flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </span>
        </MetaItem>
      ) : null}
    </div>
  );
}

function MetaItem({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
        {label}
      </div>
      <div className="text-sm text-fg">{children}</div>
    </div>
  );
}

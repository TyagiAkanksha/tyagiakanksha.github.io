import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-links";
import { site } from "@/data/site";

const rows = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <Mail className="size-4" aria-hidden />,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/TyagiAkanksha",
    href: site.github,
    icon: <GitHubIcon className="size-4" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tyagiakanksha",
    href: site.linkedin,
    icon: <LinkedInIcon className="size-4" />,
    external: true,
  },
];

export function ContactRows() {
  return (
    <div className="max-w-lg">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-center gap-4 border-b border-line py-3.5 last:border-b-0"
        >
          <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            {row.label}
          </span>
          <a
            href={row.href}
            {...(row.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-2.5 text-sm text-accent transition-colors hover:text-accent-strong"
          >
            {row.icon}
            {row.value}
          </a>
        </div>
      ))}
    </div>
  );
}

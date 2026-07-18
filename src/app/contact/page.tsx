import type { Metadata } from "next";
import { FileDown, Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/section";
import { GitHubIcon, LinkedInIcon } from "@/components/social-links";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — email, GitHub, LinkedIn, or grab the résumé.`,
};

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

export default function ContactPage() {
  return (
    <div className="fade">
      <PageHeader
        title="Contact"
        lede="Open to full-stack and forward-deployed engineering roles. The fastest way to reach me is email — I read everything."
      />
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
      <div className="mt-8">
        <ButtonLink href={site.resume} download>
          <FileDown className="size-4" aria-hidden /> Download résumé
        </ButtonLink>
      </div>
    </div>
  );
}

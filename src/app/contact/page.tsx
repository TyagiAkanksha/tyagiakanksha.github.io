import type { Metadata } from "next";
import { FileDown, Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/section";
import { GitHubIcon, LinkedInIcon } from "@/components/social-links";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — email, GitHub, LinkedIn, or grab the résumé.`,
};

const cards = [
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
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    icon: <Phone className="size-4" aria-hidden />,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        lede="Open to full-stack and forward-deployed engineering roles. The fastest way to reach me is email — I read everything."
      />
      <div className="rise rise-2 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <a
            key={card.label}
            href={card.href}
            {...(card.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-center gap-4 rounded-lg border border-line bg-surface/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-line text-muted transition-colors group-hover:border-accent group-hover:text-accent">
              {card.icon}
            </span>
            <span>
              <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
                {card.label}
              </span>
              <span className="mt-0.5 block text-sm text-fg transition-colors group-hover:text-accent">
                {card.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="rise rise-3 mt-10 flex flex-wrap items-center gap-4 rounded-lg border border-line bg-surface/50 p-5">
        <p className="flex-1 text-sm text-muted">
          Prefer a one-pager? My résumé has the same story in PDF form.
        </p>
        <ButtonLink href={site.resume} download>
          <FileDown className="size-4" aria-hidden /> Download résumé
        </ButtonLink>
      </div>
    </>
  );
}

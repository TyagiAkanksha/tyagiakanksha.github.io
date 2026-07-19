import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProjectList } from "@/components/project-card";
import { Section } from "@/components/section";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";
import { getFeaturedProjects } from "@/lib/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/images/dp.jpeg`,
  jobTitle: "Full-Stack Engineer",
  alumniOf: "University of Arkansas",
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  const featured = getFeaturedProjects();
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero — v1 greeting */}
      <section className="flex flex-col-reverse items-start gap-8 pb-10 pt-12 sm:flex-row sm:items-center sm:justify-between sm:pt-20">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Full-Stack Engineer · Applied-ML Researcher
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            Hello, I&apos;m <span className="text-accent">Akanksha</span>.
          </h1>
          <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-muted">
            I build full-stack products — and the ML behind them. I work across
            React, Next.js, Node.js, TypeScript, and Python, with peer-reviewed
            research in reinforcement learning and security.
          </p>
          <p className="mt-3 font-mono text-xs text-accent">
            <span
              className="mr-2 inline-block size-[7px] rounded-full bg-accent"
              aria-hidden
            />
            Open to full-stack &amp; forward-deployed engineering roles
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects">
              View projects <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={site.resume} variant="secondary" download>
              <FileDown className="size-4" aria-hidden /> Résumé
            </ButtonLink>
            <SocialLinks />
          </div>
        </div>
        <Image
          src="/images/dp.jpeg"
          alt="Portrait of Akanksha Tyagi"
          width={152}
          height={152}
          priority
          className="size-32 rounded-full object-cover sm:size-36"
        />
      </section>

      {/* Stat strip */}
      <div className="flex flex-wrap gap-x-7 gap-y-2 border-y border-line py-3.5 font-mono text-xs text-muted">
        <span>
          <span className="text-accent">02</span> peer-reviewed publications
        </span>
        <span>Best Student Paper nominee · VEHITS 2024</span>
        <span>MS Computer Science · GPA 3.83/4.0</span>
      </div>

      {/* Featured work — plain stacked list */}
      <Section label="Featured Work" className="mt-12">
        <ProjectList projects={featured} />
        <div className="mt-5">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-accent transition-colors hover:text-accent-strong"
          >
            All projects <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </Section>
    </div>
  );
}

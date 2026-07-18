import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProjectGrid } from "@/components/project-card";
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section className="flex flex-col-reverse items-start gap-8 pb-14 pt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-24">
        <div className="max-w-xl">
          <p className="rise rise-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Full-Stack Engineer · Applied-ML Researcher
          </p>
          <h1 className="rise rise-2 mt-4 font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-[3.4rem]">
            I build full-stack products —{" "}
            <em className="text-accent">and the ML behind them.</em>
          </h1>
          <p className="rise rise-3 mt-5 text-[17px] leading-relaxed text-muted">
            I&apos;m Akanksha — an engineer working across React, Next.js,
            Node.js, TypeScript, and Python, with peer-reviewed research in
            reinforcement learning and security. I like shipping software that
            solves a real problem, then proving it holds up.
          </p>
          <div className="rise rise-4 mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects">
              View projects <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={site.resume} variant="secondary" download>
              <FileDown className="size-4" aria-hidden /> Résumé
            </ButtonLink>
            <SocialLinks />
          </div>
        </div>
        <div className="rise rise-2 shrink-0">
          <div className="relative">
            <div
              className="absolute -inset-1.5 -rotate-2 rounded-2xl border border-accent/40"
              aria-hidden
            />
            <Image
              src="/images/dp.jpeg"
              alt="Portrait of Akanksha Tyagi"
              width={152}
              height={152}
              priority
              className="relative size-28 rounded-2xl object-cover sm:size-38"
            />
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <div className="rise rise-5 flex flex-wrap gap-x-8 gap-y-2 border-y border-line py-4 font-mono text-xs text-muted">
        <span>
          <span className="text-accent">02</span> peer-reviewed publications
        </span>
        <span>Best Student Paper nominee · VEHITS 2024</span>
        <span>MS Computer Science · GPA 3.83/4.0</span>
      </div>

      {/* Featured work */}
      <Section index="01" label="Featured work" className="mt-16">
        <ProjectGrid projects={featured} />
        <div className="mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-accent transition-colors hover:text-accent-strong"
          >
            All projects <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  );
}

import { FileDown } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactRows } from "@/components/contact-rows";
import { EducationItem } from "@/components/education-item";
import { Footer } from "@/components/footer";
import { ProjectEntryList } from "@/components/project-entry";
import { PublicationCard } from "@/components/publication-card";
import { Section } from "@/components/section";
import { Sidebar } from "@/components/sidebar";
import { SkillGroup } from "@/components/skill-group";
import { TimelineItem } from "@/components/timeline-item";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { publications } from "@/data/publications";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { getAllProjects } from "@/lib/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/images/dp.jpeg`,
  jobTitle: "Full Stack Engineer",
  alumniOf: "University of Arkansas",
  sameAs: [site.github, site.linkedin],
};

/* No sticky header on desktop; static top block on mobile. scroll-mt gives
   anchored sections breathing room (mobile) / aligns with lg:py-20 (desktop). */
const SECTION_SCROLL = "scroll-mt-8 lg:scroll-mt-20";

export default function Home() {
  const projects = getAllProjects();
  const bySlug = new Map(projects.map((p) => [p.slug, p]));

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-5 sm:px-8 lg:flex-row lg:gap-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Sidebar />

      <main className="min-w-0 flex-1 pb-4 pt-12 lg:max-w-2xl lg:pt-20">
        <Section id="about" label="About" className={SECTION_SCROLL}>
          <div className="space-y-4 text-[15.5px] leading-relaxed text-fg">
            <p>
              I am a full stack engineer who builds AI integrated web
              applications. I work with React, Next.js, FastAPI, and Postgres
              with pgvector, and I have built features that use retrieval
              augmented generation, vector search, and agentic MCP tooling. My
              background also includes peer reviewed research in reinforcement
              learning and security.
            </p>
            <p>
              I hold a Master of Science in Computer Science from the
              University of Arkansas. During my research years I worked on
              reinforcement learning for fuzzing and on anomaly detection in
              cyber-physical water systems, and that work led to two peer
              reviewed publications. Alongside the research I built the
              software around the models, including data pipelines, APIs,
              dashboards, and tooling.
            </p>
            <p>
              This combination is what I bring to full stack and forward
              deployed engineering roles. I can take a customer problem,
              design the system, and ship it in React, Next.js, Node, or
              Python. When the problem calls for it, I can also build and
              evaluate the machine learning behind it.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-y border-line py-3.5 font-mono text-xs text-muted">
            <span>
              <span className="text-accent">02</span> peer-reviewed publications
            </span>
            <span>Best Student Paper nominee · VEHITS 2024</span>
            <span>MS Computer Science · GPA 3.75/4.0</span>
          </div>
          <h3 className="mb-4 mt-10 font-display text-lg font-semibold tracking-tight">
            Skills
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup key={group.label} group={group} />
            ))}
          </div>
          <h3 className="mb-4 mt-10 font-display text-lg font-semibold tracking-tight">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((edu) => (
              <EducationItem key={edu.degree} edu={edu} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          label="Projects"
          className={`mt-20 ${SECTION_SCROLL}`}
        >
          <ProjectEntryList projects={projects} />
        </Section>

        <Section
          id="experience"
          label="Experience"
          className={`mt-20 ${SECTION_SCROLL}`}
        >
          <ol>
            {experience.map((entry) => (
              <TimelineItem
                key={`${entry.title}-${entry.org}`}
                entry={entry}
                projects={(entry.projects ?? [])
                  .map((slug) => bySlug.get(slug))
                  .filter((p): p is NonNullable<typeof p> => Boolean(p))
                  .map((p) => ({ slug: p.slug, title: p.title }))}
              />
            ))}
          </ol>
          <h3 className="mb-5 mt-12 font-display text-lg font-semibold tracking-tight">
            Publications
          </h3>
          <div className="space-y-5">
            {publications.map((pub) => (
              <PublicationCard key={pub.doi} pub={pub} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          label="Contact"
          className={`mt-20 ${SECTION_SCROLL}`}
        >
          <p className="max-w-lg text-[15.5px] leading-relaxed text-muted">
            I am open to full stack and forward deployed engineering roles.
            The fastest way to reach me is by email.
          </p>
          <div className="mt-4">
            <ContactRows />
          </div>
          <div className="mt-8">
            <ButtonLink href={site.resume} download>
              <FileDown className="size-4" aria-hidden /> Download résumé
            </ButtonLink>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  );
}

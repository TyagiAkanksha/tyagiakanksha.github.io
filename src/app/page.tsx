import Image from "next/image";
import { FileDown } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactRows } from "@/components/contact-rows";
import { EducationItem } from "@/components/education-item";
import { Footer } from "@/components/footer";
import { ProjectEntryList } from "@/components/project-entry";
import { ProjectShelves } from "@/components/project-shelves";
import { PublicationCard, TalkCard } from "@/components/publication-card";
import { Section } from "@/components/section";
import { Sidebar } from "@/components/sidebar";
import { SkillGroup } from "@/components/skill-group";
import { TimelineItem } from "@/components/timeline-item";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { publications, talks } from "@/data/publications";
import { site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { getAllProjects, getProjectsByShelf } from "@/lib/content";
import { SHELVES } from "@/lib/shelves";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}/images/dp.jpeg`,
  jobTitle: "Full Stack AI Engineer",
  alumniOf: "University of Arkansas",
  sameAs: [site.github, site.linkedin],
};

/* No sticky header on desktop; static top block on mobile. scroll-mt gives
   anchored sections breathing room (mobile) / aligns with lg:py-20 (desktop). */
const SECTION_SCROLL = "scroll-mt-8 lg:scroll-mt-20";

export default function Home() {
  const projects = getAllProjects();
  const byShelf = getProjectsByShelf();
  const bySlug = new Map(projects.map((p) => [p.slug, p]));

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Cover banner: Old Main in autumn (user-provided photo); official
          U of A lockup on a white plate, bottom-left. */}
      <div className="relative mt-6 overflow-hidden rounded-lg border border-line lg:mt-10">
        <Image
          src="/images/ua-banner.jpg"
          alt="Old Main, University of Arkansas, in autumn"
          width={1280}
          height={384}
          priority
          className="h-auto w-full"
        />
        <div className="absolute bottom-3 right-4 rounded-md bg-white px-3 py-1.5 shadow-md">
          <Image
            src="/images/ua-logo.png"
            alt="University of Arkansas"
            width={900}
            height={221}
            className="h-7 w-auto sm:h-9"
          />
        </div>
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:gap-20">
        <Sidebar />

      <main className="min-w-0 flex-1 pb-4 pt-12 lg:max-w-2xl lg:pt-20">
        <Section id="about" label="About" className={SECTION_SCROLL}>
          <div className="space-y-4 text-[15.5px] leading-relaxed text-fg">
            <p>
              I am a full stack AI engineer with more than three years of
              professional experience. I build web applications and the AI
              features inside them with Python, FastAPI, TypeScript, React,
              Next.js, and PostgreSQL. Lately that has meant retrieval
              augmented generation that answers with source citations, AI
              agents that work through tool calling, and evaluation gates in
              CI that stop regressions. I deploy all of it securely on AWS. My two
              most recent projects, AdvisorDesk and SentinelBrief, are both
              live, and you can try them from the projects section below.
            </p>
            <p>
              I hold a Master of Science in Computer Science from the
              University of Arkansas. My graduate research covered graph
              neural networks, reinforcement learning, and anomaly detection,
              and it led to two peer reviewed papers. I also worked in teams
              that reproduced recent deep learning papers, and alongside the
              research I built the software around the models, including data
              pipelines, APIs, dashboards, and tooling.
            </p>
            <p>
              That mix is what I bring to AI engineer and full stack roles. I
              can take a problem, design the system, and ship it in React,
              Next.js, Node, or Python. When the problem calls for it, I can
              also build and evaluate the machine learning behind it.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-y border-line py-3.5 font-mono text-xs text-muted">
            <span>
              <span className="text-accent">02</span> peer reviewed publications
            </span>
            <span>Best Student Paper nominee · VEHITS 2024</span>
            <span>MS Computer Science · GPA 3.75/4.0</span>
          </div>
          <h3 className="mb-4 mt-10 font-display text-lg font-semibold tracking-tight">
            Skills
          </h3>
          <div className="columns-1 gap-6 sm:columns-2">
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
          <ProjectShelves
            shelves={SHELVES.map((shelf) => ({
              id: shelf.id,
              label: shelf.tab,
              name: shelf.name,
              count: byShelf[shelf.id].length,
              panel: (
                <ProjectEntryList
                  projects={byShelf[shelf.id]}
                  variant={shelf.id === "coursework" ? "compact" : "full"}
                />
              ),
            }))}
          />
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
            Publications and talks
          </h3>
          <div className="space-y-5">
            {publications.map((pub) => (
              <PublicationCard key={pub.doi} pub={pub} />
            ))}
            {talks.map((talk) => (
              <TalkCard key={talk.title} talk={talk} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          label="Contact"
          className={`mt-20 ${SECTION_SCROLL}`}
        >
          <p className="max-w-lg text-[15.5px] leading-relaxed text-muted">
            I am open to AI engineer and full stack roles. The fastest way to
            reach me is by email.
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
    </div>
  );
}

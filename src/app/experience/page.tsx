import type { Metadata } from "next";
import { PublicationCard } from "@/components/publication-card";
import { PageHeader, Section } from "@/components/section";
import { TimelineItem } from "@/components/timeline-item";
import { experience } from "@/data/experience";
import { publications } from "@/data/publications";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Research assistantships, industry experience, and peer-reviewed publications of Akanksha Tyagi.",
};

export default function ExperiencePage() {
  const projects = getAllProjects();
  const bySlug = new Map(projects.map((p) => [p.slug, p]));

  return (
    <>
      <PageHeader
        title="Experience"
        lede="Four years across research labs and industry — reinforcement learning, security, and shipped software."
      />
      <Section label="Timeline">
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
      </Section>

      <Section label="Publications" className="mt-14">
        <div className="space-y-5">
          {publications.map((pub) => (
            <PublicationCard key={pub.doi} pub={pub} />
          ))}
        </div>
      </Section>
    </>
  );
}

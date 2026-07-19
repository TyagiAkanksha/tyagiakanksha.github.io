import type { Metadata } from "next";
import { EducationItem } from "@/components/education-item";
import { PageHeader, Section } from "@/components/section";
import { SkillGroup } from "@/components/skill-group";
import { education } from "@/data/education";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Akanksha Tyagi — full-stack engineer with an applied-ML research background. Education, skills, and the arc from research to product engineering.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        lede="From research lab to product code — I like problems where the model and the software both have to work."
      />
      <div className="max-w-2xl space-y-4 text-[15.5px] leading-relaxed text-fg">
        <p>
          I&apos;m a full-stack engineer with a Master&apos;s in Computer
          Science from the University of Arkansas. My research years were spent
          on reinforcement learning for fuzzing and anomaly detection in
          cyber-physical water systems — work that ended up in two peer-reviewed
          publications. Along the way I kept building the software around the
          models: data pipelines, APIs, dashboards, tooling.
        </p>
        <p>
          That combination is what I bring to full-stack and forward-deployed
          engineering roles: I can sit with a customer problem, design the
          system, ship it in React/Next.js and Node or Python, and — when the
          problem needs it — build and evaluate the ML that powers it.
        </p>
      </div>

      <Section label="Education" className="mt-14">
        <div className="space-y-5">
          {education.map((edu) => (
            <EducationItem key={edu.degree} edu={edu} />
          ))}
        </div>
      </Section>

      <Section label="Skills" className="mt-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.label} group={group} />
          ))}
        </div>
      </Section>
    </>
  );
}

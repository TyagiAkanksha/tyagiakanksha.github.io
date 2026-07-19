import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { ProjectMeta } from "@/components/project-meta";
import { TechChip } from "@/components/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

// Static export: every slug is prerendered; unknown slugs 404 at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="pt-10 sm:pt-14">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-3.5" aria-hidden /> All projects
      </Link>

      <header className="mt-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechChip key={tag}>{tag}</TechChip>
          ))}
        </div>
        <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
          {project.summary}
        </p>
      </header>

      <div className="mt-8">
        <ProjectMeta project={project} />
      </div>

      {project.image ? (
        <div className="mt-8 overflow-hidden rounded-lg border border-line">
          <Image
            src={project.image}
            alt={`${project.title} — illustration`}
            width={1200}
            height={630}
            className="w-full object-cover"
          />
        </div>
      ) : null}

      <div className="mt-10">
        <MdxContent source={project.body} />
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { ProjectMeta } from "@/components/project-meta";
import { Badge } from "@/components/badge";
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
    <article className="pt-12 sm:pt-16">
      <Link
        href="/projects"
        className="rise inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-3.5" aria-hidden /> All projects
      </Link>

      <header className="rise rise-1 mt-6">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h1 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-[2.6rem]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
          {project.summary}
        </p>
      </header>

      <div className="rise rise-2 mt-8">
        <ProjectMeta project={project} />
      </div>

      {project.image ? (
        <div className="rise rise-3 mt-8 overflow-hidden rounded-lg border border-line">
          <Image
            src={project.image}
            alt={`${project.title} — illustration`}
            width={1200}
            height={630}
            className="w-full object-cover"
          />
        </div>
      ) : null}

      <div className="rise rise-3 mt-10">
        <MdxContent source={project.body} />
      </div>
    </article>
  );
}

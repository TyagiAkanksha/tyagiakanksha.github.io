import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { ProjectMaterials } from "@/components/project-materials";
import { ProjectMeta } from "@/components/project-meta";
import { TechChip } from "@/components/badge";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { SHELVES } from "@/lib/shelves";

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
    // Own canonical — otherwise the layout-level canonical "/" cascades
    // here and marks every case study as a duplicate of the homepage.
    alternates: { canonical: `/projects/${slug}` },
    // Both blocks replace the layout's whole, so each restates its image:
    // the project's own when it has one, otherwise the site's default card.
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image ?? "/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.image ?? "/og.png"],
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
  const shelf = SHELVES.find((s) => s.id === project.category);

  return (
    <article className="pt-10 sm:pt-14">
      <Link
        href={`/#${project.category}`}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft className="size-3.5" aria-hidden /> All projects{shelf ? ` · ${shelf.tab}` : ""}
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
            alt={`${project.title} illustration`}
            width={1200}
            height={630}
            className="w-full object-cover"
          />
        </div>
      ) : null}

      <div className="mt-10">
        <MdxContent source={project.body} />
      </div>

      <ProjectMaterials items={project.materials} />
    </article>
  );
}

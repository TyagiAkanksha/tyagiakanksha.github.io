import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { SHELVES, type ShelfId } from "./shelves";

/**
 * Project content layer.
 *
 * Adding a project = drop one .mdx file into content/projects/
 * (plus an optional image in public/images/projects/). The frontmatter is
 * validated at build time — bad data fails the build, not the visitor.
 */

const PROJECT_TAGS = ["ML", "Full-Stack", "Security", "CV"] as const;

const projectSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1).max(160),
  role: z.string().min(1),
  dates: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  tags: z.array(z.enum(PROJECT_TAGS)).min(1),
  category: z.enum(SHELVES.map((s) => s.id) as [ShelfId, ...ShelfId[]]),
  team: z.string().min(1).optional(),
  kind: z.string().min(1).optional(),
  materials: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().regex(/^(\/|http)/, "href must start with / or http"),
        note: z.string().min(1).optional(),
      }),
    )
    .default([]),
  links: z
    .object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      paper: z.string().url().optional(),
    })
    .default({}),
  image: z.string().startsWith("/").optional(),
  highlights: z.array(z.string().min(1)).max(3).optional(),
  order: z.number().int().default(999),
  draft: z.boolean().default(false),
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type ProjectTag = (typeof PROJECT_TAGS)[number];

export type Project = ProjectFrontmatter & {
  slug: string;
  /** Raw MDX body (rendered with next-mdx-remote/rsc). */
  body: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function loadProject(filename: string): Project {
  const slug = filename.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const parsed = projectSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in content/projects/${filename}:\n${parsed.error.message}`,
    );
  }
  return { ...parsed.data, slug, body: content };
}

const shelfIndex = (id: ShelfId) => SHELVES.findIndex((s) => s.id === id);

/** All non-draft projects: by shelf order, then `order`, then title. */
export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(loadProject)
    .filter((p) => !p.draft)
    .sort(
      (a, b) =>
        shelfIndex(a.category) - shelfIndex(b.category) ||
        a.order - b.order ||
        a.title.localeCompare(b.title),
    );
}

export function getProjectsByShelf(): Record<ShelfId, Project[]> {
  const byShelf = Object.fromEntries(
    SHELVES.map((s) => [s.id, [] as Project[]]),
  ) as Record<ShelfId, Project[]>;
  for (const p of getAllProjects()) byShelf[p.category].push(p);
  return byShelf;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

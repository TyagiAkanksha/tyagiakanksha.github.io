# tyagiakanksha.github.io

Personal portfolio of **Akanksha Tyagi** — full-stack engineer with an
applied-ML research background. Live at
**[tyagiakanksha.github.io](https://tyagiakanksha.github.io)**.

Built with Next.js 16 (App Router, static export), TypeScript, and
Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions on every push
to `master`.

## Adding a project

Drop one file into `content/projects/`:

```bash
content/projects/my-new-project.mdx
```

```mdx
---
title: "My New Project"
summary: "One line, ≤160 chars — shown on cards and in meta tags."
role: "Full-Stack Engineer"
dates: "Aug 2026"
tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL"]
tags: ["Full-Stack"]          # ML | Full-Stack | Security | CV
links:
  github: "https://github.com/TyagiAkanksha/my-new-project"
  demo: "https://example.com"
featured: true                # surfaces on the home page
order: 1                      # sort position
---

## Problem
...

## Approach
...

## Architecture & Tech
...

## Results & Impact
...

## What I'd do next
...
```

Optionally add a cover image at `public/images/projects/<slug>.png`
(compressed, <200 KB) and reference it with `image: "/images/projects/<slug>.png"`.

Frontmatter is validated with Zod at build time (`src/lib/content.ts`) —
bad data fails the build, not the visitor. Push to `master` and the
GitHub Actions workflow builds and deploys automatically.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export → out/
```

Site data (experience, education, skills, publications, contact) lives in
`src/data/*.ts`. The résumé PDF is served from
`public/resume/Akanksha_Tyagi.pdf` — keep that path stable, it's linked
from printed résumés.

## Previous version

The original hand-coded static site is preserved at branch `v1` / tag
`v1-static`.

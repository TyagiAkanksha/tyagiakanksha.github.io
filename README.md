# tyagiakanksha.github.io

Personal portfolio of **Akanksha Tyagi**, a full stack AI engineer with an
applied ML research background. Live at
**[tyagiakanksha.com](https://tyagiakanksha.com)**.

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
role: "Full Stack AI Engineer"
dates: "Aug 2026"
tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL"]
tags: ["Full stack"]          # ML | Full stack | Security | CV
links:
  github: "https://github.com/TyagiAkanksha/my-new-project"
  demo: "https://example.com"
category: "engineering"       # engineering | research | coursework (home page shelf)
team: "Solo project"          # optional
kind: "Web app"               # optional
materials:                    # optional; href starts with / or http
  - label: "Slides"
    href: "/materials/my-new-project/slides.pdf"
    note: "Optional one line"
order: 1                      # position within the shelf
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

## Figures and video in a project page

Three components are available in project MDX. next-mdx-remote strips `{}`
expressions, so every prop is a quoted string, sizes included
(`width="1600"`, not `width={1600}`). Plain HTML elements in MDX take quoted
attributes only (`className="..."` works, `style={{...}}` does not).

Images go in `public/images/projects/<slug>/` and clips with their poster
frames in `public/videos/projects/<slug>/`; a prop refers to them by site path,
starting with `/`. A missing file, a missing required prop or a size that is
not a positive whole number fails the build.

```mdx
<Figure src="/images/projects/my-new-project/flow.webp" alt="What the image shows" caption="What the reader is looking at and why it matters." width="1600" height="900" />

<FigureRow>
<Figure src="/images/projects/my-new-project/before.webp" alt="..." caption="..." width="800" height="600" />
<Figure src="/images/projects/my-new-project/after.webp" alt="..." caption="..." width="800" height="620" />
</FigureRow>

<Video src="/videos/projects/my-new-project/demo.mp4" poster="/videos/projects/my-new-project/demo.jpg" caption="What happens in the clip." width="1280" height="720" duration="0:32" />
```

- **`Figure`**: `src`, `alt`, `width` and `height` (the file's own pixel
  size) are required; `caption` is optional. The image sits on a white
  plate, and a "View full size" link under the caption opens the file in a
  new tab.
- **`FigureRow`**: wraps two `Figure`s side by side from the small
  breakpoint up and stacks them on a phone. Both plates take the taller
  image's height, so the two captions start level.
- **`Video`**: `src` (an `.mp4`), `poster`, `width` and `height` are
  required, and so is a `caption` or a `title` (the player's accessible
  name). Optional: `duration` written like `0:32`, and `id`, an anchor in
  lowercase letters, digits and dashes. Nothing loads but the poster until
  the visitor presses play.

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

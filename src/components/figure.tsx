import fs from "node:fs";
import path from "node:path";
import { Children, isValidElement } from "react";
import Image from "next/image";

/*
 * Figures for project MDX. next-mdx-remote 6 strips `{}` expressions, so
 * every prop arrives as a quoted string and width/height are parsed here.
 * These are server components: they check at build time that each file
 * exists under public/, so a broken media path fails the build.
 */

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
  width: string;
  height: string;
};

/** Parses a quoted MDX size prop, failing the build on anything but a positive whole number. */
export function toPixels(value: string, name: string, src: string, kind = "Figure"): number {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || n <= 0 || String(n) !== value.trim()) {
    throw new Error(`${kind} ${src}: ${name}="${value}" must be a positive whole number`);
  }
  return n;
}

/** Fails the build unless `value` is a site path to a file that exists under public/. */
export function assertPublicFile(kind: string, prop: string, value: unknown, src: unknown): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${kind} ${typeof src === "string" && src ? src : "(no src)"}: the ${prop} prop is required`);
  }
  if (!value.startsWith("/") || value.startsWith("//")) {
    throw new Error(`${kind} ${value}: ${prop}="${value}" must be a site path starting with /`);
  }
  const file = path.join(process.cwd(), "public", decodeURIComponent(value));
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    throw new Error(`${kind} ${prop}="${value}": no such file public${value}`);
  }
  return value;
}

/** An id for this figure's parts, unique on a page as long as no file appears twice. */
const idFor = (src: string, part: string) =>
  `fig-${src.replace(/^\/images\/projects\//, "").replace(/[^a-zA-Z0-9]+/g, "-")}-${part}`;

/** Shared by Figure and Video so stills and clips read as one family. */
export const figureClassName = "not-prose my-10";
export const figcaptionClassName = "mt-3 text-sm leading-relaxed text-muted";

/**
 * One captioned image on a white plate. A visible "View full size" link under
 * the caption opens the file in a new tab; the image itself is also a pointer
 * target for the same file, through a link kept out of the tab order and
 * hidden from assistive technology, so each figure exposes one link.
 */
export function Figure({ src, alt, caption, width, height }: FigureProps) {
  assertPublicFile("Figure", "src", src, src);
  if (!alt) throw new Error(`Figure ${src}: alt text is required`);
  const w = toPixels(width, "width", src);
  const h = toPixels(height, "height", src);
  const captionId = idFor(src, "caption");
  const imageId = idFor(src, "image");

  return (
    <figure className={figureClassName} aria-labelledby={caption ? captionId : undefined}>
      <div className="relative flex items-center overflow-hidden rounded-lg border border-line bg-white p-2 transition-colors hover:border-accent sm:p-3">
        {/* Never wider than the file itself, so a small plot is not blown up; centered on its plate. */}
        <Image
          id={imageId}
          src={src}
          alt={alt}
          width={w}
          height={h}
          loading="lazy"
          className="mx-auto block h-auto w-full"
          style={{ maxWidth: `min(100%, ${w}px)` }}
        />
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute inset-0"
        />
      </div>
      <figcaption className={figcaptionClassName}>
        {caption ? <span id={captionId}>{caption}</span> : null}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby={caption ? captionId : imageId}
          className="mt-1 block w-fit py-1 font-mono text-xs text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-strong"
        >
          View full size<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </figcaption>
    </figure>
  );
}

/**
 * Two figures side by side from the sm breakpoint up, stacked below it. Each
 * figure spans two rows of a shared grid, so both plates take the taller
 * one's height (the shorter image centered on its plate) and both captions
 * start level.
 */
export function FigureRow({ children }: { children: React.ReactNode }) {
  const count = Children.toArray(children).filter(isValidElement).length;
  return (
    <div
      className={`not-prose my-10 grid gap-6 [&>figure]:my-0 ${
        count > 1
          ? "sm:grid-cols-2 [&>figure]:row-span-2 [&>figure]:grid [&>figure]:grid-rows-subgrid [&>figure]:gap-y-0"
          : ""
      }`}
    >
      {children}
    </div>
  );
}

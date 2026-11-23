import { assertPublicFile, figcaptionClassName, figureClassName, toPixels } from "@/components/figure";

/*
 * Short clips for project MDX, in the same frame and caption style as Figure.
 * next-mdx-remote 6 strips `{}` expressions, so every prop is a quoted string.
 *
 * preload="none" with a poster means the browser fetches the poster and
 * nothing else until the visitor presses play. No autoplay, no loop.
 * A server component: a missing src or poster file fails the build.
 */

type VideoProps = {
  src: string;
  poster: string;
  width: string;
  height: string;
  caption?: string;
  /** Accessible name when there is no caption, or a shorter one than the caption. */
  title?: string;
  /** Shown after the caption, written like "0:32". */
  duration?: string;
  /** Anchor for links to this player, such as "walkthrough". */
  id?: string;
};

export function Video({ src, poster, width, height, caption, title, duration, id }: VideoProps) {
  assertPublicFile("Video", "src", src, src);
  if (!src.endsWith(".mp4")) throw new Error(`Video ${src}: src must be an .mp4 file`);
  assertPublicFile("Video", "poster", poster, src);
  const name = title || caption;
  if (!name) throw new Error(`Video ${src}: a caption or title is required`);
  if (duration !== undefined && !/^\d{1,2}:\d{2}$/.test(duration)) {
    throw new Error(`Video ${src}: duration="${duration}" must look like 0:32`);
  }
  if (id !== undefined && !/^[a-z][a-z0-9-]*$/.test(id)) {
    throw new Error(`Video ${src}: id="${id}" must be lowercase letters, digits and dashes`);
  }
  const w = toPixels(width, "width", src, "Video");
  const h = toPixels(height, "height", src, "Video");

  return (
    <figure id={id} className={id ? `${figureClassName} scroll-mt-28` : figureClassName}>
      {/* No white plate: the frame hugs the video, never wider than the column or the file. */}
      <div
        className="mx-auto overflow-hidden rounded-lg border border-line bg-black"
        style={{ maxWidth: `min(100%, ${w}px)` }}
      >
        <video
          controls
          playsInline
          muted
          preload="none"
          poster={poster}
          width={w}
          height={h}
          aria-label={name}
          className="block h-auto w-full"
        >
          <source src={src} type="video/mp4" />
          <a href={src}>Download the video</a>
        </video>
      </div>
      {caption || duration ? (
        <figcaption className={figcaptionClassName}>
          {caption}
          {duration ? (
            <span className="whitespace-nowrap tabular-nums">
              {caption ? " " : ""}({duration})
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

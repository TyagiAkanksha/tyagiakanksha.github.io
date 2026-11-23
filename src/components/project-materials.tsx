import type { Project } from "@/lib/content";

/** The paper, code or documents behind a project. Renders nothing when empty. */
export function ProjectMaterials({ items }: { items: Project["materials"] }) {
  if (items.length === 0) return null;

  return (
    <section className="mt-12 border-t border-line pt-8">
      <h2 className="font-display text-xl font-semibold tracking-tight">
        Materials
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <li
              key={`${item.href}|${item.label}`}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
            >
              <a
                href={item.href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-accent underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
              >
                {item.label}
              </a>
              {item.note ? (
                <span className="text-sm text-muted">{item.note}</span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

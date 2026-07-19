import type { Publication } from "@/data/publications";

/** Plain citation (v1 style) — hanging indent, mono DOI, no badge pills. */
export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="max-w-2xl">
      <p className="pl-5 -indent-5 text-sm leading-relaxed">
        <span className="text-muted">{pub.authors}</span>{" "}
        <span className="text-faint">({pub.year}).</span>{" "}
        <span className="font-medium italic">{pub.title}.</span>{" "}
        <span className="text-muted">
          {pub.venue}
          {pub.pages ? `, pp. ${pub.pages}` : ""}.
        </span>
      </p>
      <p className="mt-1.5 pl-5 font-mono text-xs">
        <a
          href={pub.doiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-strong"
        >
          doi:{pub.doi}
        </a>
        {pub.award ? (
          <span className="ml-3 font-semibold text-accent">{pub.award}</span>
        ) : null}
      </p>
    </article>
  );
}

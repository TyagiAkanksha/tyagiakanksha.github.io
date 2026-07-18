import { Award, FileText } from "lucide-react";
import type { Publication } from "@/data/publications";
import { Badge } from "@/components/badge";

/** Typeset like a references section — hanging indent, mono DOI. */
export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="rounded-lg border border-line bg-surface/50 p-5">
      <div className="mb-2.5 flex flex-wrap items-center gap-2">
        <Badge>{pub.venueBadge}</Badge>
        {pub.award ? (
          <Badge variant="award">
            <Award className="size-3" aria-hidden />
            {pub.award}
          </Badge>
        ) : null}
      </div>
      <p className="pl-5 -indent-5 text-sm leading-relaxed">
        <span className="text-muted">{pub.authors}</span>{" "}
        <span className="text-faint">({pub.year}).</span>{" "}
        <span className="font-medium italic">{pub.title}.</span>{" "}
        <span className="text-muted">
          {pub.venue}
          {pub.pages ? `, pp. ${pub.pages}` : ""}.
        </span>
      </p>
      <a
        href={pub.doiUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-strong"
      >
        <FileText className="size-3.5" aria-hidden />
        doi:{pub.doi}
      </a>
    </article>
  );
}

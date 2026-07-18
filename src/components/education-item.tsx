import type { Education } from "@/data/education";
import { TechChip } from "@/components/badge";

export function EducationItem({ edu }: { edu: Education }) {
  return (
    <article className="rounded-lg border border-line bg-surface/50 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-medium tracking-tight">
          {edu.degree}
        </h3>
        <span className="font-mono text-xs text-faint">{edu.date}</span>
      </div>
      <p className="mt-0.5 text-sm text-muted">
        {edu.school} · {edu.location}
        {edu.gpa ? (
          <span className="ml-2 font-mono text-xs text-accent">
            GPA {edu.gpa}
          </span>
        ) : null}
      </p>
      {edu.coursework?.length ? (
        <div className="mt-3.5">
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
            Coursework
          </div>
          <div className="flex flex-wrap gap-1.5">
            {edu.coursework.map((c) => (
              <TechChip key={c}>{c}</TechChip>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

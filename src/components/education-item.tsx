import type { Education } from "@/data/education";
import { TechChip } from "@/components/badge";

export function EducationItem({ edu }: { edu: Education }) {
  return (
    <article className="border-b border-line pb-5 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-base font-semibold tracking-tight">
          {edu.degree}
        </h3>
        <span className="font-mono text-[11px] text-faint">{edu.date}</span>
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
        <div className="mt-3 flex flex-wrap gap-1.5">
          {edu.coursework.map((c) => (
            <TechChip key={c}>{c}</TechChip>
          ))}
        </div>
      ) : null}
    </article>
  );
}

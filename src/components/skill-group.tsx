import type { SkillGroup as SkillGroupData } from "@/data/skills";

export function SkillGroup({
  group,
  index,
}: {
  group: SkillGroupData;
  index: number;
}) {
  return (
    <div className="rounded-lg border border-line bg-surface/50 p-5">
      <div className="mb-3 flex items-baseline gap-2.5">
        <span className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
          {group.label}
        </h3>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
        {group.skills.map((s) => (
          <li key={s} className="text-sm text-fg">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

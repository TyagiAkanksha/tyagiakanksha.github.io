import type { SkillGroup as SkillGroupData } from "@/data/skills";

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <div>
      <h3 className="mb-2 font-display text-sm font-semibold tracking-tight">
        {group.label}
      </h3>
      <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
        {group.skills.map((s) => (
          <li key={s} className="text-sm text-muted">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  /** Venue / neutral metadata badge */
  neutral:
    "border border-line bg-surface text-muted",
  /** Award highlight badge */
  award:
    "border border-accent/40 bg-accent-soft text-accent",
} as const;

export function Badge({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: keyof typeof styles;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-faint">
      {children}
    </span>
  );
}

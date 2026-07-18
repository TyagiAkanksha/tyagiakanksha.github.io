export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-faint">
      {children}
    </span>
  );
}

/** Section with a mono index label and rule — the fieldbook's table-of-contents motif. */
export function Section({
  index,
  label,
  children,
  className,
}: {
  index?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mb-6 flex items-baseline gap-3">
        {index ? (
          <span className="font-mono text-xs text-accent">{index}</span>
        ) : null}
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {label}
        </h2>
        <span className="h-px flex-1 self-center bg-line" aria-hidden />
      </div>
      {children}
    </section>
  );
}

export function PageHeader({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <div className="rise pb-10 pt-14 sm:pt-20">
      <h1 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/** Section heading in the v1 voice — plain Quicksand, no numbering, no rule. */
export function Section({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="mb-5 font-display text-[22px] font-semibold tracking-tight">
        {label}
      </h2>
      {children}
    </section>
  );
}

export function PageHeader({ title, lede }: { title: string; lede?: string }) {
  return (
    <div className="fade pb-8 pt-12 sm:pt-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">
        {title}
      </h1>
      {lede ? (
        <p className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-muted">
          {lede}
        </p>
      ) : null}
    </div>
  );
}

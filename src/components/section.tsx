/** Section heading in the v1 voice — plain Quicksand, no numbering, no rule. */
export function Section({
  id,
  label,
  children,
  className,
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <h2 className="mb-5 font-display text-[22px] font-semibold tracking-tight">
        {label}
      </h2>
      {children}
    </section>
  );
}

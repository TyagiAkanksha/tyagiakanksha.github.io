import Link from "next/link";

const variants = {
  primary:
    "bg-accent text-bg hover:bg-accent-strong border border-transparent",
  secondary:
    "border border-line text-fg hover:border-accent hover:text-accent",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  download?: boolean;
}) {
  const cls = `inline-flex h-10 items-center gap-2 rounded-md px-4 font-mono text-[13px] transition-colors ${variants[variant]}`;
  if (external || download) {
    return (
      <a
        href={href}
        className={cls}
        {...(download ? { download: true } : {})}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

/** Slim sticky bar for pages outside the one-pager (case studies, 404). */
export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight transition-colors hover:text-accent"
        >
          Akanksha&nbsp;Tyagi
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav aria-label="Main">
            <ul className="flex items-center gap-4 sm:gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

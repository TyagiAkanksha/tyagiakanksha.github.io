import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/about", n: "01", label: "About" },
  { href: "/experience", n: "02", label: "Experience" },
  { href: "/projects", n: "03", label: "Projects" },
  { href: "/contact", n: "04", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight transition-colors hover:text-accent"
        >
          Akanksha&nbsp;Tyagi
        </Link>
        <div className="flex items-center gap-4 sm:gap-5">
          <nav aria-label="Main">
            <ul className="flex items-center gap-3.5 sm:gap-5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group font-mono text-[13px] text-muted transition-colors hover:text-fg"
                  >
                    <span className="mr-1 hidden text-[10px] text-faint transition-colors group-hover:text-accent sm:inline">
                      {item.n}
                    </span>
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

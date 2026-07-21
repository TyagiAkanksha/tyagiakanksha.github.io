import Image from "next/image";
import { FileDown } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data/site";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

/**
 * Identity rail — sticky full-height column on lg+, compact static top block
 * below lg. Server component: nav is plain hash anchors; the only client
 * islands are the two ThemeToggle instances (one per breakpoint).
 */
export function Sidebar() {
  return (
    <header className="pt-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:shrink-0 lg:flex-col lg:overflow-y-auto lg:py-20">
      <div className="flex items-center gap-4 lg:block">
        <Image
          src="/images/dp.jpeg"
          alt="Portrait of Akanksha Tyagi"
          width={112}
          height={112}
          priority
          className="size-16 rounded-full object-cover sm:size-20 lg:size-28"
        />
        <div className="min-w-0 lg:mt-6">
          <h1 className="font-display text-2xl font-semibold tracking-tight lg:text-[28px] lg:leading-tight">
            {site.name}
          </h1>
          <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
            Full Stack Engineer · AI Integrated Web Apps
          </p>
        </div>
        <div className="ml-auto self-start lg:hidden">
          <ThemeToggle />
        </div>
      </div>

      <p className="mt-5 hidden font-mono text-xs leading-relaxed text-accent lg:block">
        <span
          className="mr-2 inline-block size-[7px] rounded-full bg-accent"
          aria-hidden
        />
        Open to full stack and forward deployed engineering roles
      </p>

      <nav aria-label="Main" className="mt-6 lg:mt-10">
        <ul className="flex flex-wrap gap-x-5 gap-y-1.5 lg:flex-col lg:gap-3">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-[13px] text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 hidden items-center gap-3 lg:flex">
        <SocialLinks />
        <a
          href={site.resume}
          download
          className="inline-flex items-center gap-1.5 font-mono text-[13px] text-muted transition-colors hover:text-accent"
        >
          <FileDown className="size-4" aria-hidden /> Résumé
        </a>
      </div>

      {/* v1 pattern: on desktop the toggle floats fixed in the viewport's
          top-right corner (stays put while scrolling); mobile keeps the
          toggle in the identity block above. */}
      <div className="fixed right-6 top-6 z-40 hidden lg:block">
        <ThemeToggle />
      </div>
    </header>
  );
}

import { FileDown } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1.5">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {site.name} — {site.location}
          </p>
          <p className="font-mono text-xs text-faint">
            Designed &amp; built with Next.js + Tailwind ·{" "}
            <a
              href={`${site.github}/tyagiakanksha.github.io`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-line underline-offset-2 transition-colors hover:text-accent"
            >
              view source
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href={site.resume}
            download
            className="inline-flex h-8 items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <FileDown className="size-3.5" aria-hidden />
            Résumé
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

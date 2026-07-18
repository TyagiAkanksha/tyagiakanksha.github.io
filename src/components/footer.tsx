import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.name} — {site.location} ·{" "}
          <a
            href={site.resume}
            download
            className="text-muted underline decoration-muted/40 underline-offset-2 transition-colors hover:text-accent"
          >
            Résumé
          </a>{" "}
          ·{" "}
          <a
            href={`${site.github}/tyagiakanksha.github.io`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted underline decoration-muted/40 underline-offset-2 transition-colors hover:text-accent"
          >
            view source
          </a>
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}

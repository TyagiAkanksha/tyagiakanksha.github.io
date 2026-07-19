import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-4 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
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
    </footer>
  );
}

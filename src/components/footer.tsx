import { SocialLinks } from "@/components/social-links";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-4 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-xs text-faint">
        © {new Date().getFullYear()} {site.name} · {site.location} ·{" "}
        <a
          href={site.resume}
          download
          className="text-muted underline decoration-muted/40 underline-offset-2 transition-colors hover:text-accent"
        >
          Résumé
        </a>{" "}
        ·{" "}
        <a
          href={site.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-muted/40 underline-offset-2 transition-colors hover:text-accent"
        >
          view source
        </a>{" "}
        · Banner:{" "}
        <a
          href="https://commons.wikimedia.org/wiki/File:University_of_Arkansas_May_2017_07_(Old_Main).jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-muted/40 underline-offset-2 transition-colors hover:text-accent"
        >
          Old Main
        </a>{" "}
        by Michael Barera,{" "}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-muted/40 underline-offset-2 transition-colors hover:text-accent"
        >
          CC BY-SA 4.0
        </a>
      </p>
      <SocialLinks />
    </footer>
  );
}

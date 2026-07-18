import { Mail } from "lucide-react";
import { site } from "@/data/site";

/** Brand marks inlined — lucide deprecated brand icons. */
export function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M13.63 0H2.36C1.06 0 0 1.03 0 2.3v11.4C0 14.97 1.06 16 2.36 16h11.27c1.31 0 2.37-1.03 2.37-2.3V2.3C16 1.03 14.94 0 13.63 0ZM4.98 13.32H2.55V6.16h2.43v7.16ZM3.76 5.13a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm9.56 8.19h-2.42V9.67c0-.9-.33-1.5-1.13-1.5-.62 0-.98.42-1.15.82-.06.14-.07.35-.07.55v3.78H6.13V6.16h2.42v1.04c.32-.5.9-1.21 2.19-1.21 1.6 0 2.58 1.05 2.58 3.3v4.03Z" />
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  const linkCls =
    "inline-flex size-8 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent";
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <a
        href={site.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={linkCls}
      >
        <GitHubIcon className="size-4" />
      </a>
      <a
        href={site.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkCls}
      >
        <LinkedInIcon className="size-4" />
      </a>
      <a href={`mailto:${site.email}`} aria-label="Email" className={linkCls}>
        <Mail className="size-4" aria-hidden />
      </a>
    </div>
  );
}

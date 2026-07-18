import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start pt-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404 — page not found
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-tight">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be outdated — the site was recently rebuilt. Everything
        still lives here, just at cleaner URLs.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 font-mono text-[13px] text-accent transition-colors hover:text-accent-strong"
      >
        <ArrowLeft className="size-4" aria-hidden /> Back home
      </Link>
    </div>
  );
}

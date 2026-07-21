import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/top-bar";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 pt-24 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          404 · page not found
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The link may be outdated. The site was recently reorganized, and
          everything now lives on the home page and the project pages.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-1.5 font-mono text-[13px] text-accent transition-colors hover:text-accent-strong"
        >
          <ArrowLeft className="size-4" aria-hidden /> Back home
        </Link>
      </div>
    </>
  );
}

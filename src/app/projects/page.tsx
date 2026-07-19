import type { Metadata } from "next";
import { RedirectStub } from "@/components/redirect-stub";

export const metadata: Metadata = {
  title: "Projects",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function ProjectsRedirect() {
  return <RedirectStub to="/#projects" label="the Projects section" />;
}

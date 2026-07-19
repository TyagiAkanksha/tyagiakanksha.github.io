import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";

/**
 * Case-study chrome — the identity rail is home-only, so slug pages get a
 * slim sticky top bar and a narrow reading column. Lives under [slug]/ (not
 * projects/) so it does not wrap the /projects redirect stub.
 */
export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 sm:px-8">
        {children}
      </main>
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Footer />
      </div>
    </div>
  );
}

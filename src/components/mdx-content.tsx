import { MDXRemote } from "next-mdx-remote/rsc";
import { Figure, FigureRow } from "@/components/figure";
import { Video } from "@/components/video";

function ProseLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = props.href?.startsWith("http");
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    />
  );
}

const components = {
  a: ProseLink,
  Figure,
  FigureRow,
  Video,
};

/** Renders a project's MDX body inside the v1 prose theme. */
export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-v1 prose max-w-none prose-headings:scroll-mt-24">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

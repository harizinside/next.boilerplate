import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import FileImage from "./FileImage";
import ReadMore from "./ReadMore";

interface MdxRendererProps {
  mdxContent: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components?: Record<string, React.ComponentType<any>>;
}

// Default components
const defaultComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="my-1 font-bold">
      {props.children}
    </h1>
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="my-1 font-semibold">
      {props.children}
    </h2>
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className="my-1 font-medium">
      {props.children}
    </h2>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-200">{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody>{children}</tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b hover:bg-gray-100">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-2 text-left font-semibold border">{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-2 border">{children}</td>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
      {children}
    </pre>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="px-1 py-0.5 rounded">{children}</code>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 pl-4 italic text-gray-600 border-gray-400">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg text-gray-700 leading-relaxed">{children}</p>
  ),
  FileImage,
  ReadMore,
};

export default function MdxRenderer({
  mdxContent,
  components,
}: MdxRendererProps) {
  return (
    <MDXRemote
      source={mdxContent}
      components={{ ...defaultComponents, ...components }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeHighlight, rehypeKatex, rehypeSlug],
        },
      }}
    />
  );
}

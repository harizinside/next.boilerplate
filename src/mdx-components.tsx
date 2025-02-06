import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// Custom MDX components for styling and enhanced functionality
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium my-2">{children}</h3>
    ),

    // Paragraph
    p: ({ children }) => (
      <p className="my-4 text-lg text-gray-700 leading-relaxed">{children}</p>
    ),

    // Images
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        className="rounded-lg shadow-lg"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:text-blue-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-6 text-gray-600 border-gray-400">
        {children}
      </blockquote>
    ),

    // Lists
    ul: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4">{children}</ol>
    ),
    li: ({ children }) => <li className="mb-1">{children}</li>,

    // Table
    table: ({ children }) => (
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-gray-200">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b hover:bg-gray-100">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left font-semibold border">{children}</th>
    ),
    td: ({ children }) => <td className="px-4 py-2 border">{children}</td>,

    // Code Block
    pre: ({ children }) => (
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
        {children}
      </pre>
    ),
    code: ({ children }) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded text-red-600">
        {children}
      </code>
    ),

    ...components,
  };
}

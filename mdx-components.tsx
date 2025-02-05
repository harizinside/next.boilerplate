import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4 text-primary">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-3 text-secondary">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="my-4 text-lg text-gray-700">{children}</p>
    ),
    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        className="rounded-lg shadow-lg"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}

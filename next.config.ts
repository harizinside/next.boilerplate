import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  experimental: {
    mdxRs: false,
  },
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    // @ts-expect-error wrong types
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [
      // @ts-expect-error wrong types
      ["rehype-slug"],
      // @ts-expect-error wrong types
      ["rehype-highlight"],
      // @ts-expect-error wrong types
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

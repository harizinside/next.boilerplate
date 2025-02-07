import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  experimental: {
    mdxRs: false,
  },
  reactStrictMode: true,
  images: {},
};

// i18nPath is optional, and defaults to "i18n"
const withNextIntl = createNextIntlPlugin();

// Create MDX plugin
const withMDX = createMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    // @ts-expect-error wrong types
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [
      // @ts-expect-error wrong types
      ["rehype-highlight"],
      // @ts-expect-error wrong types
      ["rehype-katex"],
      // @ts-expect-error wrong types
      ["rehype-slug"],
    ],
  },
});

// Merge MDX config with Next.js config
export default withNextIntl(withMDX(nextConfig));

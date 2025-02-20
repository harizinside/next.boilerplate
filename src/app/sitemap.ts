import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${Bun.env.APP_URL}/articles`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
  ];
}

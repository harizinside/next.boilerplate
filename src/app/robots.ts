import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        disallow: ["/api/"],
      },
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api", "/auth", "/admin"],
      },
    ],
    sitemap: [
      `${Bun.env.APP_URL}/sitemap.xml`,
      `${Bun.env.APP_URL}/articles/sitemap.xml`,
    ],
  };
}

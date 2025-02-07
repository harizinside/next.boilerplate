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
        disallow: ["/api", "/consultation", "/administrator", "/open"],
      },
    ],
    sitemap: [
      `${process.env.APP_URL}/sitemap.xml`,
      `${process.env.APP_URL}/articles/sitemap.xml`,
      `${process.env.APP_URL}/services/sitemap.xml`,
      `${process.env.APP_URL}/inspection-package/sitemap.xml`,
    ],
  };
}

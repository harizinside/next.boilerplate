import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.APP_URL}/services`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/about-us`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/articles`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/inspection-package`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/contacts`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/career`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/privacy-policy`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
    {
      url: `${process.env.APP_URL}/terms-and-conditions`,
      lastModified: new Date("February 01, 2024 20:15:30"),
    },
  ];
}

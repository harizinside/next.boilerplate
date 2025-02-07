"use server";

import type { MetadataRoute } from "next";

interface IResponse {
  success: boolean;
  data: IArticle[];
}

interface IArticle {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resp = await getMeta();

  return (
    resp?.data.map((article: IArticle) => ({
      url: article.url,
      lastModified: new Date(article.lastModified).toISOString(),
      changeFrequency: article!.changeFrequency,
      priority: article!.priority,
    })) || []
  );
}

async function getMeta() {
  const url = `${process.env.API_URL}/sitemap/articles`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: IResponse = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

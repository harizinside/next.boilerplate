"use client";

import { useArticles } from "@/hooks/useArticles";
import type { ArticleProps } from "@/models/article";
import Image from "next/image";

export default function ArticlesList() {
  const { data: articles, isLoading, error } = useArticles(10, 0); // Default limit = 10, skip = 0

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <ul>
      {articles?.map((article: ArticleProps) => (
        <li key={article._id?.toString()}>
          <h2>{article.title}</h2>
          <Image
            src={article.thumbnail.src}
            alt={article.thumbnail.alt}
            width={100}
            height={100}
          />
          <p>{article.description}</p>
          <p>By {article.author.name}</p>
        </li>
      ))}
    </ul>
  );
}

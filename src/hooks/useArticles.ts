import { useQuery, UseQueryResult } from "react-query";
import type { ArticleProps } from "@/models/article";

interface ApiResponse {
  status: boolean;
  data?: ArticleProps[];
  message?: string;
}

async function fetchArticles(limit = 10, skip = 0): Promise<ApiResponse> {
  const url = `${Bun.env.APP_URL}/${Bun.env.APP_API_PREFIX}/${Bun.env.APP_API_VERSION}/articles?requirement=rss&limit=${limit}&skip=${skip}`;
  console.log("->", url);
  const res = await fetch(url, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export function useArticles(
  limit = 10,
  skip = 0
): UseQueryResult<ArticleProps[], unknown> {
  console.log("LAHELU");
  return useQuery<ApiResponse, unknown, ArticleProps[]>({
    queryKey: ["articles", limit, skip],
    queryFn: () => fetchArticles(limit, skip),
    select: (data) => data.data ?? [],
  });
}

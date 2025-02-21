"use client";

import { useState, useEffect } from "react";
import { ArticleProps } from "@/models/article";
import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";
import Pagination from "@/app/components/Pagination";

interface IHTTPResponse {
  status: boolean;
  message?: string;
  data?: ArticleProps[];
  pagination: IPagination;
}

interface IPagination {
  from: number;
  to: number;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export default function DataList() {
  const [items, setItems] = useState<ArticleProps[]>([]);
  const [pagination, setPagination] = useState<IPagination>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  const fetchItems = async (page: number) => {
    const params = new URLSearchParams();
    params.append("requirement", "rss");
    params.append("page", page.toString()); // Use dynamic page number
    params.append("limit", "10");
    const url = `/api/v1/articles?${params}`;

    setLoading(true);

    try {
      const res = await fetch(url);
      const newItems: IHTTPResponse = await res.json();
      setItems(newItems.data || []);
      setPagination(newItems.pagination);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]); // Refetch when page changes

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-6">
        <ul className="list-disc">
          {items?.map((article) => (
            <li className="mb-2" key={article.slugs?.toString()}>
              <Link
                href={`/articles/${article.slugs}`}
                className="text-gray-700 font-bold text-2xl hover:underline hover:text-blue-600"
              >
                {article.title}
              </Link>
              <Image
                src={article.thumbnail.src}
                width={500}
                height={500}
                alt={article.thumbnail.alt}
              />
              <p className="text-gray-700">{article.description}</p>
              <p className="text-gray-500 text-sm font-medium">
                By {article.author.name}
              </p>
            </li>
          ))}
        </ul>
        {/* Pagination Component */}
        {pagination && (
          <Pagination
            {...pagination}
            onPageChange={(newPage) => setCurrentPage(newPage)} // Update page
          />
        )}
      </div>
    </>
  );
}

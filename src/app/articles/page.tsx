import { Metadata } from "next";
import ArticlesList from "./lists";

export const metadata: Metadata = {
  title: "Articles | Next.JS",
  description:
    "NextJS Boilerplate, web yang dibangun untuk kebutuhan Fullstack.",
};

export default function Page() {
  return <ArticlesList />;
}

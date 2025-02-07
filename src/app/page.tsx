import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Blog | My Website",
  description: "Read the latest blog posts.",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>Welcome to the home page</p>
    </>
  );
}

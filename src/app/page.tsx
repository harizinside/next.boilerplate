import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Boilerplate | Next.JS",
  description:
    "NextJS Boilerplate, web yang dibangun untuk kebutuhan Fullstack.",
};

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <div className="p-4">
        <nav>
          <ul className="list-decimal">
            <li>
              <Link className="text-blue-700 hover:text-blue-300" href="/">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-700 hover:text-blue-300"
                href="/articles"
              >
                {t("artikel")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="text-sm font-medium">Welcome to the home page</p>
    </>
  );
}

import { Suspense } from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import DataList from "./data";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Articles | Next.JS",
  description:
    "NextJS Boilerplate, web yang dibangun untuk kebutuhan Fullstack.",
};

export default function Page() {
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

      <Suspense fallback={<Loading />}>
        <DataList />
      </Suspense>
    </>
  );
}

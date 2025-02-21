import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "@/app/globals.css";

const nuninto = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "1000"],
  style: "normal",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NextJS Boilerplate",
  description:
    "NextJS Boilerplate, web yang dibangun untuk kebutuhan Fullstack",
  keywords: ["NextJS Boilerplate", "Layanan diagnostik", "laboratorium"],
  authors: [{ name: "NextJS Boilerplate" }],
  robots: "index, follow",
  alternates: {
    canonical: Bun.env.APP_URL,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    url: Bun.env.APP_URL,
    type: "website",
    siteName: "NextJS Boilerplate",
    title: "NextJS Boilerplate",
    description:
      "NextJS Boilerplate, web yang dibangun untuk kebutuhan Fullstack",
    images: [`${Bun.env.APP_URL}/icon.png`],
    locale: "id_ID",
  },
  twitter: {
    title: "NextJS Boilerplate",
    description:
      "NextJS Boilerplate, web yang dibangun untuk kebutuhan Fullstack",
    images: [`${Bun.env.APP_URL}/icon.png`],
    card: "summary",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <NextIntlClientProvider messages={messages}>
        <body className={`${nuninto.className} antialiased`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}

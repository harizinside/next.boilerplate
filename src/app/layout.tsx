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
  title: "Klinik Utama Rhein Medika",
  description:
    "Klinik Utama Rhein Medika, anak perusahaan PT. EIH, berdiri Mei 2022, fokus pada layanan diagnostik laboratorium dan kesehatan berkualitas.",
  keywords: ["Klinik Utama Rhein Medika", "Layanan diagnostik", "laboratorium"],
  authors: [{ name: "Klinik Utama Rhein Medika" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://rheinmedika.com",
  },
  icons: {
    icon: "/icon-rhein.png",
    apple: "/icon-rhein.png",
  },
  openGraph: {
    url: "https://rheinmedika.com",
    type: "website",
    siteName: "Klinik Utama Rhein Medika",
    title: "Klinik Utama Rhein Medika",
    description:
      "Klinik Utama Rhein Medika, anak perusahaan PT. EIH, berdiri Mei 2022, fokus pada layanan diagnostik laboratorium dan kesehatan berkualitas.",
    images: ["https://rheinmedika.com/logo-rhein.png"],
    locale: "id_ID",
  },
  twitter: {
    title: "Klinik Utama Rhein Medika",
    description:
      "Klinik Utama Rhein Medika, anak perusahaan PT. EIH, berdiri Mei 2022, fokus pada layanan diagnostik laboratorium dan kesehatan berkualitas.",
    images: ["https://rheinmedika.com/logo-rhein.png"],
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

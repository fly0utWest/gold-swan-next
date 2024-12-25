import type { Metadata } from "next";
import { Oswald, Geist_Mono } from "next/font/google";
import "../_styles/globals.css";
import Header from "@/widgets/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/shared/config/i18n/routing";
import { notFound } from "next/navigation";

const oswaldSans = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Swan Agency",
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${oswaldSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />

          <main className="my-20 min-h-screen">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

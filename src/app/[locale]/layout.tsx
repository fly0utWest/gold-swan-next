import type { Metadata } from "next";
import { Oswald, Geist_Mono } from "next/font/google";
import "../_styles/globals.css";
import Header from "@/shared/ui/header/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const oswaldSans = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Swan Agency",
  description: "",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>
) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

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

import type { Metadata } from "next";
import { Oswald, Geist_Mono } from "next/font/google";
import "../_styles/globals.css";
import Header from "@/shared/ui/header/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";

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

  const { locale } = params;

  const { children } = props;

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${oswaldSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider enableSystem attribute="class">
            <Header />
            <main className="my-24 min-h-screen">{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

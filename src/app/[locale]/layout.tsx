import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../_styles/globals.css";
import Header from "@/shared/ui/header/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import ClientObserver from "@/shared/utils/client-observer";
import Footer from "@/shared/ui/footer/footer";
import Script from "next/script";
import Inchat from "@/shared/ui/inchat";

const oswaldSans = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Swan Agency",
  description:
    "Global agency specializing in digital marketing, branding, PR, and reputation management. Our goal is to create innovative strategies that drive growth, build trust, and ensure long-term success for our clients",
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
    <html
      lang={locale}
      className="scroll-smooth overscroll-none *:selection:bg-primary-500 *:selection:text-foreground"
      suppressHydrationWarning
    >
      <head>
        <Script
          src="https://staticinchatai.5dgo.dev/inchat-widget.iife.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${oswaldSans.className} antialiased`}>
        <Inchat />
        <ClientObserver />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider defaultTheme="dark" attribute="class">
            <div className="absolute top-0" id="top"></div>
            <Header />
            <main className="py-24 min-h-[90dvh]">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

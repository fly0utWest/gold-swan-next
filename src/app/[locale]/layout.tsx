import { Libre_Bodoni } from "next/font/google";
import "../_styles/globals.css";
import Header from "@/shared/ui/header/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import ClientObserver from "@/shared/utils/client-observer";
import Footer from "@/shared/ui/footer/footer";
import Script from "next/script";
import Inchat from "@/shared/ui/inchat";
import CookiesAgreement from "@/shared/ui/cookies-agreement";
import { Metadata } from "next";

const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gold-swan.is/"),
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>
) {
  const { locale } = await props.params;
  const { children } = props;
  const messages = await getMessages();

  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_WIDGET_ID!;

  return (
    <html
      lang={locale}
      className="scroll-smooth overscroll-none *:selection:bg-primary-500 *:selection:text-foreground"
      suppressHydrationWarning
    >
      <body className={`${libreBodoni.className}`}>
        <NextIntlClientProvider messages={messages}>
          <div className="fixed z-[999] w-max h-max" id="portal-container">
            <CookiesAgreement />
          </div>
          <Inchat />
          <ClientObserver />
          <ThemeProvider defaultTheme="dark" attribute="data-theme">
            <div className="absolute top-0" id="top"></div>
            <Header />
            <main className="py-24 min-h-[90dvh]">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>

        <Script
          id="chat-widget-lib"
          strategy="beforeInteractive"
          src={`https://growplex.dev/scripts/chat-widget.js`}
        />
        <Script
          id="chat-widget-init"
          strategy="afterInteractive"
          data-chat-id={CHAT_ID}
        >
          {`
    (function () {
      const { chatId } = document.currentScript.dataset;

      const theme = document.documentElement.getAttribute("data-theme");
      const open = localStorage.getItem("chat-widget-open") === "true";

      
      if (!window.ChatWidget) return;
      window.ChatWidget.init({ chatId, domain: 'https://growplex.dev', listenTheme: false, initOpen: open);
      
    })();
  `}
        </Script>
      </body>
    </html>
  );
}

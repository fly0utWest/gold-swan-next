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

  const CHAT_DOMAIN = process.env.NEXT_PUBLIC_CHAT_WIDGET_DOMAIN!;
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
          <ThemeProvider defaultTheme="dark" attribute="class">
            <div className="absolute top-0" id="top"></div>
            <Header />
            <main className="py-24 min-h-[90dvh]">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script src="https://staticinchatai.5dgo.dev/inchat-widget.iife.js" />

        <Script
          id="chat-widget-lib"
          strategy="beforeInteractive"
          src={`${CHAT_DOMAIN}/scripts/chat-widget.js`}
          data-chat-id={CHAT_ID}
        />
        <Script id="chat-widget-init" strategy="afterInteractive">
          {`
            (function() {
              const id = "${CHAT_ID}";
              const domain = "${CHAT_DOMAIN}";

              function boot() {
                if (!window.ChatWidget) return;
                if (!window.ChatWidget._loaded) {
                  window.ChatWidget.init({
                    id,
                    domain,
                    color: "#C0AC72",
                  });
                } else {
                  window.ChatWidget.reload();
                }
              }

              // wait a tick in case lib is still downloading
              if (!window.ChatWidget) {
                document.addEventListener("DOMContentLoaded", boot);
              } else {
                boot();
              }
            })();
          `}
        </Script>

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Script
              strategy="beforeInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
            />
            <Script
              id="ga-consent"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  
                  gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied'
                  });

                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
                    anonymize_ip: true,
                    send_page_view: false
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}

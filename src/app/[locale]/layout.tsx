import type { Metadata } from "next";
import { Oswald} from "next/font/google";
import "../_styles/globals.css";
import Header from "@/shared/ui/header/header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import ClientObserver from "@/shared/utils/client-observer";
import Footer from "@/shared/ui/footer/footer";

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
    <html
      lang={locale}
      className="scroll-smooth *:selection:bg-primary-500 *:selection:text-foreground"
      suppressHydrationWarning
    >
      <body className={`${oswaldSans.className} antialiased`}>
        <ClientObserver />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider defaultTheme="dark" attribute="class">
            <Header />
            <main className="my-24 min-h-[90dvh]">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import Header from "../components/Header";
import { Passion_One, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-robotoSlab",
  weight: ["200", "300", "400", "500", "700", "900"],
});
const passionOne = Passion_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-passionone",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Martin Brutvan | Design Technologist",
  description: "Developer, designer, communicator",
  openGraph: {
    title: "Martin Brutvan | Design Technologist",
    images: ["/martin-brutvan-og-image.png"],
  },
};

const gaId = "G-20ZXRJQ3B6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${passionOne.variable} ${robotoSlab.variable} bg-light-surface-primary antialiased`}
      >
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Header />
        <main className="flex flex-col w-full max-w-screen-lg px-4 py-20 mt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

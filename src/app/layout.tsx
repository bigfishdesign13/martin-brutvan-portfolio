import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { Passion_One, Roboto_Slab } from "next/font/google";

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
        <Header />
        <main className="flex flex-col w-full max-w-screen-lg px-4 py-20 mt-16">
          {children}
        </main>
      </body>
    </html>
  );
}

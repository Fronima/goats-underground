import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Script from "next/script";
import { GoogleTagManager, sendGTMEvent } from "@next/third-parties/google";
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goats Underground",
  description: "",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-full w-full"}>
        <Header/>
        {children}
        <Footer/>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      <Analytics/>
    </html>
  );
}

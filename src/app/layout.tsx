import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monotreme",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description?.toString()} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/favicon.ico" />
      </Head>
      <body className={"h-screen w-screen"}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

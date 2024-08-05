import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "../styles/globals.css";
import Footer from "../components/layout/footer/Footer";
import Navbar from "@/components/navigation/navbar/Navbar";
import Head from 'next/head';

const font = Barlow({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Alleyway",
  description: "Event Management Company In Dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/_next/static/css/app/page.css" 
          as="style"
        />
      </Head>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

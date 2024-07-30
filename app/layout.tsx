import type { Metadata } from "next";
import { Barlow} from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/footer/Footer";
import Navbar from "@/components/navigation/navbar/Navbar";

const font = Barlow({weight: ['400', '700'], subsets: ['latin']});

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
      <body className={font.className}>
        <Navbar/>
         {children}
        <Footer/>
        </body>
    </html>
  );
}

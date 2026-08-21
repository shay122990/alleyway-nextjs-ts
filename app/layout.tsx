import "./globals.css";
import { Barlow } from "next/font/google";
import WhatsApp from "./layout/WhatsApp";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const font = Barlow({
  weight: ["400", "700"],
  subsets: ["latin"],
  preload: true,
});

export const metadata = {
  title: "Alleyway",
  description: "Event & Project Management Company In Dubai",
  icons: {
    icon: "/favicon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" data-scroll-behavior="smooth">
    <body className={font.className}>
      <Navbar />
      {children}
      <Footer />
      <WhatsApp isFloating={true} />
    </body>
  </html>
);

export default RootLayout;

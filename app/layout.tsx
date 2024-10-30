import '../styles/globals.css';
import { Barlow } from 'next/font/google';
import WhatsApp from '@/components/common/whatsapp/WhatsApp';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

const font = Barlow({ weight: ['400', '700'], subsets: ['latin'], preload: true });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={font.className}>
      <Header />
      {children}  
      <Footer />
      <WhatsApp isFloating={true} />
    </body>
  </html>
);

export default RootLayout;

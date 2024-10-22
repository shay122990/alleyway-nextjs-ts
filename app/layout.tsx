import '../styles/globals.css';
import { Barlow } from 'next/font/google';
import Head from 'next/head';
import WhatsApp from '@/components/common/whatsapp/WhatsApp';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';

const font = Barlow({ weight: ['400', '700'], subsets: ['latin'], preload: true });

export const metadata = {
  title: 'Alleyway',
  description: 'Event & Project Management Company In Dubai',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head>
      <meta name="description" content="Event & Project Management Company In Dubai" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Alleyway Events</title>
    </Head>
      <body className={font.className}>
        <Header />
          {children}  
        <Footer />
        <WhatsApp isFloating={true} />
      </body>
  </html>
);

export default RootLayout;

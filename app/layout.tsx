import './globals.css';
import { Barlow } from 'next/font/google';
// import WhatsApp from '@/components/common/whatsapp/WhatsApp';
// import Footer from '@/components/layout/footer/Footer';
// import Header from '@/components/layout/header/Header';
import ComingSoon from '@/components/ComingSoon';

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
    <body className={font.className}>
      <ComingSoon/>
      {/* <Header />
      {children}
      <Footer />
      <WhatsApp isFloating={true} /> */}
    </body>
  </html>
);

export default RootLayout;

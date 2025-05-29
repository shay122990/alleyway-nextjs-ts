import './globals.css';
import { Barlow } from 'next/font/google';
import WhatsApp from '@/components/layout/WhatsApp';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
// import ComingSoon from '@/components/ComingSoon';

const font = Barlow({ weight: ['400', '700'], subsets: ['latin'], preload: true });

export const metadata = {
  title: 'Alleyway',
  description: 'Event & Project Management Company In Dubai',
  icons: {
    icon: '/favicon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={font.className}>
      {/* <ComingSoon/> */}
      <Navbar />
      {children}
      <Footer />
      <WhatsApp isFloating={true} />
    </body>
  </html>
);

export default RootLayout;

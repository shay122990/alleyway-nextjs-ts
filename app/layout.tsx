import '../styles/globals.css';
import { Barlow } from 'next/font/google';
import Head from 'next/head';
import WhatsApp from '@/components/common/whatsapp/WhatsApp';
import Navbar from '@/components/navigation/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

const font = Barlow({ weight: ['400', '700'], subsets: ['latin'], preload: true });

export const metadata = {
  title: 'Alleyway',
  description: 'Event Management Company In Dubai',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <Head>
      <link rel="preload" href="/globals.css" as="style" />
      <link rel="preload" href="/_next/static/css/app/page.css" as="style" />
      
      {/* Preload only essential styles */}
      <link rel="stylesheet" href="/_next/static/css/" />
      {/* <link rel="stylesheet" href="/_next/static/css/app/services/Services.module.css" />
      <link rel="stylesheet" href="/_next/static/css/app/projects/Projects.module.css" /> */}
      

      {/* SEO Meta Tags */}
      <meta name="description" content="Event & Project Management Company In Dubai" />
      <meta name="keywords" content="events, project management, Dubai Events, Alleyway, Alleyway Events, event planner in dubai, project management company in dubai" />
      <meta name="author" content="Shay Asanova" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Alleyway" />
      <meta property="og:description" content="Event & Project Management Company In Dubai" />
      <meta property="og:image" content="URL to your image" />
      <meta property="og:url" content="https://alleywaydxb.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alleyway" />
      <meta name="twitter:description" content="Event & Project Management Company In Dubai" />
      <meta name="twitter:image" content="URL to your image" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Alleyway",
          "url": "https://alleywaydxb.com",
          "logo": "URL to your logo",
        })}
      </script>
    </Head>
    <body className={font.className}>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
          <Footer />
        {typeof window !== 'undefined' && <WhatsApp isFloating={true} />}
    </body>
  </html>
);

export default RootLayout;

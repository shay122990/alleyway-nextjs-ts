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
      {/* <link
        rel="preload"
        href="/_next/static/css/b1f80d51dc5578d1.css"
        as="style"
        onLoad={() => {
          const link = document.querySelector('link[rel="preload"][href="/_next/static/css/b1f80d51dc5578d1.css"]') as HTMLLinkElement;
          if (link) {
            link.onload = null; 
            link.rel = 'stylesheet'; 
          }
        }}
      />
      <noscript>
        <link rel="stylesheet" href="/_next/static/css/b1f80d51dc5578d1.css" />
      </noscript> */}
        
      {/* SEO Meta Tags */}
      <meta name="description" content="Event & Project Management Company In Dubai" />
      <meta name="keywords" content="events, project management, Dubai Events, Alleyway, Alleyway Events, event planner in dubai, project management company in dubai" />
      <meta name="author" content="Shay Asanova" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

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
          "name": "Alleyway - Event & Project Management Company in Dubai",
          "url": "https://alleywaydxb.com",
          "logo": "URL to your logo",
          "sameAs": [
            "https://www.facebook.com/your-profile",
            "https://twitter.com/your-profile",
            "https://www.instagram.com/your-profile"
          ],
          "address": {
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971-528182368",
            "contactType": "Customer Service"
          }
        })}
      </script>
    </Head>
    <body className={font.className}>
      <Navbar />
      <>{children}</>
      <Footer />
      <WhatsApp isFloating={true} />
    </body>
  </html>
);

export default RootLayout;

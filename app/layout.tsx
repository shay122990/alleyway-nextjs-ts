import React, { Suspense } from 'react';
import { Barlow } from 'next/font/google';
import '../styles/globals.css';
import Loader from '../components/common/loader/Loader';
import Head from 'next/head';
import WhatsApp from '@/components/common/whatsapp/WhatsApp';

const DynamicNavbar = React.lazy(() => import('@/components/navigation/navbar/Navbar'));
const DynamicFooter = React.lazy(() => import('@/components/layout/footer/Footer'));

const font = Barlow({ weight: ['400', '700'], subsets: ['latin'], preload: false });

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
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap" rel="stylesheet" />
      <link rel="preload" href="/globals.css" />
      <link rel="preload" href="/_next/static/css/app/page.css" />
      <link rel="preload" href="/_next/static/css/app/contact/Contact.module.css" />
      <link rel="preload" href="/_next/static/css/app/privacy-policy/Privacy-Policy.module.css" />
      <link rel="preload" href="/_next/static/css/app/projects/Projects.module.css" />
      <link rel="preload" href="/_next/static/css/app/services/Services.module.css" />

      {/* SEO Meta Tags */}
      <meta name="description" content="Event Management Company In Dubai" />
      <meta name="keywords" content="events, management, Dubai, Alleyway" />
      <meta name="author" content="Shay Asanova" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Alleyway" />
      <meta property="og:description" content="Event Management Company In Dubai" />
      <meta property="og:image" content="URL to your image" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Alleyway" />
      <meta name="twitter:description" content="Event Management Company In Dubai" />
      <meta name="twitter:image" content="URL to your image" />

      {/* Structured Data */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alleyway",
        "url": "https://yourwebsite.com",
        "logo": "URL to your logo",
        //Add image, website url and logo once ready for production
      })}
      </script>
    </Head>
    <body className={font.className}>
      <Suspense fallback={<Loader />}>
        <DynamicNavbar />
        {children}
        <DynamicFooter />
        <WhatsApp isFloating={true}/>
      </Suspense>
    </body>
  </html>
);

export default RootLayout;

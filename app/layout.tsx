// import '../styles/globals.css';
// import { Barlow } from 'next/font/google';
// import Head from 'next/head';
// import WhatsApp from '@/components/common/whatsapp/WhatsApp';
// import Navbar from '@/components/navigation/navbar/Navbar';
// import Footer from '@/components/layout/footer/Footer';

// const font = Barlow({ weight: ['400', '700'], subsets: ['latin'], preload: true });

// export const metadata = {
//   title: 'Alleyway',
//   description: 'Event Management Company In Dubai',
// };

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
//   <html lang="en">
//     <Head>
//       <link rel="preload" href="/_next/static/css/app/page.css" as="style" />
//       <link rel="stylesheet" href="/_next/static/css/" />

//       {/* SEO Meta Tags */}
//       <meta name="description" content="Event & Project Management Company In Dubai" />
//       <meta name="keywords" content="events, project management, Dubai Events, Alleyway, Alleyway Events, event planner in dubai, project management company in dubai" />
//       <meta name="author" content="Shay Asanova" />

//       {/* Open Graph Tags */}
//       <meta property="og:title" content="Alleyway" />
//       <meta property="og:description" content="Event & Project Management Company In Dubai" />
//       <meta property="og:image" content="URL to your image" />
//       <meta property="og:url" content="https://alleywaydxb.com" />
//       <meta property="og:type" content="website" />

//       {/* Twitter Card Tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content="Alleyway" />
//       <meta name="twitter:description" content="Event & Project Management Company In Dubai" />
//       <meta name="twitter:image" content="URL to your image" />

//       {/* Structured Data */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           "name": "Alleyway",
//           "url": "https://alleywaydxb.com",
//           "logo": "URL to your logo",
//         })}
//       </script>
//     </Head>
//     <body className={font.className}>
//       <nav>
//         <Navbar />
//       </nav>
//       <main>{children}</main>
//       <Footer />
//       {typeof window !== 'undefined' && <WhatsApp isFloating={true} />}
//     </body>
//   </html>
// );

// export default RootLayout;

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
      <link
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
      </noscript>

      {/* Inline critical CSS */}
      <style>{`
        .hero {
          background: center center no-repeat;
          background-size: cover;
          position: relative;
          height: 500px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 2rem 0;
          padding: 1rem 2rem;
          filter: contrast(1) brightness(1.05);
          overflow: hidden;
          border-radius: 25px;
          box-shadow: 5px 5px 10px #170754, -5px -5px 10px #160e33;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #011b3182;
          z-index: 1;
          pointer-events: none;
        }

        .backgroundImage {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .heroContent {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          align-items: center;
          text-align: center;
          z-index: 2;
        }

        .heroInfo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          height: 80%;
          width: 100%;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .hero {
            height: 640px;
          }
        }
        @media (min-width: 1024px) {
          .hero {
            height: 840px;
          }
          .heroTitle {
            font-size: 8rem;
          }
        }
      `}</style>

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

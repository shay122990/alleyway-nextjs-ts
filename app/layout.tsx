import React, { Suspense } from 'react';
import { Barlow } from 'next/font/google';
import '../styles/globals.css';
import Loader from '@/components/common/loader/Loader';
import Head from 'next/head';

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
      <link rel="preload" href="/_next/static/css/app/page.css" as="style" />
      <link rel="preload" href="/_next/static/css/app/contact/Contact.module.css" as="style" />
      <link rel="preload" href="/_next/static/css/app/privacy-policy/Privacy-Policy.module.css" as="style" />
      <link rel="preload" href="/_next/static/css/app/projects/Projects.module.css" as="style" />
      <link rel="preload" href="/_next/static/css/app/services/Services.module.css" as="style" />
    </Head>
    <body className={font.className}>
      <Suspense fallback={<Loader />}>
        <DynamicNavbar />
        {children}
        <DynamicFooter />
      </Suspense>
    </body>
  </html>
);

export default RootLayout;

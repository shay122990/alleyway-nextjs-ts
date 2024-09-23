import styles from "./page.module.css";
import React, { Suspense } from 'react';
import Head from 'next/head';
import Loader from '@/components/common/loader/Loader';
import homeImage from "@/public/images/header-home.jpg";
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('@/components/layout/hero/Hero'), {
  ssr: false,
  loading: () => <Loader />,
});

const DynamicEventsSection = dynamic(() => import('./components/events-section/Events-Section'), {
  ssr: false,
});

const DynamicHomeCarousel = dynamic(() => import('@/components/layout/home-carousel/Home-Carousel'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Alleyway - Plan Any Event</title>
        <link rel="preload" href={homeImage.src} as="image" />
        <meta name="description" content="Alleyway - Plan Any Event With Us " />
      </Head>
      <Suspense fallback={<Loader />}>
        <DynamicHero 
          image={homeImage} 
          title="The Events Management Company" 
          paragraph="We provide top-notch services to meet your needs." 
          titleClassName={styles.homeTitle}
          paragraphClassName={styles.homeParagraph}
        />
      </Suspense>
      <main className={styles.mainContainer}>
        <Suspense fallback={<Loader />}>
          <DynamicEventsSection />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <DynamicHomeCarousel />
        </Suspense>
      </main>
    </>
  );
}

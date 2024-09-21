import styles from "./Services.module.css";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from "next/head";
import Loader from "@/components/common/loader/Loader";
import projectsImage from "@/public/images/projects-image.jpg";

const DynamicHero = dynamic(() => import('@/components/layout/hero/Hero'), {
  ssr: false,
  loading: () => <Loader  />,
});

export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services</title>
        <link rel="preload" href={projectsImage.src} as="image" />
        <meta name="description" content="Comprehensive event management services." />
      </Head>
      <Suspense fallback={<Loader />}>
        <DynamicHero 
          image={projectsImage} 
          title="What We Do" 
          paragraph="At Alleyway, we offer a comprehensive range of event management services designed to make your event memorable and stress-free." 
          titleClassName={styles.servicesTitle}
          paragraphClassName={styles.servicesParagraph}
        />
      </Suspense>
      <main>
        Services
      </main>
    </>
  );
}

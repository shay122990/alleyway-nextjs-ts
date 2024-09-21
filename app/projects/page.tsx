import styles from "./Projects.module.css";
import React, { Suspense } from 'react';
import Head from 'next/head';
import Loader from "@/components/common/loader/Loader";
import aboutImage from "@/public/images/about-image.jpg";
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('@/components/layout/hero/Hero'), {
  ssr: false,
  loading: () => <Loader  />,
});

export default function Project() {
  return (
    <>
      <Head>
        <title>Projects - Alleyway</title>
        <link rel="preload" href={aboutImage.src} as="image" />
        <meta name="description" content="The projects we've successfully completed" />
      </Head>
      <Suspense fallback={<Loader  />}>
        <DynamicHero 
          image={aboutImage} 
          title="Always up to the challenge!" 
          paragraph="The Projects we've successfully completed"
          titleClassName={styles.projectsTitle}
          paragraphClassName={styles.projectsParagraph}
        />
      </Suspense>
      <main className={styles.main}>
        Project Page Content 
      </main>
    </>
  );
}

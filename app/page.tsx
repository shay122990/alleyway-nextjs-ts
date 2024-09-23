import styles from "./page.module.css";
import React, { Suspense } from 'react';
import Head from 'next/head';
import Loader from '@/components/common/loader/Loader';
import homeImage from "@/public/images/header-home.jpg";
import projectsImage from "@/public/images/projects-image.jpg";
import dynamic from 'next/dynamic';

const DynamicHero = dynamic(() => import('@/components/layout/hero/Hero'), {
  ssr: false,
  loading: () => <Loader  />,
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
      <Suspense fallback={<Loader  />}>
        <DynamicHero 
          image={homeImage} 
          title="The Events Management Company" 
          paragraph="We provide top-notch services to meet your needs." 
          titleClassName={styles.homeTitle}
          paragraphClassName={styles.homeParagraph}
        />
      </Suspense>
      <main>
        <div className={styles.eventsContainer}>
          <Suspense fallback={<Loader  />}>
            <DynamicEventsSection
              title="Exhibitions & Trade Shows"
              imageSrc1={projectsImage}
              links={[
                { name: 'Booth Design & Set Up', href: '/services#exhibitions' },
                { name: 'Logistics Management', href: '/services#exhibitions' },
                { name: 'On-site Coordination', href: '/services#exhibitions' },
              ]}
              className={styles.exhibitionsSection}
              image1ClassName={styles.exhibitionsImage1}
            />
            <DynamicEventsSection
              title="Private Events"
              imageSrc1={projectsImage}
              imageSrc2={projectsImage}
              links={[
                { name: 'Anniversary', href: '/services/private-events' },
                { name: 'Birthday Parties', href: '/services#private-events' },
                { name: 'Weddings', href: '/services#private-events' },
                { name: 'Social Events', href: '/services#private-events' },
              ]}
              className={styles.exhibitionsSection}
              image1ClassName={styles.exhibitionsImage1}
            />
            <DynamicEventsSection
              title="Creative Services"
              imageSrc1={projectsImage}
              imageSrc2={projectsImage}
              links={[
                { name: 'Event Concept & Design', href: '/services#creative-services' },
                { name: 'Thematic Decor', href: '/services#creative-services' },
                { name: 'Entertainment Planning', href: '/services#creative-services' }
              ]}
              className={styles.exhibitionsSection}
              image1ClassName={styles.exhibitionsImage1}
            />
            <DynamicEventsSection
              title="Audio and Visual Services"
              imageSrc1={projectsImage}
              imageSrc2={projectsImage}
              links={[
                { name: 'Sound Systems', href: '/services#audio-visual' },
                { name: 'Lighting Design', href: '/services#audio-visual' },
                { name: 'LED Screens', href: '/services#audio-visual' },
                { name: 'Technical Support', href: '/services#audio-visual' },
              ]}
              className={styles.exhibitionsSection}
              image1ClassName={styles.exhibitionsImage1}
            />
          </Suspense>
        </div>
        <Suspense fallback={<Loader />}>
          <DynamicHomeCarousel />
        </Suspense>
      </main>
    </>
  );
}

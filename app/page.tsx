import styles from "./page.module.css";
import Head from 'next/head';
import Hero from "@/components/layout/hero/Hero";
import EventsSection from "./components/events-section/Events-Section";
import homeImage from "@/public/images/header-home.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alleyway - Plan Any Event</title>
        <link rel="preload" href={homeImage.src} as="image" />
        <meta name="description" content="Alleyway - Plan Any Event With Us " />
      </Head>
        <Hero 
           image={homeImage} 
          title="The Events Management Company" 
          paragraph="We provide top-notch services to meet your needs." 
          titleClassName={styles.homeTitle}
          paragraphClassName={styles.homeParagraph} />
      <main>
        <EventsSection />
        {/* <Suspense fallback={<Loader />}>
          <DynamicHomeCarousel />
        </Suspense> */}
      </main>
    </>
  );
}

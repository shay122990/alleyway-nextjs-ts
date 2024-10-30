import styles from "./page.module.css";
import Head from 'next/head';
import Hero from "@/components/layout/hero/Hero";
import homeHero from "@/public/images/homeHero.webp";
import EventsSection from "@/app/components/events-section/Events-Section";
import Banner from "@/app/components/banner/Banner";
import MasonryGrid from "@/app/components/masonry-grid/MasonryGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alleyway - Event & Project Management Company in Dubai</title>
        <meta name="description" content="Alleyway - Plan Any Event & Project With Us" />
        <link rel="preload" href={homeHero.src} as="image" />
      </Head>
      <Hero 
        width={1920}
        height={1440}
        image={homeHero}
        title="The Events Management Company" 
        paragraph="We provide top-notch services to meet your needs." 
        titleClassName={styles.homeTitle}
        paragraphClassName={styles.homeParagraph} 
      />
      <main className={styles.main}>
        <EventsSection />
        <Banner />
        <MasonryGrid />
      </main>
    </>
  );
}

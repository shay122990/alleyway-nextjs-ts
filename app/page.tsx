import styles from "./page.module.css";
import Head from 'next/head';
import Hero from "@/components/layout/hero/Hero";
import homeHero from "@/public/images/homeHero.webp";
import EventsSection from "./components/events-section/Events-Section";
import Banner from "./components/banner/Banner";
import MasonryGrid from "./components/masonry-grid/MasonryGrid";


export default function Home() {
  return (
    <>
      <Head>
        <title>Event & Project Management Company in Dubai | Alleyway</title>
        <meta name="description" content="Alleyway is a leading event and project management company in Dubai, offering comprehensive services for all types of events." />
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

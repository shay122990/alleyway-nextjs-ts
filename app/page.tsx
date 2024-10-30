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
        <meta name="keywords" content="event management, project management, corporate events, wedding planning, event planning, Dubai events, private events, exhibition planning, audio-visual services" />
        <link rel="preload" href={homeHero.src} as="image" />
        <meta property="og:title" content="Alleyway - Premier Events Management Company in Dubai" />
        <meta property="og:description" content="Alleyway is a top events management company in Dubai, specializing in event planning and project management." />
        <meta property="og:image" content="https://alleywaydxb.com/images/homeHero.webp" />  
        <meta property="og:url" content="https://alleywaydxb.com" />
        <meta property="og:type" content="website" />
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

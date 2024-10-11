import styles from "./page.module.css";
import Head from 'next/head';
import Hero from "@/components/layout/hero/Hero";
import dynamic from 'next/dynamic';
import homeHero from "@/public/images/homeHero.webp";

const EventsSection = dynamic(() => import("./components/events-section/Events-Section"), { ssr: false });
const Banner = dynamic(() => import("./components/banner/Banner"), { ssr: false });
const MasonryGrid = dynamic(() => import("./components/masonry-grid/MasonryGrid"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Alleyway - Plan Any Event</title>
        <meta name="description" content="Alleyway - Plan Any Event With Us" />
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

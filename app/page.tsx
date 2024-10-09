import styles from "./page.module.css";
import Head from 'next/head';
import Hero from "@/components/layout/hero/Hero";
import EventsSection from "./components/events-section/Events-Section";
import Banner from "./components/banner/Banner";
import MasonryGrid from "./components/masonry-grid/MasonryGrid";

export default function Home() {
  const homeVideo = "/videos/homeVideo.mp4"; 

  return (
    <>
      <Head>
        <title>Alleyway - Plan Any Event</title>
        <meta name="description" content="Alleyway - Plan Any Event With Us " />
      </Head>
        <Hero 
          width={3840}
          height={2160}
          video={homeVideo}  
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

import styles from "../page.module.css"
import Hero from "@/components/layout/hero/Hero";
import Head from 'next/head';
import aboutImage from "@/public/images/about-image.jpg"

export default function Project() {
  return (
    <>
      <Head>
        <title>Projects - Alleyway</title>
        <meta name="description" content="The projects we've successfully completed"/>
        <meta name="keywords" content="our satisfied clients list and projects we've completed " />

        {/* Additional metadata and tags */}
      </Head>
      <Hero image={aboutImage}/>
      <main className={styles.main}>
        Project Page Content 
      </main>
    </>
  );
}

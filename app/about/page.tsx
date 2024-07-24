import styles from "../page.module.css"
import Hero from "@/components/layout/hero/Hero";
import Head from 'next/head';
import aboutImage from "@/public/images/about-image.jpg"

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Alleyway</title>
        <meta name="description" content="Learn more about our company's history and mission."/>
        <meta name="keywords" content="company history, mission statement, about us" />

        {/* Additional metadata and tags */}
      </Head>
      <Hero image={aboutImage}/>
      <main className={styles.main}>
        About Page Content 
      </main>
    </>
  );
}

import styles from "./Projects.module.css";
import Head from 'next/head';
import aboutImage from "@/public/images/about-image.jpg";
import Hero from "@/components/layout/hero/Hero";


export default function Project() {
  return (
    <>
      <Head>
        <title>Projects - Alleyway</title>
        <link rel="preload" href={aboutImage.src} as="image" />
        <meta name="description" content="The projects we've successfully completed" />
      </Head>
        <Hero 
          image={aboutImage} 
          title="Always up to the challenge!" 
          paragraph="The Projects we've successfully completed"
          titleClassName={styles.projectsTitle}
          paragraphClassName={styles.projectsParagraph}
        />
      <main className={styles.main}>
        Project Page Content 
      </main>
    </>
  );
}

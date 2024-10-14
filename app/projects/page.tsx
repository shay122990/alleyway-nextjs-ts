import styles from "./Projects.module.css";
import Head from 'next/head';
import aboutImage from "@/public/images/about-image.webp";
import Hero from "@/components/layout/hero/Hero";
import ProjectSections from "./components/project-sections/ProjectSections";


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Alleyway</title>
        <meta name="description" content="The projects we've successfully completed" />
      </Head>
      <Hero 
        width={1920}
        height={1536}
        image={aboutImage} 
        title="Always up to the challenge!" 
        paragraph="The Projects we've successfully completed"
        titleClassName={styles.projectsTitle}
        paragraphClassName={styles.projectsParagraph}
      />
      <main className={styles.main}>
       <ProjectSections/>
      </main>
    </>
  );
}

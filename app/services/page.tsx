import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import projectsImage from "@/public/images/projects-image.jpg";


export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services</title>
        <link rel="stylesheet" href={projectsImage.src} as="image" />
        <meta name="description" content="Comprehensive event management services." />
      </Head>
        <Hero 
          image={projectsImage} 
          title="What We Do" 
          paragraph="At Alleyway, we offer a comprehensive range of event management services designed to make your event memorable and stress-free." 
          titleClassName={styles.servicesTitle}
          paragraphClassName={styles.servicesParagraph}
        />
      <main>
        Services
      </main>
    </>
  );
}

import styles from "./Services.module.css";
import dynamic from 'next/dynamic';
import Head from "next/head";
import projectsImage from "@/public/images/projects-image.jpg";

const DynamicHero = dynamic(() => import('@/components/layout/hero/Hero'), {
  ssr: false,
});

export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services</title>
        <meta name="contact-alleyway" content="Look what you made me do" />
      </Head>
      <DynamicHero image={projectsImage} title="What We Do" paragraph="At Alleyway, we offer a comprehensive range of event management services designed to make your event memorable and stress-free. Our team is dedicated to delivering personalized and innovative solutions tailored to your needs. Let us bring your vision to life with meticulous planning and flawless execution." 
        titleClassName={styles.servicesTitle}
        paragraphClassName={styles.servicesParagraph}/>
      <main>
        Services
      </main>
    </>
  );
}

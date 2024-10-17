import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import projectsImage from "@/public/images/projects-image.jpg";

export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services</title>
        <meta name="description" content="Comprehensive event management services in Dubai" />
      </Head>
      <Hero 
        width={1920}
        height={1080}
        image={projectsImage} 
        title="What We Do" 
        paragraph="At Alleyway, we offer a comprehensive range of event management services designed to make your event memorable and stress-free." 
        titleClassName={styles.servicesTitle}
        paragraphClassName={styles.servicesParagraph}
      />
      <main className={styles.main}>
        <section className={styles.serviceSection} id="exhibitions&tradeshows">
          <h2>Exhibitions & Trade Shows</h2>
          <ExhibitionSection />
        </section>
        <section className={styles.serviceSection} id="private-events">
          <h2>Private Events</h2>
          {/* <PrivateEvents /> */}
        </section>
        <section className={styles.serviceSection} id="creative-services">
          <h2>Creative Services</h2>
        </section>
        <section className={styles.serviceSection} id="audio&visual">
          <h2>Audio Visual</h2>
        </section>
        <section className={styles.serviceSection} id="other-services">
          <h2>Other Services</h2>
        </section>
      </main>
    </>
  );
}

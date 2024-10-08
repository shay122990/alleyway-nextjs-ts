import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import ImageInfoBox from "./components/image-info-box/ImageInfoBox";
import projectsImage from "@/public/images/projects-image.jpg";


export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services</title>
        <meta name="description" content="Comprehensive event management services in Dubai" />
      </Head>
      <Hero 
        image={projectsImage} 
        title="What We Do" 
        paragraph="At Alleyway, we offer a comprehensive range of event management services designed to make your event memorable and stress-free." 
        titleClassName={styles.servicesTitle}
        paragraphClassName={styles.servicesParagraph}
      />
      <main className={styles.main}>
          <div className={styles.serviceSection} id="exhibitions&tradeshows">
            <ImageInfoBox/>
          </div>
          <div className={styles.serviceSection} id="private-events">
            <h2>Private Events</h2>
          </div>
          <div className={styles.serviceSection} id="creative-services">
            <h2>Creative Services</h2>
          </div>
          <div className={styles.serviceSection} id="audio&visual">
            <h2>Audio & Visual</h2>
          </div>
          <div className={styles.serviceSection} id="other-services">
            <h2>Other Services</h2>
          </div>
      </main>
    </>
  );
}

import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import PrivateEvents from "./components/private-events/Private-Events";
import CreativeServices from "./components/creative-services/Creative-Secvices";

import projectsImage from "@/public/images/projects-image.jpg";
import { servicesPageData } from "@/data/ServicesPageData";
import AudioVisual from "./audio-visual/Audio-Visual";

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
          <h2>{servicesPageData.exhibitions.title}</h2>
          {/* <ExhibitionSection exhibitionData={servicesPageData.exhibitions.services} /> */}
        </section>
        <section className={styles.serviceSection} id="private-events">
          <h2>{servicesPageData.privateEvents.title}</h2>
          {/* <PrivateEvents privateEventData={servicesPageData.privateEvents.images} /> */}
        </section>
        <section className={styles.serviceSection} id="creative-services">
         <h2>{servicesPageData.creativeServices.title}</h2>
          {/* <CreativeServices creativeServicesData={servicesPageData.creativeServices.services} /> */}
        </section>
        <section className={styles.serviceSection} id="audio-visual">
          <h2>{servicesPageData.audioVisual.title}</h2>
          {/* <AudioVisual audioVisualData={servicesPageData.audioVisual.images}/> */}
        </section>
        <section className={styles.serviceSection} id="other-services">
          <h2>{servicesPageData.otherServices.title}</h2>
        </section>
      </main>
    </>
  );
}

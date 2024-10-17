import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import ExhibitionSection from "./exhibition-section/ExhibitionSection";
import PrivateEvents from "./private-events/Private-Events";
import CreativeServices from "./creative-services/Creative-Secvices";
import AudioVisual from "./audio-visual/Audio-Visual";

import projectsImage from "@/public/images/projects-image.jpg";
import { servicesPageData } from "@/data/ServicesPageData";
import OtherServices from "./other-services/Other-Services";

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
          {/* <ExhibitionSection title={servicesPageData.exhibitions.title} exhibitionData={servicesPageData.exhibitions.services} /> */}
        </section>
        <section className={styles.serviceSection} id="private-events">
          {/* <PrivateEvents title={servicesPageData.privateEvents.title} privateEventData={servicesPageData.privateEvents.images} /> */}
        </section>
        <section className={styles.serviceSection} id="creative-services">
          {/* <CreativeServices title={servicesPageData.creativeServices.title} creativeServicesData={servicesPageData.creativeServices.services} /> */}
        </section>
        <section className={styles.serviceSection} id="audio-visual">
          {/* <AudioVisual title={servicesPageData.audioVisual.title}  audioVisualData={servicesPageData.audioVisual.images}/> */}
        </section>
        <section className={styles.serviceSection} id="other-services">
          {/* <OtherServices title={servicesPageData.otherServices.title}/> */}
        </section>
      </main>
    </>
  );
}

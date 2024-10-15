import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import projectsImage from "@/public/images/projects-image.jpg";
import { servicesPageData } from "@/data/ServicesPageData";


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
        <div className={styles.serviceSection} id="exhibitions&tradeshows">
          <h2>{servicesPageData.exhibitions.title}</h2>
          <ExhibitionSection exhibitionData={servicesPageData.exhibitions?.services || []} />
        </div>
        <div className={styles.serviceSection} id="private-events">
          <h2>{servicesPageData.privateEvents.title}</h2>
          {/* <PrivateEvents /> */}
        </div>
        <div className={styles.serviceSection} id="creative-services">
          <h2>{servicesPageData.creativeServices.title}</h2>
        </div>
        <div className={styles.serviceSection} id="audio&visual">
          <h2>{servicesPageData.audioVisual.title}</h2>
        </div>
        <div className={styles.serviceSection} id="other-services">
          <h2>Other Services</h2>
        </div>
      </main>
    </>
  );
}

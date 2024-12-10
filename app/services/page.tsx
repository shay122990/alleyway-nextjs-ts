import styles from "./Services.module.css"
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import AboutUs from "./about-us/About-Us";
import ExhibitionSection from "./exhibition-section/ExhibitionSection";
import PrivateEvents from "./private-events/Private-Events";
import CreativeServices from "./creative-services/Creative-Secvices";
import AudioVisual from "./audio-visual/Audio-Visual";
import OtherServices from "./other-services/Other-Services";
import projectsImage from "@/public/images/projects-image.jpg";
import { servicesPageData } from "@/data/ServicesPageData";

export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services | Alleyway</title>
        <meta name="description" content="From corporate events to special celebrations or business restructuring, we offer an array of services to make your life stress free." />
        <link rel="preload" href={projectsImage.src} as="image" />
        <meta property="og:title" content="Our Services - Alleyway" />
        <meta property="og:description" content="Explore our comprehensive range of event & management services designed to make your event memorable." />
        <meta property="og:image" content="https://alleywaydxb.com/images/projects-image.jpg" />
        <meta property="og:url" content="https://alleywaydxb.com/services" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="event management, corporate events, wedding planning, private events, audio-visual services, Dubai events, creative services, exhibition planning, project management" />
      </Head>
      <Hero 
        image={projectsImage} 
        title="What We Do" 
        paragraph="At Alleyway, we offer a comprehensive range of event management services designed to make your event memorable." 
        titleClassName={styles.servicesTitle}
        paragraphClassName={styles.servicesParagraph}
      />
      <main className={styles.main}>
        <section className={styles.serviceSection}>
          <AboutUs aboutUsData={servicesPageData.aboutUs}/>
        </section>
        <section className={styles.serviceSection}>
          <ExhibitionSection title={servicesPageData.exhibitions.title} exhibitionData={servicesPageData.exhibitions.services} />
        </section>
        <section className={styles.serviceSection}>
          <PrivateEvents title={servicesPageData.privateEvents.title} privateEventData={servicesPageData.privateEvents.images} />
        </section>
        <section className={styles.serviceSection}>
          <CreativeServices title={servicesPageData.creativeServices.title} creativeServicesData={servicesPageData.creativeServices.services} />
        </section>
        <section className={styles.serviceSection}>
          <AudioVisual title={servicesPageData.audioVisual.title}  audioVisualData={servicesPageData.audioVisual.images}/>
        </section>
        <section className={styles.serviceSection}>
          <OtherServices title={servicesPageData.otherServices.title} services={servicesPageData.otherServices.services} />
        </section>
      </main>
    </>
  );
}

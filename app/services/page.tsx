import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import ExhibitionSection from "./components/exhibition-section/ExhibitionSection";
import projectsImage from "@/public/images/projects-image.jpg";
import serviceImage1 from '@/public/images/projects-image1.jpg';
import PrivateEvents from "./components/private-events/Private-Events";

export default function Services() {
  const exhibitionData = [
    {
      title: "Booth Design & Set up",
      description: "We create eye-catching, custom booth designs that make your brand stand out. From concept to setup, we ensure your booth captures attention and delivers a memorable experience, driving engagement and leaving a lasting impact.",
      imageSrc: serviceImage1,
      href: "/projects/#exhibitions&tradeshows"
    },
    {
      title: "Logistics Management",
      description: "We manage all logistical aspects of your event, ensuring smooth operations and timely deliveries.",
      imageSrc: serviceImage1,
      href: "/projects/#exhibitions&tradeshows"
    },
    {
      title: "On-site Coordination",
      description: "Our experienced team ensures everything runs smoothly on the event day, from setup to teardown.",
      imageSrc: serviceImage1,
      href: "/projects/#exhibitions&tradeshows"
    }
  ];

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
          <ExhibitionSection exhibitionData={exhibitionData} />
        </div>
        <div className={styles.serviceSection} id="private-events">
          {/* <PrivateEvents/> */}
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

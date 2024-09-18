import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import projectsImage from "@/public/images/projects-image.jpg";
import EventsSection from "@/app/services/components/events-section/Events-Section";

export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services</title>
        <meta name="contact-alleyway" content="Look what you made me do" />
      </Head>
      <Hero image={projectsImage} />
      <main>
        <div className={styles.eventsContainer}>
          <EventsSection
            title="Exhibitions & Trade Shows"
            imageSrc1={projectsImage}
            links={[
              { name: 'View Details', href: '/exhibitions#details' },
              { name: 'Book Now', href: '/exhibitions#book' }
            ]}
            className={styles.exhibitionsSection}
            image1ClassName={styles.exhibitionsImage1}
          />

          <EventsSection
            title="Creative Services"
            imageSrc1={projectsImage}
            imageSrc2={projectsImage}
            links={[
              { name: 'Our Portfolio', href: '/creative-services#portfolio' },
              { name: 'Get in Touch', href: '/creative-services#contact' }
            ]}
            className={styles.creativeServicesSection}
            image1ClassName={styles.creativeImage1}
            image2ClassName={styles.creativeImage2}
          />

          <EventsSection
            title="Private Events"
            imageSrc1={projectsImage}
            imageSrc2={projectsImage}
            links={[
              { name: 'View Details', href: '/private-events#details' },
              { name: 'Contact Us', href: '/private-events#contact' }
            ]}
            className={styles.privateEventsSection}
            image1ClassName={styles.privateImage1}
            image2ClassName={styles.privateImage2}
          />

          <EventsSection
            title="Audio & Visual"
            imageSrc1={projectsImage}
            imageSrc2={projectsImage}
            links={[
              { name: 'Explore', href: '/audio-visual#explore' },
              { name: 'Services', href: '/audio-visual#services' }
            ]}
            className={styles.audioVisualSection}
            image1ClassName={styles.audioVisualImage1}
            image2ClassName={styles.audioVisualImage2}
          />
        </div>
      </main>
    </>
  );
}

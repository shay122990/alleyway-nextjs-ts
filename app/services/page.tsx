import styles from "./Services.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import projectsImage from "@/public/images/projects-image.jpg"
import EventsSection from "@/components/layout/events-section/Events-Section";


export default function Services() {
  return (
    <>
    <Head>
      <title>Alleyway Services</title>
      <meta name="contact-alleyway" content="Look what you made me do" />
      {/* Additional metadata and tags */}
    </Head>
    <Hero image={projectsImage}/>
    <main className={styles.main}>
    <div className={styles.eventsContainer}>
      <EventsSection
        title="Exhibitions & Trade Shows"
        imageSrc1="/images/exhibitions1.jpg"
        links={[
          { name: 'View Details', href: '/exhibitions#details' },
          { name: 'Book Now', href: '/exhibitions#book' }
        ]}
        className={styles.exhibitionsSection}
      />

      <EventsSection
        title="Creative Services"
        imageSrc1="/images/creative1.jpg"
        imageSrc2="/images/creative2.jpg"
        links={[
          { name: 'Our Portfolio', href: '/creative-services#portfolio' },
          { name: 'Get in Touch', href: '/creative-services#contact' }
        ]}
        className={styles.creativeServicesSection}
      />

      <EventsSection
        title="Private Events"
        imageSrc1="/images/private-events1.jpg"
        imageSrc2="/images/private-events2.jpg"
        links={[
          { name: 'View Details', href: '/private-events#details' },
          { name: 'Contact Us', href: '/private-events#contact' }
        ]}
       className={styles.privateEventsSection}
      />

      <EventsSection
        title="Audio & Visual"
        imageSrc1="/images/audio-visual1.jpg"
        imageSrc2="/images/audio-visual2.jpg"
        links={[
          { name: 'Explore', href: '/audio-visual#explore' },
          { name: 'Services', href: '/audio-visual#services' }
        ]}
        className={styles.audioVisualSection}
      />
    </div>
    </main>
  </>
  )
}

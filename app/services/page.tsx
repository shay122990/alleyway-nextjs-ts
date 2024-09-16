import styles from "../page.module.css";
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
    <div>
      <EventsSection
        title="Exhibitions & Trade Shows"
        imageSrc1="/images/exhibitions1.jpg"
        imageSrc2="/images/exhibitions2.jpg"
        links={[
          { name: 'View Details', href: '/exhibitions#details' },
          { name: 'Book Now', href: '/exhibitions#book' }
        ]}
        backgroundColor="#1c2237"
        fontColor="#f4f4f4"
        fontStyle={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
      />

      <EventsSection
        title="Private Events"
        imageSrc1="/images/private-events1.jpg"
        imageSrc2="/images/private-events2.jpg"
        links={[
          { name: 'View Details', href: '/private-events#details' },
          { name: 'Contact Us', href: '/private-events#contact' }
        ]}
        backgroundColor="#e63946"
        fontColor="#ffffff"
        fontStyle={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
      />

      <EventsSection
        title="Creative Services"
        imageSrc1="/images/creative1.jpg"
        imageSrc2="/images/creative2.jpg"
        links={[
          { name: 'Our Portfolio', href: '/creative-services#portfolio' },
          { name: 'Get in Touch', href: '/creative-services#contact' }
        ]}
        backgroundColor="#06d6a0"
        fontColor="#000000"
        fontStyle={{ fontFamily: 'Courier New, monospace' }}
      />

      <EventsSection
        title="Audio & Visual"
        imageSrc1="/images/audio-visual1.jpg"
        imageSrc2="/images/audio-visual2.jpg"
        links={[
          { name: 'Explore', href: '/audio-visual#explore' },
          { name: 'Services', href: '/audio-visual#services' }
        ]}
        backgroundColor="#2a9d8f"
        fontColor="#ffffff"
        fontStyle={{ fontFamily: 'Helvetica, sans-serif', fontWeight: 'lighter' }}
      />
    </div>
    </main>
  </>
  )
}

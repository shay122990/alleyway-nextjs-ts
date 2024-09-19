import styles from "./page.module.css"
import Hero from "@/components/layout/hero/Hero";
import Head from 'next/head';
import type { StaticImageData } from 'next/image';

import  homeImage from  "@/public/images/header-home.jpg"
import projectsImage from "@/public/images/projects-image.jpg";

import EventsSection from "./components/events-section/Events-Section";
import HomeCarousel from "@/components/layout/home-carousel/Home-Carousel";

type HeroProps = {
  image: StaticImageData;
};
export default function Home() {
  return (
    <>
      <Head>
      <meta name="description" content="Alleyway - Plan Any Event With Us " />
      </Head>
      <Hero image={homeImage}  title="The Events Management Company" 
        paragraph="We provide top-notch services to meet your needs." 
        titleClassName={styles.homeTitle}
        paragraphClassName={styles.homeParagraph}/>
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
        <HomeCarousel/>

      </main>
    </>
  );
}

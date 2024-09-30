"use client"
import styles from './Events-Section.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import projectImage1 from '@/public/images/projects-image.jpg';
import projectImage2 from '@/public/images/projects-image.jpg';
import { IoIosArrowDown } from 'react-icons/io';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 0 }, 
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6 } },
};

const EventsSection = () => {
  const [refExhibition, inViewExhibition] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refPrivate, inViewPrivate] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refCreative, inViewCreative] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refAudio, inViewAudio] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className={styles.eventsContainer}>
      {/* Exhibitions Section */}
      <motion.section
        ref={refExhibition}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: 100 }} 
        animate={inViewExhibition ? sectionVariants.visible : sectionVariants.exit}
        className={`${styles.eventSection} ${styles.exhibitionSection}`}
      >
        <h2>Exhibitions & Trade Shows</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.exhibition}`}>
          <div className={styles.imagesContainer}>
            <div className={styles.exhibitionImage}>
              <Image src={projectImage1} alt="Exhibition" />
            </div>
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            <li><a href="/services#exhibitions">Booth Design & Set Up</a></li>
            <li><a href="/services#exhibitions">Logistics Management</a></li>
            <li><a href="/services#exhibitions">On-site Coordination</a></li>
          </ul>
        </div>
      </motion.section>

      {/* Private Events Section */}
      <motion.section
        ref={refPrivate}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: -100 }} 
        animate={inViewPrivate ? sectionVariants.visible : sectionVariants.exit}
        className={`${styles.eventSection} ${styles.privateSection}`}
      >
        <h2>Private Events</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.private}`}>
          <div className={styles.imagesContainer}>
            <div className={styles.privateEventImage}>
              <Image src={projectImage1} alt="Private Event 1" />
            </div>
            <div className={styles.privateEventImage}>
              <Image src={projectImage2} alt="Private Event 2" />
            </div>
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            <li><a href="/services/private-events">Anniversary</a></li>
            <li><a href="/services#private-events">Birthday Parties</a></li>
            <li><a href="/services#private-events">Weddings</a></li>
            <li><a href="/services#private-events">Social Events</a></li>
          </ul>
        </div>
      </motion.section>

      {/* Creative Services Section */}
      <motion.section
        ref={refCreative}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: 100 }} 
        animate={inViewCreative ? sectionVariants.visible : sectionVariants.exit}
        className={`${styles.eventSection} ${styles.creativeSection}`}
      >
        <h2>Creative Services</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.creative}`}>
          <div className={styles.imagesContainer}>
            <div className={styles.creativeServiceImage}>
              <Image src={projectImage1} alt="Creative Service 1" />
            </div>
            <div className={styles.creativeServiceImage}>
              <Image src={projectImage2} alt="Creative Service 2" />
            </div>
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            <li><a href="/services#creative-services">Event Concept & Design</a></li>
            <li><a href="/services#creative-services">Thematic Decor</a></li>
            <li><a href="/services#creative-services">Entertainment Planning</a></li>
          </ul>
        </div>
      </motion.section>

      {/* Audio Visual Section */}
      <motion.section
        ref={refAudio}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: -100 }} 
        animate={inViewAudio ? sectionVariants.visible : sectionVariants.exit}
        className={`${styles.eventSection} ${styles.audioSection}`}
      >
        <h2>Audio Visual</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.audio}`}>
          <div className={styles.imagesContainer}>
            <div className={styles.audioVisualImage}>
              <Image src={projectImage1} alt="Audio Visual" />
            </div>
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            <li><a href="/services#audio-visual">Sound Systems</a></li>
            <li><a href="/services#audio-visual">Lighting Design</a></li>
            <li><a href="/services#audio-visual">LED Screens</a></li>
            <li><a href="/services#audio-visual">Technical Support</a></li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default EventsSection;

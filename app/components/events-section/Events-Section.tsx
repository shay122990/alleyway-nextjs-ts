"use client";
import styles from './Events-Section.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageBox from '@/components/common/image-box/Image-Box';
import Links from '@/components/common/links/Links';
import { IoIosArrowDown } from 'react-icons/io';
import projectImage1 from '@/public/images/projects-image1.jpg';
import projectImage2 from '@/public/images/projects-image2.jpg';
import projectImage3 from '@/public/images/projects-image3.jpg';
import projectImage4 from '@/public/images/projects-image4.jpg';
import projectImage5 from '@/public/images/projects-image5.jpg';
import projectImage6 from '@/public/images/projects-image6.jpg';
import { 
  exhibitionsLinks, 
  privateEventsLinks, 
  creativeServicesLinks, 
  audioVisualLinks 
} from '@/data/EventLinksData'; 

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
          <div className={styles.exhibitionImages}>
            <ImageBox imageSrc={projectImage1} />
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {exhibitionsLinks.map((link, index) => (
              <li key={index}>
                <Links href={link.href}>{link.name}</Links> 
              </li>
            ))}
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
          <div className={styles.privateEventImages}>
            <ImageBox imageSrc={projectImage2} />
            <ImageBox imageSrc={projectImage3} />
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {privateEventsLinks.map((link, index) => (
              <li key={index}>
                <Links href={link.href}>{link.name}</Links> 
              </li>
            ))}
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
          <div className={styles.creativeServiceImages}>
            <ImageBox imageSrc={projectImage4} />
            <ImageBox imageSrc={projectImage5} />
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {creativeServicesLinks.map((link, index) => (
              <li key={index}>
                <Links href={link.href}>{link.name}</Links> 
              </li>
            ))}
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
          <div className={styles.audioVisualImages}>
            <ImageBox imageSrc={projectImage6} />
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {audioVisualLinks.map((link, index) => (
              <li key={index}>
                <Links href={link.href}>{link.name}</Links>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default EventsSection;

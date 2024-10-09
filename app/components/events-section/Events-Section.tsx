"use client";
import styles from './Events-Section.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageBox from '@/components/common/image-box/Image-Box';
import Links from '@/components/common/links/Links';
import { IoIosArrowDown } from 'react-icons/io';
import { homePageData } from '@/data/HomePageData'; 

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
        <h2>{homePageData.exhibitions.title}</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.exhibition}`}>
          <div className={styles.exhibitionImages}>
            {homePageData.exhibitions.images.map((image, index) => (
              <ImageBox key={index} imageSrc={image.src} width={image.width} height={image.height} />
            ))}
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {homePageData.exhibitions.links.map((link, index) => (
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
        <h2>{homePageData.privateEvents.title}</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.private}`}>
          <div className={styles.privateEventImages}>
            {homePageData.privateEvents.images.map((image, index) => (
              <ImageBox key={index} imageSrc={image.src} width={image.width} height={image.height} />
            ))}
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {homePageData.privateEvents.links.map((link, index) => (
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
        <h2>{homePageData.creativeServices.title}</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.creative}`}>
          <div className={styles.creativeServiceImages}>
            {homePageData.creativeServices.images.map((image, index) => (
              <ImageBox key={index} imageSrc={image.src} width={image.width} height={image.height} />
            ))}
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {homePageData.creativeServices.links.map((link, index) => (
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
        <h2>{homePageData.audioVisual.title}</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles.audio}`}>
          <div className={styles.audioVisualImages}>
            {homePageData.audioVisual.images.map((image, index) => (
              <ImageBox key={index} imageSrc={image.src} width={image.width} height={image.height} />
            ))}
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {homePageData.audioVisual.links.map((link, index) => (
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

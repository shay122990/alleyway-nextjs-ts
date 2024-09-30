"use client"
import styles from './EventType.module.css'; 
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface EventTypeProps {
  title: string;
  images: (string | StaticImageData)[];
  links: { href: string; text: string }[];
  inView: boolean;
}

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 0 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.6 } },
};

const EventType = React.forwardRef<HTMLDivElement, EventTypeProps>(
  ({ title, images, links, inView }, ref) => {
    return (
      <motion.section
        ref={ref}
        variants={sectionVariants}
        initial={{ ...sectionVariants.hidden, x: title === "Exhibitions & Trade Shows" ? 100 : -100 }}
        animate={inView ? sectionVariants.visible : sectionVariants.exit}
        className={`${styles.eventSection} ${styles[title.replace(/\s+/g, '').toLowerCase() + 'Section']}`}
      >
        <h2>{title}</h2>
        <div className={`${styles.imageAndLinksContainer} ${styles[title.replace(/\s+/g, '').toLowerCase()]}`}>
          <div className={styles.imagesContainer}>
            {images.map((src, index) => (
              <div key={index} className={styles[title.replace(/\s+/g, '').toLowerCase() + 'Image']}>
                <Image src={src} alt={`${title} Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <ul className={styles.linksContainer}>
            <IoIosArrowDown className={styles.arrowIconDown} />
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    );
  }
);

EventType.displayName = 'EventType'; 

export default EventType;

"use client";
import styles from './Hero.module.css';
import { motion } from "framer-motion";
import { StaticImageData } from 'next/image';
import Logo from '../../logo/Logo';

interface HeroProps {
  image: string | StaticImageData; 
  title: string;
  paragraph: string;
  titleClassName?: string; 
  paragraphClassName?: string; 
}

const Hero = ({ image, title, paragraph, titleClassName, paragraphClassName }: HeroProps) => {
  const backgroundImage = typeof image === 'string' ? image : image.src;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    > 
      <div className={styles.heroContent}>
        <Logo />
        <div className={styles.heroInfo}>
          <h1 className={`${styles.heroTitle} ${titleClassName || ''}`}>{title}</h1>
          <p className={`${styles.heroParagraph} ${paragraphClassName || ''}`}>{paragraph}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

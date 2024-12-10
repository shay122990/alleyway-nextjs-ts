"use client";
import styles from './Hero.module.css';
import { motion } from "framer-motion";
import Image, { StaticImageData } from 'next/image';

interface HeroProps {
  image?: string | StaticImageData | undefined; 
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
  width?: number; 
  height?: number; 
  priority?: boolean
}

const Hero = ({ image, title, paragraph, titleClassName, paragraphClassName, width, height }: HeroProps) => {
  const backgroundImage = typeof image === 'string' ? image : image?.src;

  return (
    <motion.div className={styles.hero}>
      {image && backgroundImage && (
        <Image
          width={width || 1920} 
          height={height || 1080}  
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
          src={image}
          alt={title}
          className={styles.backgroundImage}
      />
      )}
      <div className={styles.heroContent}>
        <div className={styles.heroInfo}>
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "tween", duration: 0.7 }}  
            className={`${styles.heroTitle} ${titleClassName}`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ x: "-100vw", opacity: 0 }}  
            animate={{ x: 0, opacity: 1 }} 
            transition={{ type: "tween", duration: 0.8, delay: 0.3 }}  
            className={`${styles.heroParagraph} ${paragraphClassName}`}
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

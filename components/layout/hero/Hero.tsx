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
}

const Hero = ({ image, title, paragraph, titleClassName, paragraphClassName, width, height }: HeroProps) => {
  const backgroundImage = typeof image === 'string' ? image : image?.src;

  return (
    <motion.div className={styles.hero}>
      {image && backgroundImage && (
        <Image 
          src={backgroundImage} 
          alt="Hero Image" 
          style={{ objectFit: 'cover' }}  
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
          priority
          width={width} 
          height={height}
          blurDataURL="data:image/webp;base64,..."
          quality={60}  
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

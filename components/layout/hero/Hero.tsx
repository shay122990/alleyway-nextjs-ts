"use client";
import styles from './Hero.module.css';
import { motion } from "framer-motion";
import { StaticImageData } from 'next/image';
import Logo from "@/components/logo/Logo";

interface HeroProps {
  video?: string; 
  image?: string | StaticImageData; 
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
}

const Hero = ({ video, image, title, paragraph, titleClassName, paragraphClassName }: HeroProps) => {
  const backgroundImage = typeof image === 'string' ? image : image?.src;

  return (
    <motion.div 
      className={styles.hero}
    > 
      {video && (
        <video 
          className={styles.backgroundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {image && !video && (
        <div 
          className={styles.backgroundImage} 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className={styles.heroContent}>
          <Logo />
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

"use client";
import styles from './Hero.module.css';
import Loader from '@/components/common/loader/Loader';
import { motion } from "framer-motion";
import { StaticImageData } from 'next/image';
import React, { Suspense } from 'react';


const LazyLogo = React.lazy(() => import('../../logo/Logo'));

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
      style={{ backgroundImage: `url(${backgroundImage || '/path/to/fallback.jpg'})` }}
    > 
      <div className={styles.heroContent}>
        <Suspense fallback={<Loader  />}>
          <LazyLogo />
        </Suspense>
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

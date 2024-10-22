"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from "./Banner.module.css";
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <Link href="/services#other-services" scroll={false} className={styles.bannerContent}>
        <p>Our Services Are Limitless</p>
        <motion.div
          className={styles.bannerSideArrow}
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </motion.div>
      </Link>
    </div>
  );
};

export default Banner;

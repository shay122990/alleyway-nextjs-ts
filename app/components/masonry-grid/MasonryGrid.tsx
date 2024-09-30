"use client";
import styles from './MasonryGrid.module.css';

const MasonryGrid = () => {
  return (
    <div className={styles.masonryContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleText}>The projects we've done</h2>
      </div>
      <div className={styles.grid}>
        <img
          src="/images/header-home.jpg"
          alt="Project image 1"
          className={styles.image1} 
        />
        <img
          src="/images/header-home.jpg"
          alt="Project image 2"
          className={styles.image2} 
        />
        <img
          src="/images/header-home.jpg"
          alt="Project image 3"
          className={styles.image3} 
        />
        <img
          src="/images/header-home.jpg"
          alt="Project image 4"
          className={styles.image4} 
        />
        <img
          src="/images/header-home.jpg"
          alt="Project image 5"
          className={styles.image5} 
        />
        <img
          src="/images/header-home.jpg"
          alt="Project image 6"
          className={styles.image6} 
        />
      </div>
    </div>
  );
};

export default MasonryGrid;

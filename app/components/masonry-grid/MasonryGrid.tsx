"use client"
import Image from 'next/image';
import styles from './MasonryGrid.module.css';

// Dummy image URLs
const images = [
  '/images/header-home.jpg',
  '/images/header-home.jpg',
  '/images/header-home.jpg',
  '/images/header-home.jpg',
  '/images/header-home.jpg',
  '/images/header-home.jpg',
];

const MasonryGrid = () => {
  return (
    <div className={styles.masonryContainer}>
      {/* Centered title */}
      <div className={styles.titleContainer}>
        <h2 className={styles.titleText}>The projects we've done</h2>
      </div>

      {/* Masonry Grid */}
      <div className={styles.grid}>
        {images.map((src, index) => (

              <Image//+
                src={src}//+
                alt={`Project image ${index + 1}`}
              />
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;

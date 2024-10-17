// Carousel.tsx
"use client";
import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { StaticImageData } from "next/image"; 
import ImageBox from "@/components/common/image-box/Image-Box";

interface CarouselProps {
  images: { src: StaticImageData }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevButton} onClick={prevImage}>
        &#10094;
      </button>
      <ImageBox
        className={styles.carouselImage}
        imageSrc={images[currentIndex].src} 
        altText={`Image ${currentIndex + 1}`}
      />
      <button className={styles.nextButton} onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;

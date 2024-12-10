"use client";
import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { StaticImageData } from "next/image"; 
import ImageBox from "@/components/common/image-box/Image-Box";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface CarouselProps {
  images: { src: StaticImageData }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevButton} onClick={prevImage} aria-label="Previous image">
        <BsChevronCompactLeft />
      </button>
      <ImageBox
        className={styles.carouselImage}
        imageSrc={images[currentIndex].src}
        altText={`Image ${currentIndex + 1}`}
      />
      <button className={styles.nextButton} onClick={nextImage} aria-label="Next image">
        <BsChevronCompactRight />
      </button>
    </div>
  );
};

export default Carousel;

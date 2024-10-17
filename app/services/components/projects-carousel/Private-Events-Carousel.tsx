"use client"
import React, { useState } from "react";
import styles from "./Private-Events-Carousel.module.css";
import { StaticImageData } from "next/image"; 

interface Project {
  src: StaticImageData; 
}

interface ProjectsCarouselProps {
  projects: Project[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevButton} onClick={prevSlide}>
        ❮
      </button>
      <div className={styles.slide}>
        <img src={projects[currentSlide].src.src} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <button className={styles.nextButton} onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default ProjectsCarousel;

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Center-Mode-Slider.module.css';

interface CarouselItem {
    image: string;
    alt: string;
    title: string;
    description: string;
}

interface CenterModeSliderProps {
    items: CarouselItem[];
}

const CenterModeSlider: React.FC<CenterModeSliderProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
            }, 4000); 
            return () => clearInterval(interval);
        }
    }, [isHovered, items.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div 
            className={styles.carousel}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className={styles.prev} onClick={prevSlide}>
                &#10094;
            </button>
            <div className={styles.carouselContent}>
                <Image 
                    src={items[currentIndex].image} 
                    alt={items[currentIndex].alt} 
                    width={800} 
                    height={800} 
                />
                <div className={styles.carouselCaption}>
                    <h3>{items[currentIndex].title}</h3>
                    <p>{items[currentIndex].description}</p>
                </div>
            </div>
            <button className={styles.next} onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default CenterModeSlider;

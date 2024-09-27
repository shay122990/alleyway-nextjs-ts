"use client";
import React from 'react';
import CenterModeSlider from '@/components/common/center-mode-slider/Center-Mode-Slider';

const carouselItems = [
    {
        image: '/images/about-image.jpg', 
        alt: 'Image 1',
        title: 'Slide 1',
        description: 'Description for slide 1',
    },
    {
        image: '/images/contact-image.jpg', 
        alt: 'Image 2',
        title: 'Slide 2',
        description: 'Description for slide 2',
    },
   
];

const Carousel: React.FC = () => {
    return (
        <div>
            <CenterModeSlider items={carouselItems} />
        </div>
    );
};

export default Carousel;

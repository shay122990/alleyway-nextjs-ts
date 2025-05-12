"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProductionEvent {
  title: string;
  imageSrc: StaticImageData;
}

interface EventProductionSectionProps {
  title: string;
  productionData: ProductionEvent[];
}

const EventProductionSection: React.FC<EventProductionSectionProps> = ({ title, productionData }) => {
  return (
    <section id="event-production" className="relative py-12 lg:py-20 px-4 lg:px-10 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-4xl lg:text-8xl font-bold text-left uppercase text-eggshell mb-16 underline underline-offset-auto decoration-mustard">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-2 md:gap-4 w-full max-w-7xl">
          {productionData.map((event, index) => (
            <div
              key={index}
              className="relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl group"
            >
              <Image
                src={event.imageSrc}
                alt={`Event: ${event.title}`}
                fill
                className="object-cover filter group-hover:blur-sm transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40  transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center px-8">
                <h3 className="text-white text-3xl md:text-5xl font-bold text-center drop-shadow-xl leading-tight group-hover:scale-105 transition-transform duration-500">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventProductionSection;

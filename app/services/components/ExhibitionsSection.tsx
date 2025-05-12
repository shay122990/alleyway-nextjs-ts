"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ExhibitionService {
  title: string;
  imageSrc: StaticImageData;
}

interface ExhibitionsSectionProps {
  title: string;
  exhibitionServicesData: ExhibitionService[];
}

const ExhibitionsSection: React.FC<ExhibitionsSectionProps> = ({
  title,
  exhibitionServicesData,
}) => {
  return (
    <div
      id="exhibitions-custom"
      className="relative py-24 px-6 overflow-hidden bg-mustard/20"
    >
      <h2 className="relative z-10 text-4xl lg:text-8xl uppercase font-bold text-left text-eggshell mb-20 underline underline-offset-auto decoration-mustard">
        {title}
      </h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {exhibitionServicesData.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Block with Slide & Rotate */}
            <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 80vw"
                priority
              />
            </div>

            {/* Title with Subtle Pop */}
            <motion.h3
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1 + 0.2,
              }}
              viewport={{ once: true }}
              className="text-lg md:text-4xl font-bold text-left text-tealCustom px-2"
            >
              {service.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExhibitionsSection;

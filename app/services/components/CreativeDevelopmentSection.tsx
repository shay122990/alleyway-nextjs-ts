"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CreativeDevelopment {
  title: string;
  imageSrc: StaticImageData;
}

interface CreativeDevelopmentSectionProps {
  title: string;
  creativeData: CreativeDevelopment[];
}

const CreativeDevelopmentSection: React.FC<CreativeDevelopmentSectionProps> = ({
  title,
  creativeData,
}) => {
  return (
    <div
      id="creative-development"
      className="relative text-white pt-12 pb-20 px-6 overflow-hidden bg-tealCustom/10"
    >
      <motion.h2
        initial={{ rotateX: 90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl lg:text-8xl uppercase font-bold text-left mb-24 underline underline-offset-auto decoration-mustard"
      >
        {title}
      </motion.h2>

      <div className="flex flex-col gap-10 lg:gap-32">
        {creativeData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, x: index % 2 === 0 ? -50 : 50, skewY: 3 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, skewY: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-6 sm:gap-12`}
          >
            {/* Image */}
            <motion.div
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="relative w-full md:w-1/2 h-[200px] sm:h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 40vw"
                priority
              />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-center text-tealCustom px-2 sm:px-4"
            >
              <h3 className="text-xl sm:text-3xl md:text-5xl font-bold leading-tight">
                {item.title}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreativeDevelopmentSection;

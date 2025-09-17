"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface SectionItem {
  title: string;
  imageSrc: StaticImageData;
  description?: string;
  paragraph?: string;
}

interface ServicesProps {
  id: string;
  title: string;
  data: SectionItem[];
  hasDescription?: boolean;
  bgColor?: string;
}

const ServicesSection: React.FC<ServicesProps> = ({
  title,
  data,
  id,
  hasDescription = true,
  bgColor = "bg-transparent",
}) => {
  return (
    <section
      id={id}
      className={`relative text-eggshell py-10 lg:py-24 px-6 ${bgColor}`}
    >
      <div className="relative z-10 flex flex-col items-left w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl lg:text-8xl font-bold text-left uppercase mb-16 underline underline-offset-auto decoration-mustard"
        >
          {title}
        </motion.h2>

        <div className="flex flex-col gap-10 lg:gap-24 w-full max-w-7xl mx-auto">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-6 sm:gap-10`}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[300px] sm:h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 50vw"
                  priority
                />
              </motion.div>
              <div className="w-full md:w-1/2 text-center px-2 sm:px-4">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight text-left text-lightMustard"
                >
                  {item.title}
                </motion.h3>

                {hasDescription && item.description && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-lg md:text-xl text-white text-left"
                  >
                    {item.description}
                  </motion.p>
                )}

                {item.paragraph && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-4 text-sm sm:text-lg md:text-xl text-white text-left"
                  >
                    {item.paragraph}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

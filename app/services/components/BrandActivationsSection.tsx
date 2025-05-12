"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Activation {
  title: string;
  description?: string;
  imageSrc: StaticImageData;
}

interface BrandActivationsSectionProps {
  title: string;
  exhibitionData: Activation[];
}

const BrandActivationsSection: React.FC<BrandActivationsSectionProps> = ({
  title,
  exhibitionData,
}) => {
  return (
    <div
      id="brand-activations"
      className="relative py-12 lg:py-24 px-6 overflow-hidden bg-white/5"
    >
      <h2 className="text-4xl lg:text-8xl font-bold text-left text-eggshell pb-12 lg:pb-20 uppercase underline underline-offset-auto decoration-mustard">
        {title}
      </h2>

      <div className="flex flex-col gap-16 lg:gap-20">
        {exhibitionData.map((activation, index) => (
          <motion.div
            key={index}
            className={`flex items-center lg:gap-20 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } w-full`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Side with Hover Zoom */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 60 }}
              className="flex-1 min-h-[200px] sm:min-h-[300px] md:min-h-[500px] relative overflow-hidden rounded-xl shadow-md"
            >
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full h-full"
              >
                <Image
                  src={activation.imageSrc}
                  alt={activation.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <div className="flex-1 flex flex-col justify-center items-center text-left p-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl sm:text-4xl md:text-5xl font-bold text-tealCustom mb-6"
              >
                {activation.title}
              </motion.h3>

              {activation.description && (
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg md:text-2xl text-grayCustom max-w-2xl"
                >
                  {activation.description}
                </motion.p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrandActivationsSection;

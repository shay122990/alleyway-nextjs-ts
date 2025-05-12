"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface VipExperience {
  title: string;
  imageSrc: StaticImageData;
}

interface VipExperienceSectionProps {
  title: string;
  vipData: VipExperience[];
}

const VipExperienceSection: React.FC<VipExperienceSectionProps> = ({
  title,
  vipData,
}) => {
  return (
    <section
      id="vip-experience"
      className="relative text-eggshell py-24 px-6 overflow-hidden"
    >
      {/* Background glow (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bbfbb10] to-[#df8a1610] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl lg:text-8xl font-bold text-left uppercase mb-16 underline underline-offset-auto decoration-mustard"
        >
          {title}
        </motion.h2>

        <div className="flex flex-col gap-24 w-full max-w-7xl mx-auto">
          {vipData.map((experience, index) => (
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
              {/* Image Reveal */}
              <motion.div
                initial={{ scaleY: 1.1, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[300px] sm:h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl origin-top"
              >
                <Image
                  src={experience.imageSrc}
                  alt={experience.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Text Block */}
              <div className="w-full md:w-1/2 text-center px-2 sm:px-4">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight text-left text-[#fea536]"
                >
                  {experience.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm sm:text-lg md:text-xl text-white text-left"
                >
                  Discover the exclusive experience crafted for you. Enjoy the finest
                  moments with top-class service, breathtaking venues, and a lifetime of
                  memories.
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipExperienceSection;

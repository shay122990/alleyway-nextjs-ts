"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface LogisticsService {
  title: string;
  imageSrc: StaticImageData;
}

interface EventLogisticsSectionProps {
  title: string;
  logisticsData: LogisticsService[];
}

const EventLogisticsSection: React.FC<EventLogisticsSectionProps> = ({
  title,
  logisticsData,
}) => {
  return (
    <div id="event-logistics" className="relative text-white lg:py-20 px-6">
      {/* Section Title */}
      <h2 className="text-4xl lg:text-8xl uppercase font-bold text-left pb-16 lg:pb-40 underline underline-offset-auto decoration-mustard">
        {title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Animated Three Words */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 flex lg:flex-col justify-center h-full items-start text-left gap-6">
            {["Reliable", "Global", "Seamless"].map((word, index) => (
              <motion.h3
                key={word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#2bbfbb] via-[#fea536] to-[#df8a16] bg-[length:200%_auto] bg-clip-text text-transparent animate-textFlow"
              >
                • {word}
              </motion.h3>
            ))}
          </div>
        </div>

        {/* Services Section with Animation */}
        <div className="lg:w-2/3 flex flex-col gap-20">
          {logisticsData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-10 md:gap-24 items-center"
            >
              {/* Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-60 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-1/2"
              >
                <h4 className="text-2xl lg:text-4xl font-bold">
                  {service.title}
                </h4>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Text Animation Keyframes */}
      <style jsx>{`
        @keyframes textFlow {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }

        .animate-textFlow {
          animation: textFlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EventLogisticsSection;

"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  FaMicrophoneAlt,
  FaTools,
  FaTruck,
  FaPlane,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { homeServicesData } from "@/data/HomePageData";

const icons = [
  <FaRocket key="rocket" />,
  <FaMicrophoneAlt key="mic" />,
  <FaTools key="tools" />,
  <FaTruck key="truck" />,
  <FaPlane key="plane" />,
  <FaPalette key="palette" />,
];

const ServiceSection = ({
  service,
  isReversed,
  index,
}: {
  service: (typeof homeServicesData)[number];
  isReversed: boolean;
  index: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`relative flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-2 lg:gap-20 w-full py-4 lg:py-10`}
    >
      <div className="w-full md:w-1/2 flex flex-col items-start text-left px-4 md:px-0 z-10 relative">
        <div className="absolute text-[5rem] md:text-[10rem] lg:text-[14rem] font-extrabold text-grayCustom opacity-10 -top-14 sm:-top-20 md:-top-56 left-0 select-none z-0">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex flex-col items-start border-l-4 border-[#2bbfbb] pl-6 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-2xl sm:text-4xl md:text-5xl text-[#fea536]">
              {icons[index]}
            </div>
            <Link
              href={`/services#${service.slug}`}
              className="relative text-xl sm:text-3xl md:text-5xl font-extrabold leading-tight pb-2 bg-tealCustom bg-clip-text text-transparent transition hover:opacity-80 after:absolute after:left-0 after:bottom-[-12px] after:h-[1px] after:w-full after:bg-[#fea536] after:content-[''] uppercase"
              style={{ fontSize: "clamp(1.2rem, 5vw, 3rem)" }}
            >
              {service.title}
              <IoIosArrowRoundForward className="text-tealCustom" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`flex ${
          service.extraImage ? "flex-row gap-4" : "flex-col"
        } w-full md:w-[65%] px-4 md:px-0 z-10`}
      >
        <div
          className={`relative ${
            service.extraImage ? "w-[50%]" : "w-full"
          } h-[230px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 48vw, 50vw"
            priority={index < 3}
          />
        </div>

        {service.extraImage && (
          <div className="relative w-[48%] h-[230px] md:h-[500px] flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={service.extraImage}
              alt={`${service.title} extra`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 48vw, 50vw"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function HomeServicesSections() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#fef5e7] pb-16 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold text-center py-10 bg-gradient-to-r from-[#fea536] to-[#df8a16] bg-clip-text text-transparent"
        style={{ fontSize: "clamp(1.2rem, 5vw, 3rem)" }}
      >
        OUR SERVICES
      </motion.h2>

      <div className="flex flex-col w-full max-w-9xl gap-14 md:gap-16 lg:px-4">
        {homeServicesData.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface VideoHeroProps {
  video: string;
}

export default function VideoHero({ video }: VideoHeroProps) {
  return (
    <motion.div
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #fffff7, #e5ddd0)",
        boxShadow: "20px 20px 60px #d8d0c4, -20px -20px 60px #ffffff",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex items-center justify-center overflow-hidden h-[300px] md:h-[500px] lg:h-[800px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          // poster="/images/hero-poster.webp"
          className="absolute top-0 left-0 w-full h-full object-cover bg-stone-800"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 via-orange/80 to-transparent z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-center">
          <h1 className="sr-only">
            Event & Project Management Company in Dubai
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoHeroProps {
  video: string;
}

export default function VideoHero({
  video,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const playAttempt = videoRef.current?.play();
    if (playAttempt !== undefined) {
      playAttempt.catch(() => {
        console.warn("Autoplay blocked, waiting for user interaction");
      });
    }
  }, []);

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
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onClick={() => videoRef.current?.play()}
          className="absolute top-0 left-0 w-full h-full object-cover bg-stone-800"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 via-orange/80 to-transparent z-10" />
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImageHeroProps {
  image: string | StaticImageData;
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ImageHero({
  image,
  title,
  paragraph,
  titleClassName,
  paragraphClassName,
  width,
  height,
  priority,
}: ImageHeroProps) {
  const backgroundImage = typeof image === "string" ? image : image?.src;

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
      <div className="relative flex items-center justify-center overflow-hidden h-[500px] lg:h-[840px]">
        <Image
          src={backgroundImage}
          alt={title}
          width={width || 1920}
          height={height || 1080}
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority={priority}
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7 }}
            className={titleClassName}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
            className={paragraphClassName}
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

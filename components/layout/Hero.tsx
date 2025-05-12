"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  image?: string | StaticImageData;
  title: string;
  paragraph: string;
  titleClassName?: string;
  paragraphClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  video?: string;
  hideContent?: boolean;
  isHomePage?: boolean;
}

export default function Hero({image,title,paragraph,titleClassName,paragraphClassName,width,height,priority,video,hideContent = false,isHomePage
}: HeroProps) {
  const backgroundImage = typeof image === "string" ? image : image?.src;
  const backgroundVideo = typeof video === "string" ? video : undefined;
  const heroHeightClasses = isHomePage
  ? "h-[300px] md:h-[500px] lg:h-[800px]"
  : "h-[500px] lg:h-[840px]";

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
      <div className={`relative flex items-center justify-center overflow-hidden ${heroHeightClasses}`}>
      {/* Background Video or Image */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover md:object-cover lg:object-cover bg-stone-800"
        >
          <source src={backgroundVideo} type="video/mp4" />
          {/* Add this for captions */}
          <track 
            kind="captions" 
            src="/captions.vtt" 
            srcLang="en" 
            label="English Captions" 
            default 
          />
          Your browser does not support the video tag.
        </video>     
      ) : (
        image &&
        backgroundImage && (
          <Image
            width={width || 1920}
            height={height || 1080}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
            src={backgroundImage}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            priority={priority}
          />
        )
      )}

      {/* Overlay */}
      {backgroundVideo ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 via-orange/80 to-transparent z-10"></div>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      )}

      {/* Hero Content */}
      {!hideContent && (
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.7 }}
            className="text-[clamp(2rem,5vw,6rem)] text-eggshell font-bold"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.8, delay: 0.3 }}
            className="text-[clamp(1rem,2.5vw,2rem)] text-eggshell mt-4 font-bold"
          >
            {paragraph}
          </motion.p>
        </div>
      )}
    </div>

    </motion.div>
  );
}

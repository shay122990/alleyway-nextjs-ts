"use client";
import Image from 'next/image';
import logoIconTeal from "@/public/images/logo-icons/alleyway logo_icon_teal variation.png";
import introImage from "@/public/images/header-home.jpg";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeIntro = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: taglineRef, inView: taglineInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      <section className="relative w-full flex items-center justify-start bg-stone-800">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl lg:text-8xl font-extrabold text-mustard leading-tight text-left pl-4 md:pl-10 pt-10"
        >
          Who we are
        </motion.h2>
      </section>
      <section className="relative w-full flex flex-col md:flex-row items-center md:items-start justify-between overflow-hidden px-4 md:px-0 pb-8 lg:pb-16 bg-stone-800 pt-10 md:gap-40">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={logoIconTeal}
          alt="Background Logo"
          fill
          className="object-contain opacity-5 scale-[2] md:scale-[2.5] lg:scale-[3.2] transform"
          style={{ objectPosition: "30% center" }} 
          priority
        />
      </div>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full md:w-1/2 px-0 md:pl-10 mb-10 md:mb-0"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-eggshell leading-relaxed text-left">
            <span className="block mb-2">
              You bring the vision.
            </span>
            <span className="block mb-2">
              We bring the expertise and innovation.
            </span>
            <span className="block">
              Precision is our craft — making your dreams a reality.
            </span>
          </p>
          <p className="mt-8 text-base md:text-lg text-eggshell/90 leading-relaxed">
          Alleyway is a powerhouse of event project management, where bold creativity meets
          flawless execution. We are not just planners—we are doers, problem solvers, and
          experienced creators. From high-impact global summits to immersive brand activations,
          we orchestrate seamless, unforgettable experiences that move audiences and leave
          lasting impressions.
        </p>
        </motion.div>
        <div className="relative z-10 w-full md:w-1/2 flex flex-col items-end gap-6 pr-6 md:pr-10">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: -50 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[220px] sm:w-[300px] md:w-[400px] lg:w-[600px]"
          >
            <Image
              src={introImage}
              alt="Main Image"
              width={600}
              height={600}
              className="shadow-2xl object-cover rounded-2xl"
            />
          </motion.div>
          <motion.ul
            ref={taglineRef}
            initial={{ opacity: 0, y: -50 }}
            animate={taglineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-row gap-6 text-2xl sm:text-3xl md:text-5xl font-bold text-mustard text-right"
          >
            <li>We create</li>
            <li>We build</li>
            <li>We activate</li>
          </motion.ul>
        </div>
      </section>
    </>
  );
};

export default HomeIntro;

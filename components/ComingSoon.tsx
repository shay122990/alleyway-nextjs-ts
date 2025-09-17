"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/images/logo-icons/logo-dark.png";

export default function ComingSoon() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#fef5e7] p-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold text-[#df8a16] mb-4 drop-shadow"
      >
        <Image src={logo} alt="logo-image" width={300} height={300} />
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-[#df8a16] mb-6"
      >
        Coming Soon
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md"
      >
        <p className="text-[#545454] text-lg md:text-xl">
          Get in touch with us for inquiries!
        </p>
        <a
          href="https://wa.me/+971528182368"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-3 rounded-full hover:bg-[#1ebe5b] transition"
        >
          <FaWhatsapp size={28} color="white" />
        </a>
      </motion.div>
    </section>
  );
}

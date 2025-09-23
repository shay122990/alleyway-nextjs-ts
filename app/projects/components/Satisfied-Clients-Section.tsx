"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { clientLogos } from "@/data/ProjectsPageData";

export default function SatisfiedClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    scrollRef.current?.scrollBy({ top: 200, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#fea536_10%,transparent_40%),radial-gradient(circle_at_80%_80%,#2bbfbb_10%,transparent_40%)] opacity-20" />

      <div className="relative z-10 text-center mb-14">
        <h2 className="text-xl md:text-5xl font-extrabold text-lightMustard uppercase">
          They trust us
        </h2>
      </div>

      <div className="relative z-10 md:max-w-7xl mx-auto">
        <div
          ref={scrollRef}
          className="max-h-[400px] overflow-y-scroll scrollbar-always relative px-2"
        >
          {/* MOBILE: simple grid (no masonry) */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {clientLogos.map((logo, i) => (
              <div
                key={i}
                className="bg-lightMustard rounded-md shadow-md p-4 flex items-center justify-center w-[160px] h-[100px] mx-auto"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${i + 1}`}
                  width={120}
                  height={80}
                  sizes="(max-width: 768px) 160px"
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* DESKTOP/TABLET: masonry */}
          <div className="hidden md:block">
            <div className="columns-4 lg:columns-5 space-y-2">
              {clientLogos.map((logo, i) => (
                <div key={i} className="break-inside-avoid">
                  <div className="bg-lightMustard rounded-md shadow-md p-2 flex items-center justify-center md:w-auto md:h-auto w-[160px] h-[100px] mx-auto">
                    <Image
                      src={logo}
                      alt={`Client logo ${i + 1}`}
                      width={160}
                      height={100}
                      sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 160px"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleScrollClick}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-grayCustom p-2 rounded-full shadow-lg opacity-90"
          aria-label="Scroll logos"
        >
          <FaChevronDown className="text-tealCustom text-2xl" />
        </button>
      </div>

      <div className="relative z-10 mt-16 flex justify-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-lightMustard text-lg md:text-xl font-semibold px-6 py-3 rounded-full border border-lightMustard hover:bg-lightMustard hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          Explore how we deliver
          <FaArrowRight className="text-lightMustard text-xl" />
        </Link>
      </div>
    </section>
  );
}

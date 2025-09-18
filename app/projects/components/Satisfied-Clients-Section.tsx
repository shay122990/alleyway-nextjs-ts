"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const clientLogos = [
  "/images/client-logos/img1.png",
  "/images/client-logos/img2.jpg",
  "/images/client-logos/img3.jpg",
  "/images/client-logos/img4.jpg",
  "/images/client-logos/img5.jpg",
  "/images/client-logos/img6.webp",
  "/images/client-logos/img7.png",
  "/images/client-logos/img8.svg",
  "/images/client-logos/img9.png",
  "/images/client-logos/img10.png",
  "/images/client-logos/img11.jpg",
  "/images/client-logos/img12.jpg",
  "/images/client-logos/img13.png",
  "/images/client-logos/img14.png",
  "/images/client-logos/img15.svg",
  "/images/client-logos/img16.png",
  "/images/client-logos/img17.png",
  "/images/client-logos/img18.png",
  "/images/client-logos/img19.png",
  "/images/client-logos/img20.webp",
  "/images/client-logos/img21.png",
  "/images/client-logos/img22.png",
  "/images/client-logos/img23.svg",
  "/images/client-logos/img24.png",
  "/images/client-logos/img25.png",
  "/images/client-logos/img26.png",
  "/images/client-logos/img27.png",
  "/images/client-logos/img28.png",
  "/images/client-logos/img29.png",
  "/images/client-logos/img30.png",
  "/images/client-logos/img31.png",
  "/images/client-logos/img32.png",
  "/images/client-logos/img33.png",
  "/images/client-logos/img34.avif",
  "/images/client-logos/img35.png",
  "/images/client-logos/img36.png",
  "/images/client-logos/img37.png",
  "/images/client-logos/img38.png",
  "/images/client-logos/img39.png",
  "/images/client-logos/img40.png",
  "/images/client-logos/img41.png",
  "/images/client-logos/img42.png",
  "/images/client-logos/img43.png",
  "/images/client-logos/img44.png",
  "/images/client-logos/img45.png",
  "/images/client-logos/img46.png",
  "/images/client-logos/img47.png",
  "/images/client-logos/img48.png",
  "/images/client-logos/img49.png",
  "/images/client-logos/img50.png",
  "/images/client-logos/img51.webp",
  "/images/client-logos/img52.jpg",
  "/images/client-logos/img53.png",
  "/images/client-logos/img54.png",
  "/images/client-logos/img55.png",
  "/images/client-logos/img56.png",
  "/images/client-logos/img57.jpg",
  "/images/client-logos/img58.webp",
  "/images/client-logos/img59.png",
  "/images/client-logos/img60.png",
  "/images/client-logos/img61.png",
  "/images/client-logos/img62.png",
  "/images/client-logos/img63.png",
  "/images/client-logos/img64.png",
  "/images/client-logos/img65.png",
];
// function getRandomWidth() {
//   const widths = [80, 100, 120];
//   return widths[Math.floor(Math.random() * widths.length)];
// }

// function getRandomHeight() {
//   const heights = [80, 60, 70];
//   return heights[Math.floor(Math.random() * heights.length)];
// }

export default function SatisfiedClientsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#fea536_10%,transparent_40%),radial-gradient(circle_at_80%_80%,#2bbfbb_10%,transparent_40%)] animate-backgroundMove opacity-20"></div>

      <div className="relative z-10 text-center mb-14">
        <h2 className="text-xl md:text-5xl font-extrabold text-lightMustard uppercase">
          They trust us
        </h2>
      </div>

      <div className="relative z-10 md:max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="max-h-[400px] overflow-y-scroll scrollbar-always relative px-2"
        >
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5  space-y-2">
            {clientLogos.map((logo, index) => (
              <div key={index} className="break-inside-avoid">
                <div className="bg-lightMustard rounded-md shadow-md p-4 md:p-2 flex items-center justify-center w-[160px] h-[100px] md:w-auto md:h-auto mx-auto">
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={120}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          onClick={handleScrollClick}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="bg-grayCustom p-2 rounded-full shadow-lg opacity-90">
            <FaChevronDown className="text-tealCustom text-2xl" />
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-16 flex justify-center">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-lightMustard text-lg md:text-xl font-semibold px-6 py-3 rounded-full border border-lightMustard hover:bg-lightMustard hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-lg"
        >
          Explore how we deliver
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

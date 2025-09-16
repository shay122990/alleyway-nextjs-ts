"use client";

import Image from "next/image";

const clientLogos = [
  "/images/client-logos/img58.webp",
  "/images/client-logos/img50.png",
  "/images/client-logos/img40.png",
  "/images/client-logos/img35.png",
  "/images/client-logos/img31.png",
  "/images/client-logos/img26.png",
  "/images/client-logos/img25.png",
  "/images/client-logos/img19.png",
  "/images/client-logos/img18.png",
  "/images/client-logos/img17.png",
  "/images/client-logos/img14.png",
  "/images/client-logos/img13.png",
  "/images/client-logos/img11.jpg",
  "/images/client-logos/img5.jpg",
  "/images/client-logos/img4.jpg",
];

export default function ClientLogoBanner() {
  return (
    <div className="w-full text-center">
      <h3 className="text-tealCustom uppercase w-full font-bold text-xl lg:text-4xl">
        They trust us
      </h3>

      <div className="relative w-full overflow-hidden py-4 my-10  lg:my-16 bg-[#545454]">
        <div className="flex w-max animate-scroll whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-2 px-4 rounded-lg bg-eggshell"
            >
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={70}
                height={70}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

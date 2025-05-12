"use client";

import Image from "next/image";

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
];

export default function ClientLogoBanner() {
  return (
    <div className="relative w-full overflow-hidden py-4 my-10  lg:my-16 bg-gradient-to-r from-[#2bbfbb]  to-[#1a3ef6]">
      <div className="flex w-max animate-scroll whitespace-nowrap">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-2 px-2 rounded-lg bg-white">
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
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";

const highlights = [
  { image: "/images/projects-image.jpg", label: "Festival Launch" },
  { image: "/images/projects-image1.jpg", label: "Award Ceremony" },
  { image: "/images/projects-image2.jpg", label: "Luxury Wedding" },
  { image: "/images/projects-image3.jpg", label: "Corporate Event" },
  { image: "/images/projects-image4.jpg", label: "Expo Showcase" },
];

export default function TimelineProjects() {
  return (
    <section className="w-full pb-20 relative bg-eggshell">
      {/* Top label */}
      <div className="relative pl-10">
        <Link href="/projects">
          <div className="text-grayCustom/10 uppercase font-bold text-4xl lg:text-8xl">
            Projects
          </div>
        </Link>
      </div>

      {/* Scrollable cards */}
      <div className="overflow-x-auto lg:mt-10 scrollbar-thin scrollbar-thumb-[#fea536] scrollbar-track-[#fef5e7]">
        <div className="flex items-center gap-8 w-max px-10 py-10">
          {highlights.map((item, idx) => (
            <Link
              href="/projects"
              key={idx}
              className="relative flex flex-col items-center min-w-[320px] md:min-w-[400px] group"
            >
              {/* Card with overlay */}
              <div className="relative w-[320px] h-[380px] md:w-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Dimmed Image */}
                <Image
                  src={item.image}
                  alt={`Highlight image of ${item.label}`}
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10 transition duration-300 group-hover:bg-black/20" />
                {/* Text on top */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 px-4 text-center">
                  <p className="text-eggshell text-2xl font-bold group-hover:text-[#2bbfbb] transition">
                    {item.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}

          {/* Final CTA */}
          <Link
            href="/projects"
            className="min-w-[250px] flex justify-center items-center"
          >
            <div className="bg-[#df8a16] text-white rounded-full px-12 py-6 font-bold text-2xl hover:scale-110 transition-transform duration-300 shadow-lg whitespace-nowrap">
              View All Projects →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

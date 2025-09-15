"use client";

import Link from "next/link";
import Image from "next/image";
import { homeHighlights } from "@/data/HomePageData";

export default function TimelineProjects() {
  return (
    <section className="w-full pb-20 relative bg-eggshell">
      <div className="relative pl-10">
        <Link href="/projects">
          <div className="text-[#fea536] uppercase font-bold text-4xl lg:text-8xl">
            Projects
          </div>
        </Link>
      </div>

      <div className="overflow-x-auto lg:mt-10 scrollbar-thin scrollbar-thumb-[#fea536] scrollbar-track-[#fef5e7]">
        <div className="flex items-center gap-8 w-max px-10 py-10">
          {homeHighlights.map((item, idx) => (
            <Link
              href="/projects"
              key={idx}
              className="relative flex flex-col items-center min-w-[320px] md:min-w-[400px] group"
            >
              <div className="relative w-[320px] h-[380px] md:w-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={item.image}
                  alt={`Highlight image of ${item.label}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 420px"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-black/40 z-10 transition duration-300 " />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 text-center">
                  <p className="text-white text-2xl font-bold">{item.label}</p>
                </div>
              </div>
            </Link>
          ))}

          <Link
            href="/projects"
            className="min-w-[250px] flex justify-center items-center"
          >
            <div className="bg-tealCustom text-white rounded-full px-12 py-6 font-bold text-2xl hover:scale-110 transition-transform duration-300 shadow-lg whitespace-nowrap">
              View All Projects →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

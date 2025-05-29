"use client";

import Image from "next/image";
import { projectSectionsData } from "../../../data/ProjectsPageData";

export default function SuccessfullyDeliveredSections() {
  return (
    <>
      {projectSectionsData.map((section, index) => (
        <section
          key={index}
          className={`py-24 px-4 sm:px-6 ${section.backgroundColor} ${section.backgroundColor === "bg-black" ? "text-white" : ""}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">            
            <div>
              <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold mb-12 ${section.sectionTitleColor}`}>
                {section.sectionTitle}
              </h1>

              <div className="space-y-6 sm:space-y-8">
                {section.projects.map((project, idx) => (
                  <div key={idx}>
                    <h2 className={`text-2xl sm:text-4xl font-bold ${section.h2Color}`}>
                      {project.h2}
                    </h2>
                    <p className={`text-sm sm:text-base md:text-lg ${section.pColor}`}>
                      {project.p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden sm:block columns-2 sm:columns-3 gap-3 space-y-2 w-full">
              {section.images.map((img, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg break-inside-avoid">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.src.width || 1000}
                    height={img.src.height || 1000}
                    className="object-cover w-full rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="flex sm:hidden gap-4 overflow-x-auto py-4">
              {section.images.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-60 h-40 rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}
    </>
  );
}

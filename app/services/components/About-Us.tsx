"use client";

interface AboutUsItem {
  title: string;
  description: string;
}

const aboutUsData: AboutUsItem[] = [
  {
    title: "Expertise of Global Reach",
    description:
      "Seamless execution in any market, from Dubai to the World manage and done the frontline experts directly. Extensive partner network to ensure impactful management and delivery.",
  },
  {
    title: "High-Caliber Execution",
    description:
      "Precision, innovation, and flawless attention to detail. We excel at creating and managing end to end event experiences or stepping to take over any part of the event cycle.",
  },
  {
    title: "Turnkey Solutions",
    description:
      "Bold, strategic and high-end, thriving in uniquely complex projects. Full-service creative, production, operations, activations, build-ups, fit-outs and engagement.",
  },
  {
    title: "High Profile Clients",
    description:
      "We navigate high-profile partnerships & audiences with ease. Ensuring to go beyond expectations for a lasting and continuous stakeholder relationship.",
  },
];

export default function AboutUs() {
  return (
    <div id="about-us" className=" from-tealCustom via-gray-800 to-black">
      <div className="text-left mb-12">
        <h1 className="text-4xl lg:text-8xl lg:text-center font-extrabold">Why Choose Us</h1>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {aboutUsData.map((item, index) => (
          <div key={index} className="w-full md:w-[45%] lg:w-[22%] flex justify-center">
            <div className="w-full [perspective:1000px] group">
              <div className="relative w-full min-h-[160px] md:min-h-[300px] lg:min-h-[400px] transition-transform duration-[1000ms] ease-in-out [transform-style:preserve-3d] [transform:translateZ(0)] will-change-transform group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute w-full h-full rounded-[8px] flex justify-center items-center text-center p-6 bg-gradient-to-b from-mustard via-orange-600 to-lightMustard text-eggshell [backface-visibility:hidden]">
                  <h3 className="text-lg md:text-4xl font-semibold uppercase">{item.title + " >"}</h3>
                </div>

                {/* Back */}
                <div className="absolute w-full h-full rounded-[8px] flex justify-center items-center text-center px-4 bg-gradient-to-b from-tealCustom to-blue-600 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-left text-lg lg:text-2xl">{item.description}</p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

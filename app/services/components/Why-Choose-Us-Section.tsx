"use client";

interface ChooseUsItem {
  title: string;
  description: string;
}

const chooseUsData: ChooseUsItem[] = [
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

export default function WhyChooseUsSection() {
  return (
    <div id="why-choose-us" className="py-8 md:py-14 px-14 lg:px-10">
      <div className="text-center mb-8 lg:mb-16">
        <h2 className="text-xl md:text-6xl font-extrabold text-tealCustom mb-4 tracking-wide uppercase">
          Why choose us
        </h2>
        <div className="flex justify-center">
          <div className="h-1 w-20 md:w-28 bg-[#2bbfbb] rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {chooseUsData.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[22%] flex justify-center"
          >
            <div className="w-full [perspective:1000px] group">
              <div className="relative w-full min-h-[160px] md:min-h-[300px] lg:min-h-[400px] transition-transform duration-[1000ms] ease-in-out [transform-style:preserve-3d] [transform:translateZ(0)] will-change-transform group-hover:[transform:rotateY(180deg)]">
                <div
                  className="absolute w-full h-full rounded-[8px] flex justify-center items-center text-center p-6 text-white [backface-visibility:hidden]"
                  style={{
                    background:
                      "linear-gradient(209deg, rgba(254,165,54,1) 0%, rgba(223,138,22,1) 100%)",
                  }}
                >
                  <h3 className="text-lg md:text-4xl font-semibold uppercase">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute w-full h-full rounded-[8px] flex justify-center items-center  px-4 bg-grayCustom text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-left text-sm md:text-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

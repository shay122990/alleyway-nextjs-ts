"use client";

import {
  FaRocket,
  FaLightbulb,
  FaProjectDiagram,
  FaShippingFast,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    title: "Strategic Planning",
    step: "Step One",
    description: "Understanding your vision.",
    icon: <FaProjectDiagram className="text-3xl md:text-5xl text-grayCustom" />,
  },
  {
    title: "Creative Concepting",
    step: "Step Two",
    description: "Developing disruptive experiences.",
    icon: <FaLightbulb className="text-3xl md:text-5xl text-grayCustom" />,
  },
  {
    title: "Production & Logistics",
    step: "Step Three",
    description: "Seamlessly managing every detail.",
    icon: <FaShippingFast className="text-3xl md:text-5xl text-grayCustom" />,
  },
  {
    title: "Execution & Delivery",
    step: "Step Four",
    description: "Bringing it all together, flawlessly.",
    icon: <FaRocket className="text-3xl md:text-5xl text-grayCustom" />,
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-lightMustard py-20 lg:py-28 px-4 relative overflow-hidden text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-6xl font-extrabold text-eggshell mb-4 tracking-wide uppercase">
          HOW WE WORK
        </h2>
        <div className="flex justify-center">
          <div className="h-1 w-20 md:w-28 bg-[#2bbfbb] rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center h-full">
            <div className="relative group bg-eggshell backdrop-blur-lg border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl flex flex-col items-center text-center shadow-xl hover:shadow-[#2bbfbb]/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] w-full h-full flex-1">
              <div className="absolute top-4 left-4 text-3xl md:text-5xl font-bold text-mustard/50 select-none">
                {index + 1}
              </div>

              <div className="p-4 md:p-6 rounded-full mb-4 md:mb-6">
                {step.icon}
              </div>

              <h3 className="text-base md:text-xl font-semibold text-tealCustom mb-2">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-mustard font-bold mb-2">
                {step.step}
              </p>

              <p className="text-xs md:text-sm text-grayCustom">{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden lg:flex mx-4 text-grayCustom text-2xl">
                <FaArrowRight />
              </div>
            )}
          </div>
        ))}
      </div>


      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#2bbfbb] blur-3xl opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#df8a16] blur-2xl opacity-20 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

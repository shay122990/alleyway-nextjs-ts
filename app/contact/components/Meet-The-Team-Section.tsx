"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Ali",
    position: "CEO & Founder",
    image: "/images/homeHero.webp",
  },
  {
    name: "Miriam",
    position: "Creative Director",
    image: "/images/header-home.jpg",
  },
];

export default function MeetTheTeamSection() {
  return (
    <section className="relative py-10 lg:py-24 px-6 overflow-hidden bg-eggshell">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bbfbb10] to-[#df8a1610] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/images/logo-icons/alleyway%20logo_icon_teal%20variation.png')] bg-no-repeat bg-right bg-contain opacity-20 mix-blend-multiply z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 lg:gap-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-mustard tracking-tight leading-tight">
          Meet the team
        </h2>

        <p className="text-xl md:text-2xl text-gray-800 max-w-3xl leading-relaxed font-medium">
          Passionate, talented, and ready to deliver exceptional results.
        </p>

        <div className="bg-white/60 backdrop-blur-lg p-8 rounded-xl border border-gray-300 shadow-md max-w-4xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
          <p className="md:text-lg text-gray-700 leading-relaxed">
            From freelancers with a dream to global changemakers —<br />
            Now, you're collaborating directly with the experts who bring bold
            visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300 bg-white"
            >
              <div className="relative w-full h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-md text-lightMustard">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative py-24 px-6 overflow-hidden bg-eggshell">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2bbfbb10] to-[#df8a1610] pointer-events-none z-0" />

      {/* Faded background logo on the right */}
      <div className="absolute inset-0 bg-[url('/images/logo-icons/alleyway%20logo_icon_teal%20variation.png')] bg-no-repeat bg-right bg-contain opacity-20 mix-blend-multiply z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-mustard">Meet the Team</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Passionate, talented, and ready to deliver exceptional results.
        </p>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl border border-gray-300 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Journey</h3>
          <p className="text-base text-gray-700">
            From Freelancers to Global Leaders —<br />
            Now, you will partner with the experts who make things happen directly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white"
            >
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-sm text-lightMustard">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

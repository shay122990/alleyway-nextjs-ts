"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Ali",
    position: "CEO & Founder",
    image: "/images/team/john.jpg",
  },
  {
    name: "Miriam",
    position: "Creative Director",
    image: "/images/team/jane.jpg",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 bg-gradient-to-br from-[#fef5e7] to-[#2bbfbb]">
      {/* Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ffffff33_10%,transparent_40%),radial-gradient(circle_at_70%_70%,#ffffff33_10%,transparent_40%)] animate-backgroundMove opacity-20 z-0"></div>

      {/* Faded Background Image with Tailwind bg-[url()] */}
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-10 pointer-events-none lg:block bg-[url('/images/logo-icons/alleyway%20logo_icon_teal%20variation.png')] bg-cover bg-right"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl lg:max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-mustard mb-6">
          Meet the Team
        </h2>
        <p className="text-lg text-grayCustom mb-12">
          Passionate, talented, and ready to deliver exceptional results.
        </p>

        {/* Our Journey */}
        <div className="max-w-2xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our Journey
          </h3>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed">
            From Freelancers to Global Leaders — <br />
            Now, you will partner with the experts who make things happen directly.
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="relative z-10 grid place-items-center gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl lg:max-w-7xl mx-auto px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 bg-white w-full max-w-xs"
          >
            <div className="relative w-full h-80">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-sm text-lightMustard">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

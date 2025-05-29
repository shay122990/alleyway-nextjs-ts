"use client";

import Head from "next/head";
import Hero from "@/components/layout/Hero";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import projectsImage from "@/public/images/projects-image.jpg";
import { servicesPageData } from "@/data/ServicesPageData";
import ServicesSection from "./components/Services";


export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services | Alleyway</title>
        <meta name="description" content="From corporate events to luxury VIP experiences, we deliver unforgettable services tailored to your brand." />
        <link rel="preload" href={projectsImage.src} as="image" />
        <meta property="og:title" content="Our Services - Alleyway" />
        <meta property="og:description" content="Explore our comprehensive range of event & management services designed to make your event memorable." />
        <meta property="og:image" content="https://alleywaydxb.com/images/projects-image.jpg" />
        <meta property="og:url" content="https://alleywaydxb.com/services" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="event management, corporate events, private events, VIP experiences, creative storytelling, exhibitions, Dubai events" />
      </Head>
      <Hero 
        image={projectsImage}
        title="What We Do"
        paragraph="We don't just manage events - we engineer impact."
        titleClassName="text-lightMustard text-5xl md:text-7xl font-bold"
        paragraphClassName="text-grayCustom mt-4 text-lg md:text-xl"
      />
      <section className="py-12 lg:py-24 px-4 bg-eggshell">
        <WhyChooseUsSection />
      </section>
      <main className="relative overflow-hidden text-white ">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-gray-900 to-black"></div>
          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-gradient-to-tr from-lightMustard via-orange-400 to-tealCustom rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute top-[30%] right-[-200px] w-[500px] h-[500px] bg-gradient-to-bl from-tealCustom via-lightMustard to-grayCustom rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-lightMustard via-mustard to-lightMustard rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute top-[55%] left-[20%] w-[400px] h-[400px] bg-gradient-to-tl from-mustard via-lightMustard to-white rounded-full blur-[120px] opacity-50"></div>
        </div>
        <ServicesSection
          id="brand-activations"
          title={servicesPageData.numberOne.title}
          data={servicesPageData.numberOne.services}
        />

        <ServicesSection
          id="event-production"
          title={servicesPageData.numberTwo.title}
          data={servicesPageData.numberTwo.services}
        />

        <ServicesSection
          id="exhibitions"
          title={servicesPageData.numberThree.title}
          data={servicesPageData.numberThree.services}
        />

        <ServicesSection
          id="event-logistics"
          title={servicesPageData.numberFour.title}
          data={servicesPageData.numberFour.services}
        />

        <ServicesSection
          id="vip-experience"
          title={servicesPageData.numberFive.title}
          data={servicesPageData.numberFive.services}
        />

        <ServicesSection
          id="creative-development"
          title={servicesPageData.numberSix.title}
          data={servicesPageData.numberSix.services}
        />
      </main>
    </>
  );
}

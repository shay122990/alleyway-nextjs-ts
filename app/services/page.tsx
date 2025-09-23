"use client";
import Link from "next/link";
import Head from "next/head";
import ImageHero from "@/components/layout/ImageHero";
import WhyChooseUsSection from "./components/Why-Choose-Us-Section";
import servicesHero from "@/public/images/services-page/services-hero.webp";
import { servicesPageData } from "@/data/ServicesPageData";
import ServicesSection from "./components/Services";
import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <Head>
        <title>Alleyway Services | Alleyway</title>
        <meta
          name="description"
          content="From corporate events to luxury VIP experiences, we deliver unforgettable services tailored to your brand."
        />
        <link rel="preload" href={servicesHero.src} as="image" />
        <meta property="og:title" content="Our Services - Alleyway" />
        <meta
          property="og:description"
          content="Explore our comprehensive range of event & management services designed to make your event memorable."
        />
        <meta
          property="og:image"
          content="https://alleywaydxb.com/images/services-hero.webp"
        />
        <meta property="og:url" content="https://alleywaydxb.com/services" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="event management, corporate events, private events, VIP experiences, creative storytelling, exhibitions, Dubai events"
        />
      </Head>
      <ImageHero
        image={servicesHero}
        title="What We Do"
        paragraph="We don't just manage events - we engineer impact."
        titleClassName="text-lightMustard text-[clamp(2rem,6vw,6rem)] font-bold"
        paragraphClassName="text-white mt-4 text-[clamp(1rem,3vw,2rem)] font-semibold"
      />
      <section className="bg-white relative z-0">
        <WhyChooseUsSection />
      </section>

      <main className="relative z-10 text-white overflow-visible py-6">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-gray-900 to-black"></div>
          <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-gradient-to-tr from-lightMustard via-orange-400 to-tealCustom rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute top-[30%] right-[-200px] w-[500px] h-[500px] bg-gradient-to-bl from-tealCustom via-lightMustard to-grayCustom rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-lightMustard via-mustard to-lightMustard rounded-full blur-[100px] opacity-70"></div>
          <div className="absolute top-[55%] left-[20%] w-[400px] h-[400px] bg-gradient-to-tl from-mustard via-lightMustard to-white rounded-full blur-[120px] opacity-50"></div>
        </div>

        <div
          id="brand-activations"
          className="relative -top-32 md:-top-40 h-0"
          aria-hidden="true"
        />
        <ServicesSection
          id="brand-activations"
          title={servicesPageData.numberOne.title}
          data={servicesPageData.numberOne.services}
        />

        <div
          id="event-production"
          className="relative -top-32 md:-top-40 h-0"
          aria-hidden="true"
        />
        <ServicesSection
          id="event-production"
          title={servicesPageData.numberTwo.title}
          data={servicesPageData.numberTwo.services}
        />

        <div
          id="exhibitions"
          className="relative -top-32 md:-top-40 h-0"
          aria-hidden="true"
        />
        <ServicesSection
          id="exhibitions"
          title={servicesPageData.numberThree.title}
          data={servicesPageData.numberThree.services}
        />

        <div
          id="event-logistics"
          className="relative -top-32 md:-top-40 h-0"
          aria-hidden="true"
        />
        <ServicesSection
          id="event-logistics"
          title={servicesPageData.numberFour.title}
          data={servicesPageData.numberFour.services}
        />

        <div
          id="vip-experience"
          className="relative -top-32 md:-top-40 h-0"
          aria-hidden="true"
        />
        <ServicesSection
          id="vip-experience"
          title={servicesPageData.numberFive.title}
          data={servicesPageData.numberFive.services}
        />

        <div
          id="creative-development"
          className="relative -top-32 md:-top-40 h-0"
          aria-hidden="true"
        />
        <ServicesSection
          id="creative-development"
          title={servicesPageData.numberSix.title}
          data={servicesPageData.numberSix.services}
        />

        <div className="relative z-10 my-10 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-lightMustard text-lg md:text-xl font-semibold px-6 py-3 rounded-full border border-lightMustard hover:bg-lightMustard hover:text-grayCustom transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            Start your project with us
            <FaArrowRight className="text-current group-hover:text-current text-xl transition-colors duration-300" />
          </Link>
        </div>
      </main>
    </>
  );
}

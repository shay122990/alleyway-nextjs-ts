"use client";

import Head from 'next/head';
import aboutImage from "@/public/images/about-image.webp";
import Hero from "@/components/layout/Hero";
import SuccessfullyDeliveredSections from './components/SuccessfullyDeliveredSections';
import HowWeWork from './components/HowWeWorkSection';
import SatisfiedClientsSection from './components/SatisfiedClientsSection';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Alleyway</title>
        <meta name="description" content="Explore the projects we've successfully completed at Alleyway. From corporate events to private celebrations, discover our expertise." />
        <link rel="preload" href={aboutImage.src} as="image" />
        <meta property="og:title" content="Our Projects - Alleyway" />
        <meta property="og:description" content="Discover the diverse range of projects we have successfully completed, showcasing our dedication and expertise in event management." />
        <meta property="og:image" content="https://alleywaydxb.com/images/about-image.webp" />
        <meta property="og:url" content="https://alleywaydxb.com/projects" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Projects, Event Management, Alleyway, Corporate Events, Dubai, Private Celebrations" />
      </Head>

      <Hero 
        image={aboutImage} 
        title="Always up to the challenge!" 
        paragraph="The Projects we've successfully completed"
        titleClassName="text-lightMustard text-5xl md:text-7xl font-bold"
        paragraphClassName="text-grayCustom mt-4 text-lg md:text-xl"
      />

      <main className="relative overflow-hidden">
        <HowWeWork/>
        <SuccessfullyDeliveredSections />
        <SatisfiedClientsSection/>
      </main>
    </>
  );
}

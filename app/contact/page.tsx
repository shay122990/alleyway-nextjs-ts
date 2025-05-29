"use client";

import Head from "next/head";
import Hero from "@/components/layout/Hero";
import contactImage from "@/public/images/contact-image.jpg";
import MeetTheTeamSection from "./components/Meet-The-Team-Section";
import ContactFormSection from "./components/Contact-Form-Section";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Alleyway Event & Project Management in Dubai</title>
        <meta name="description" content="Get in touch with Alleyway for your event management needs in Dubai." />
        <link rel="preload" href={contactImage.src} as="image" />
        <meta property="og:title" content="Contact Us - Alleyway" />
        <meta property="og:image" content="https://alleywaydxb.com/images/contact-image.jpg" />
        <meta property="og:url" content="https://alleywaydxb.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Alleyway, Events, Contact, Event Management, Project Management, Dubai" />
      </Head>

      <Hero 
        image={contactImage} 
        title="Contact Us"
        paragraph="Let Us Make Your Life Easier"
        titleClassName="text-4xl md:text-6xl font-extrabold text-lightMustard text-center"
        paragraphClassName="text-lg md:text-xl text-aqua text-center mt-4"
      />

      <main>
        <MeetTheTeamSection/>
        <ContactFormSection/>
      </main>
    </>
  );
}

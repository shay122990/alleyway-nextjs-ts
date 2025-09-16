"use client";

import Head from "next/head";
import ImageHero from "@/components/layout/ImageHero";
import contactHero from "@/public/images/projects-page/monshaat.webp";
import MeetTheTeamSection from "./components/Meet-The-Team-Section";
import ContactFormSection from "./components/Contact-Form-Section";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Alleyway Event & Project Management in Dubai</title>
        <meta
          name="description"
          content="Get in touch with Alleyway for your event management needs in Dubai."
        />
        <link rel="preload" href={contactHero.src} as="image" />
        <meta property="og:title" content="Contact Us - Alleyway" />
        <meta
          property="og:image"
          content="https://alleywaydxb.com/images/projects-page/monshaat.webp"
        />
        <meta property="og:url" content="https://alleywaydxb.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Alleyway, Events, Contact, Event Management, Project Management, Dubai"
        />
      </Head>

      <ImageHero
        image={contactHero}
        title="Contact Us"
        paragraph="Let Us Make Your Life Easier"
        titleClassName="text-lightMustard text-[clamp(2rem,6vw,6rem)] font-bold"
        paragraphClassName="text-white mt-4 text-[clamp(1rem,3vw,2rem)] font-semibold"
      />
      <main>
        <MeetTheTeamSection />
        <ContactFormSection />
      </main>
    </>
  );
}

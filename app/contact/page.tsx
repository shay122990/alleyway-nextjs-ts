"use client";

import Head from "next/head";
import Hero from "@/components/layout/Hero";
import contactImage from "@/public/images/contact-image.jpg";
// import ContactForm from "./components/Contact-Form";
// import MeetTheTeam from "./components/MeetTheTeam";
import ContactSection from "./components/Contact-Form";

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
        {/* <div className="relative bg-gradient-to-b from-[#fef5e7] via-[#c9eee8] via-40% to-[#fea536] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle, #2bbfbb33 0%, transparent 70%)]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle, #fea53633 0%, transparent 70%)]"></div>
        </div>
          <MeetTheTeam />
        <div className="relative z-10">
          <ContactForm />
        </div>
        </div> */}
        <ContactSection />
      </main>
    </>
  );
}

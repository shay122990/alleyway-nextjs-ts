import Head from 'next/head';
import Hero from '@/components/layout/Hero';
import HomeIntro from "./components/Home-Intro";
import HomeServicesSections from "./components/Home-Services-Sections";
import TimelineProjects from './components/TimeLineProjects';
import ClientLogoBanner from './components/ClientLogoBanner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Event & Project Management Company in Dubai | Alleyway</title>
        <meta name="description" content="Alleyway is a leading event and project management company in Dubai, offering comprehensive services for all types of events."/>
        <link rel="preload" href="hero-video.mp4" as="image" />
        <link rel="preload" href="/styles/globals.css" as="style" />
        <link rel="preload" href={`https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap`} as="style"/>
        <meta name="keywords"content="event management, trade shows, project management, corporate events, wedding planning, event planning, Dubai events, private events, exhibition planning, audio-visual services, creative services, exhibition design, logistics management, event coordination"/>
        <meta property="og:title"content="Alleyway - Premier Events Management Company in Dubai"/>
        <meta property="og:description"content="Alleyway is a top events management company in Dubai, specializing in event planning and project management."/>
        <meta property="og:image"content="https://alleywaydxb.com/images/homeHero.webp"/>
        <meta property="og:url" content="https://alleywaydxb.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Hero
        video="/hero-video.mp4"
        title="The Events Management Company"
        paragraph="We provide top-notch services to meet your needs."
        priority={true}
        hideContent={true}
        isHomePage={true}
      />
      <main className='bg-eggshell'>
        <HomeIntro />
        <HomeServicesSections/>
        <ClientLogoBanner/>
        <TimelineProjects/>
      </main>
    </>
  );
}

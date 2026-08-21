import VideoHero from "./layout/VideoHero";
import HomeIntro from "./components/Home-Intro";
import HomeServicesSections from "./components/Home-Services-Sections";
import TimelineProjects from "./components/Time-Line-Projects";
import ClientLogoBanner from "./components/Client-Logo-Banner";

export const metadata = {
  title: "Event & Project Management Company in Dubai | Alleyway",
  description:
    "Alleyway is an event and project management company in Dubai specializing in exhibitions, corporate events, private events, creative services and audio-visual production.",
  alternates: {
    canonical: "https://alleywaydxb.com/",
  },
  openGraph: {
    title: "Event & Project Management Company in Dubai | Alleyway",
    description:
      "Alleyway is an event and project management company in Dubai specializing in exhibitions, corporate events, private events, creative services and audio-visual production.",
    url: "https://alleywaydxb.com/",
    siteName: "Alleyway",
    images: [
      {
        url: "https://alleywaydxb.com/images/logo-icons/alleyway-1.png",
        width: 1200,
        height: 630,
        alt: "Alleyway event and project management",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <VideoHero video="/hero-video.mp4" />

      <main className="bg-eggshell">
        <HomeIntro />
        <HomeServicesSections />
        <ClientLogoBanner />
        <TimelineProjects />
      </main>
    </>
  );
}

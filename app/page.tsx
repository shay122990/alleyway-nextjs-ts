import Hero from "@/components/layout/hero/Hero";
import Head from 'next/head';
import type { StaticImageData } from 'next/image';

import  homeImage from  "@/public/images/header-home.jpg"
import HomeCarousel from "@/components/layout/home-carousel/Home-Carousel";

type HeroProps = {
  image: StaticImageData;
};
export default function Home() {
  return (
    <>
      <Head>
      <meta name="description" content="Alleyway - Plan Any Event With Us " />
      </Head>
      <Hero image={homeImage}/>
      <main>
        <HomeCarousel/>
      </main>
    </>
  );
}

import styles from "./page.module.css";
import Hero from "@/components/layout/hero/Hero";
import Head from 'next/head';
import Loader from "@/components/common/loader/Loader";
import type { StaticImageData } from 'next/image';

import  homeImage from  "@/public/images/header-home.jpg"

type HeroProps = {
  image: StaticImageData;
};
export default function Home() {
  return (
    <>
      <Head>
      <meta name="description" content="Alleyway - Plan Any Event With Us " />
      </Head>
      <main className={styles.main}>
        <Hero image={homeImage}/>
        <Loader/>
      </main>
    </>
  );
}

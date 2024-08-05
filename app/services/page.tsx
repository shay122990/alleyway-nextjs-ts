import styles from "../page.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import projectsImage from "@/public/images/projects-image.jpg"


export default function Services() {
  return (
    <>
    <Head>
      <title>Alleyway Services</title>
      <meta name="contact-alleyway" content="Look what you made me do" />
      {/* Additional metadata and tags */}
    </Head>
    <Hero image={projectsImage}/>
    <main className={styles.main}>
      Services Page Content
    </main>
  </>
  )
}

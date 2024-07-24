import styles from "../page.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import contactImage from "@/public/images/contact-image.jpg"
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Alleyway</title>
        <meta name="contact-alleyway" content="Get in touch with alleyway" />
        {/* Additional metadata and tags */}
      </Head>
      <Hero image={contactImage}/>
      <main className={styles.main}>
        Contact Page Content
      </main>
    </>
  )
}

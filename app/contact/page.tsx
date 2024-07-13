import styles from "../page.module.css";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Alleyway</title>
        <meta name="contact-alleyway" content="Get in touch with alleyway" />
        {/* Additional metadata and tags */}
      </Head>
      <main className={styles.main}>
        Contact Page Content
      </main>
    </>
  )
}

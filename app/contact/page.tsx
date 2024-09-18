import styles from "./Contact.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import contactImage from "@/public/images/contact-image.jpg"
import ContactForm from "./components/contact-form/Contact-Form";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Alleyway</title>
        <meta name="contact-alleyway" content="Get in touch with alleyway" />
        {/* Additional metadata and tags */}
      </Head>
      <Hero image={contactImage} title='Contact Us'
        paragraph="Let Us Make Your Life Easier"
        titleClassName={styles.contactTitle}
        paragraphClassName={styles.contactParagraph}
      />
      <main className={styles.main}>
        <ContactForm/>
      </main>
    </>
  )
}

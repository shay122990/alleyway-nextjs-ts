import styles from "./Contact.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import contactImage from "@/public/images/contact-image.jpg";
import ContactForm from "./components/contact-form/Contact-Form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Alleyway</title>
        <meta name="description" content="Get in touch with Alleyway" />
        <link rel="preload" href={contactImage.src} as="image" />
        <meta name="description" content="Get in touch with Alleyway" />
        <meta property="og:title" content="Contact Us - Alleyway" />
        <meta property="og:description" content="Reach out to Alleyway for all your event management needs." />
        <meta property="og:image" content="https://alleywaydxb.com/images/contact-image.jpg" />
        <meta property="og:url" content="https://alleywaydxb.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
        <Hero 
          width={1920}
          height={1440}
          image={contactImage} 
          title='Contact Us'
          paragraph="Let Us Make Your Life Easier"
          titleClassName={styles.contactTitle}
          paragraphClassName={styles.contactParagraph}
        />
      <main className={styles.main}>
        <ContactForm />
      </main>
    </>
  );
}

import styles from "./Contact.module.css";
import React, { Suspense } from "react";
import Head from "next/head";
import Loader from "@/components/common/loader/Loader";
import contactImage from "@/public/images/contact-image.jpg";
import dynamic from 'next/dynamic';
import ContactForm from "./components/contact-form/Contact-Form";

const DynamicHero = dynamic(() => import('@/components/layout/hero/Hero'), {
  ssr: false,
  loading: () => <Loader  />,
});

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Alleyway</title>
        <link rel="preload" href={contactImage.src} as="image" />
        <meta name="description" content="Get in touch with Alleyway" />
      </Head>
      <Suspense fallback={<Loader  />}>
        <DynamicHero 
          image={contactImage} 
          title='Contact Us'
          paragraph="Let Us Make Your Life Easier"
          titleClassName={styles.contactTitle}
          paragraphClassName={styles.contactParagraph}
        />
      </Suspense>
      <main className={styles.main}>
        <ContactForm />
      </main>
    </>
  );
}

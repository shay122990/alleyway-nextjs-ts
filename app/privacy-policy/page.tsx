import styles from "./Privacy-Policy.module.css";
import Head from "next/head";
import Hero from "@/components/layout/hero/Hero";
import  homeImage from  "@/public/images/header-home.jpg"



const PrivacyPolicy = () => {
  return (
    <>
     <Head>
      <meta name="description" content="Alleyway - Privacy Policy" />
     </Head>
     <Hero image={homeImage}  title="Privacy Policy" 
        paragraph="Your privacy is your business" 
        titleClassName={styles.homeTitle}
        paragraphClassName={styles.homeParagraph}/>
     <main>
        <h1>Privacy Policy Content</h1>
     </main>
    </>
  )
}

export default PrivacyPolicy

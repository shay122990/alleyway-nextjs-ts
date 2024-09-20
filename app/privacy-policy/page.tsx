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
        <h1>Privacy Policy AlleyWay</h1>
        <p>
        At AlleyWay, we value and respect your privacy. This Privacy Policy
        outlines how we handle any information collected through our website,
        which is designed solely for informational purposes.
      </p>

      <h2>1. Information Collection</h2>
      <p>
        We do not collect or store any personal information from users browsing
        our website. Our website is informational only and does not require
        users to create accounts, log in, or provide any personal details to
        access its content.
      </p>

      <h2>2. Email Submission Form</h2>
      <p>
        AlleyWay provides an email submission form for inquiries or
        event-related questions. Any information submitted through this form,
        including your name and email address, will solely be used to respond to
        your query. We do not store this information for any future use, and it
        is not shared with third parties.
      </p>

      <h2>3. No Data Storage</h2>
      <p>
        AlleyWay does not store, retain, or collect any personal data from
        visitors. Once your inquiry has been addressed, all corresponding email
        data is securely managed and not kept for any marketing or database
        purposes.
      </p>

      <h2>4. Third-Party Links</h2>
      <p>
        Our website may contain links to external websites or services. AlleyWay
        is not responsible for the privacy practices or content of these
        third-party sites. We encourage you to review their privacy policies
        before sharing any personal information.
      </p>

      <h2>5. Cookies</h2>
      <p>
        AlleyWay does not use cookies or other tracking technologies to monitor
        or collect visitor data.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy as needed. Any
        changes will be posted on this page with an updated revision date.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions regarding our Privacy Policy or how your
        information is handled, feel free to reach out to us at
        <strong> [email address]</strong>.
      </p>

      <p>Last Updated: [Insert Date]</p>
     </main>
    </>
  )
}

export default PrivacyPolicy

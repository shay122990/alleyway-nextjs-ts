"use client";

import Head from "next/head";
import ImageHero from "@/components/layout/ImageHero";
import homeImage from "@/public/images/header-home.jpg";

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Head>
        <title>Privacy Policy - Alleyway</title>
        <meta
          name="description"
          content="Your privacy is our priority at Alleyway. Read our Privacy Policy for details on how we protect your information."
        />
        <link rel="preload" href={homeImage.src} as="image" />
        <meta property="og:title" content="Privacy Policy - Alleyway" />
        <meta
          property="og:description"
          content="Learn about our commitment to protecting your privacy and how we manage your data."
        />
        <meta
          property="og:image"
          content="https://alleywaydxb.com/images/header-home.jpg"
        />
        <meta
          property="og:url"
          content="https://alleywaydxb.com/privacy-policy"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Privacy Policy, Alleyway, Data Protection, User Privacy, Information Security, Dubai"
        />
      </Head>

      <ImageHero
        image={homeImage}
        title="Privacy Policy"
        paragraph="Your privacy is your business"
        titleClassName="text-lightMustard text-[clamp(2rem,6vw,6rem)] font-bold"
        paragraphClassName="text-white mt-4 text-[clamp(1rem,3vw,2rem)] font-semibold"
      />

      <main className="px-4 py-12 bg-white text-black">
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 bg-eggshell text-gray-900 p-6 border-2 border-tealCustom rounded-lg">
          <h1 className="text-3xl font-bold text-lightMustard">Privacy Policy AlleyWay</h1>

          <p>
            At AlleyWay, we value and respect your privacy. This Privacy Policy
            outlines how we handle any information collected through our website,
            which is designed solely for informational purposes.
          </p>

          <h2 className="text-2xl font-semibold">1. Information Collection</h2>
          <p>
            We do not collect or store any personal information from users browsing
            our website. Our website is informational only and does not require
            users to create accounts, log in, or provide any personal details to
            access its content.
          </p>

          <h2 className="text-2xl font-semibold">2. Email Submission Form</h2>
          <p>
            AlleyWay provides an email submission form for inquiries or
            event-related questions. Any information submitted through this form,
            including your name and email address, will solely be used to respond to
            your query. We do not store this information for any future use, and it
            is not shared with third parties.
          </p>

          <h2 className="text-2xl font-semibold">3. No Data Storage</h2>
          <p>
            AlleyWay does not store, retain, or collect any personal data from
            visitors. Once your inquiry has been addressed, all corresponding email
            data is securely managed and not kept for any marketing or database
            purposes.
          </p>

          <h2 className="text-2xl font-semibold">4. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites or services. AlleyWay
            is not responsible for the privacy practices or content of these
            third-party sites. We encourage you to review their privacy policies
            before sharing any personal information.
          </p>

          <h2 className="text-2xl font-semibold">5. Cookies</h2>
          <p>
            AlleyWay does not use cookies or other tracking technologies to monitor
            or collect visitor data.
          </p>

          <h2 className="text-2xl font-semibold">6. Changes to This Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy as needed. Any
            changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions regarding our Privacy Policy or how your
            information is handled, feel free to reach out to us at{" "}
            <a
              href="mailto:hello@alleywaydxb.com"
              className=" underline underline-offset-4 hover:text-tealCustom lowercase"
            >
              hello@alleywaydxb.com
            </a>.
          </p>

          <p className="pt-4 text-sm text-gray-600">Last Updated: {currentDate}</p>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;

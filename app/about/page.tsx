import styles from "../page.module.css"
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Alleyway</title>
        <meta name="description" content="Learn more about our company's history and mission."/>
        <meta name="keywords" content="company history, mission statement, about us" />

        {/* Additional metadata and tags */}
      </Head>
      <main className={styles.main}>
        About Page Content
      </main>
    </>
  );
}

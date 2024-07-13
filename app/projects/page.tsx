import styles from "../page.module.css";
import Head from "next/head";

export default function Projects() {
  return (
    <>
    <Head>
      <title>Alleyway Projects</title>
      <meta name="contact-alleyway" content="Look what you made me do" />
      {/* Additional metadata and tags */}
    </Head>
    <main className={styles.main}>
      Projects Page Content
    </main>
  </>
  )
}

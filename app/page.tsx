import styles from "./page.module.css";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="cz-shortcut-listen" content="true" />
        {/* Add more meta tags as needed */}
      </Head>
      <main className={styles.main}>
      </main>
    </>
  );
}

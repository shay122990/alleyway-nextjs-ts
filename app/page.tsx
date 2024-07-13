import styles from "./page.module.css";
import HomeContent from "../components/HomeContent";

export default function Home() {
  return (
   <main className={styles.main}>
    <HomeContent/>
   </main>
  );
}

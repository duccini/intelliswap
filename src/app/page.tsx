import Challenges from "./_components/Challenges";
import HomeHero from "./_components/Homehero";
import HowItWorks from "./_components/HowItWorks";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHero />
        <Challenges />
        <HowItWorks />
      </main>
      <footer className={styles.footer}>
        <p>footer</p>
      </footer>
    </div>
  );
}

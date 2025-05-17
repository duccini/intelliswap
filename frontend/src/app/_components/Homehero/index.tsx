import styles from "./Homehero.module.css";
import Button from "@/components/Button";

export default function HomeHero() {
  return (
    <div className={styles.homeHero}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>IntelliSwap</h1>
          <p>
            Nós somos o <span>Nubank</span> do DeFi!
          </p>
        </div>

        <div className={styles.buttons}>
          <Button path="/#howItWorks" text="Como funciona" type="secondary" />

          <Button path="/pools" text="Quero investir" type="primary" />
        </div>
      </div>
    </div>
  );
}

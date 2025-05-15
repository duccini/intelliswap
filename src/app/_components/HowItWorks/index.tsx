import styles from "./HowItWorks.module.css";

import HowItWorksContainer from "@/components/HowItWorksContainer";

export default function HowItWorks() {
  return (
    <div className={styles.howItWorksContainer}>
      <div className={styles.howItWorksContent}>
        <div className={styles.headerTitle}>
          <h2>
            Como o <strong>IntelliSwap</strong> funciona
          </h2>
        </div>

        <HowItWorksContainer />
      </div>
    </div>
  );
}

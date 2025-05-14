import Image from "next/image";

import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.headerContent}>
        <div className={styles.headerImg}>
          <Image
            src="/intelliswap_logo.png"
            alt="IntelliSwap Logo"
            fill
            quality={100}
            className={styles.logo}
          />
        </div>
        <div className={styles.contato}>
          <Link href="/contato">Contato</Link>
        </div>
      </header>
    </div>
  );
}

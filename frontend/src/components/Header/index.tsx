import Image from "next/image";

import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <header className={styles.headerContent}>
        <div className={styles.headerImg}>
          <Link href="/">
            <Image
              src="/intelliswap_logo.png"
              alt="IntelliSwap Logo"
              width={120}
              height={70}
              priority
              className={styles.logo}
              quality={100}
            />
          </Link>
        </div>
        <div className={styles.contato}>
          <Link href="/contato">Contato</Link>
        </div>
      </header>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export default function Button() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const btn = linkRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      btn.style.setProperty("--x", `${x}deg`);
    };

    btn.addEventListener("mousemove", handleMouseMove);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Link href="/#" className={styles.buttonContainer} ref={linkRef}>
      <div className={styles.button}>
        <i></i>
        <i></i>
        <button type="button">Teste do botão</button>
      </div>
    </Link>
  );
}

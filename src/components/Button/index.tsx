"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  type: string;
}

export default function Button({ text, type = "primary" }: ButtonProps) {
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
        <button className={`${styles[type]}`} type="button">
          {text}
        </button>
      </div>
    </Link>
  );
}

import Image from "next/image";

import styles from "./HowItWorksCard.module.css";

interface HowItWorksCardProps {
  card: {
    title: string;
    description: string;
    image: string;
  };
}

export default function HowItWorksCard({ card }: HowItWorksCardProps) {
  return (
    <div className={styles.itemContent}>
      <div className={styles.itemImage}>
        <Image
          src={card.image}
          fill
          alt={card.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.itemDetails}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    </div>
  );
}

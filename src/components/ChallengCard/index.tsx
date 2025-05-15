import styles from "./ChallengeCard.module.css";

interface ChallengeCard {
  title: string;
  description: string;
  date: string;
  color: string;
}

export default function ChallengeCard({
  title,
  description,
  date,
  color,
}: ChallengeCard) {
  return (
    <div className={styles.challengeCard}>
      <h3 className={`${styles.challengeTitle} ${styles[color]}`}>
        {title} <span>USD</span>
      </h3>
      <h4 className={styles.challengeDescription}>{description}</h4>
      <h5 className={styles.challengeDate}>{date}</h5>
    </div>
  );
}

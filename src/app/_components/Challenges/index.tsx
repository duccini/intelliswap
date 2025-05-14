import ChallengeCard from "@/components/ChallengCard";
import styles from "./Challenges.module.css";

export default function Challenges() {
  return (
    <div className={styles.challengesContainer}>
      <div className={styles.challengesContent}>
        <div className={styles.challengesDetails}>
          <ChallengeCard
            title="4B"
            description="Taxas geradas aos provedores de liquidez do pool usdc-weth"
            date="Ao longo de 2024"
            color="challengeCardGreen"
          />

          <ChallengeCard
            title="106M"
            description="Negociado na Uniswap"
            date="Dezembro de 2024"
            color="challengeCard3"
          />

          <ChallengeCard
            title="463B"
            description="Volume mensal negociado em DEXS"
            date="Dezembro de 2024"
            color="challengeCardBlue"
          />

          <ChallengeCard
            title="96M"
            description="Negociado na PancakeSwap"
            date="Dezembro de 2024"
            color="challengeCard4"
          />

          <ChallengeCard
            title="6.26B"
            description="Valor total alocado na uniswap v3"
            date="Abril de 2024"
            color="challengeCard5"
          />

          <ChallengeCard
            title="58M"
            description="Negociado na Raydium"
            date="Dezembro de 2024"
            color="challengeCard6"
          />
        </div>

        <div className={styles.challengesHeader}></div>
      </div>
    </div>
  );
}

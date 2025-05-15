"use client";

import { useState } from "react";
import HowItWorksCard from "../HowItWorksCard";
import styles from "./HowItWorksContainer.module.css";

const cards = {
  riskProfile: {
    title: "Perfil de risco",
    description:
      "Através de um questionário, a IA analisa o seu perfil de risco e sugere o melhor investimento para você.",
    image: "/image1.jpg",
  },
  verifiedAI: {
    title: "IA Verificada",
    description:
      "A IA é verificada por especialistas do mercado financeiro, garantindo segurança e confiabilidade.",
    image: "/image2.jpg",
  },
  liquidityPool: {
    title: "Pool de Liquidez",
    description:
      "A liquidez é garantida através de um pool de liquidez, permitindo que você compre e venda seus ativos a qualquer momento.",
    image: "/image3.jpg",
  },
  totalValue: {
    title: "Valor total",
    description:
      "O valor total investido é atualizado em tempo real, permitindo que você acompanhe o desempenho do seu investimento.",
    image: "/image4.jpg",
  },
  invest: {
    title: "Investir",
    description:
      "O valor total investido é atualizado em tempo real, permitindo que você acompanhe o desempenho do seu investimento.",
    image: "/image5.jpg",
  },
};

export default function HowItWorksContainer() {
  const [cardItem, setCardItem] = useState(cards.riskProfile);

  return (
    <div className={styles.itemContainer}>
      <div className={styles.headerNav}>
        <ul className={styles.navbar}>
          <li onClick={() => setCardItem(cards.riskProfile)}>
            Perfil de risco
          </li>

          <li onClick={() => setCardItem(cards.verifiedAI)}>IA Verificada</li>
          <li onClick={() => setCardItem(cards.liquidityPool)}>
            Pool de Liquidez
          </li>
          <li onClick={() => setCardItem(cards.totalValue)}>Valor total</li>
          <li onClick={() => setCardItem(cards.invest)}>Investir</li>
        </ul>
      </div>

      <HowItWorksCard card={cardItem} />
    </div>
  );
}

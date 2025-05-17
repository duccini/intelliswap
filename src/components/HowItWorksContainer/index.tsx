"use client";

import { useState } from "react";
import HowItWorksCard from "../HowItWorksCard";
import styles from "./HowItWorksContainer.module.css";

const cards = {
  riskProfile: {
    title: "Perfil de risco",
    description:
      "Selecionar os pools de liquidez baseado no seu perfil de risco no IntelliSwap é literalmente simples como clicar em um botão.\nNo Risco Baixo você verá pools onde os 2 tokens são  stablecoins. No  Risco Médio você verá tokens com 1 stablecoin e 1 altcoin. Risco Alto você verá pools onde os 2 tokens são altcoins.",
    image: "/intelliswap_table.jpg",
  },
  zkVerify: {
    title: "ZKVerify",
    description:
      "IntelliSwap utiliza a tecnologia ZKVerify da empresa americana Horizon Labs para garantir a segurança e transparência dos contratos inteligentes e dos modelos de IA.\nDessa forma, você pode ficar tranquilo sabendo que o seu investimento está seguro e verificado.",
    image: "/zkverify.jpg",
  },
  verifiedAI: {
    title: "IA Verificada",
    description:
      "IA caixa preta? Não no IntelliSwap! Utilizamos modelos e bases de dados auditados pelo tecnologia ZKVerify da empresa americana Horizon Labs.\nDessa forma, oferecemos o que existe de melhor no mercado para precificação de preço reforçando nossa transparência e confiabilidade.",
    image: "/verified-ia.png",
  },

  totalValue: {
    title: "Valor total",
    description:
      "No IntelliSwap você não precisa adquirir os tokens do pools de liquidez nem calcular a distribuição de cada token na pool. \nO IntelliSwap faz tudo isso para você!",
    image: "/total-value.png",
  },
  invest: {
    title: "Investir",
    description:
      "O IntelliSwap guarda o seu investimento em contratos inteligentes verificados pela tecnologia ZKVerify.\nDessa forma, você tem a segurança que o seu investimento está sendo feito exatamente como combinado, sem surpresas quando você for liquidar a sua posição.",
    image: "/risk-profile.jpg",
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
          <li onClick={() => setCardItem(cards.zkVerify)}>ZK Verify</li>
          <li onClick={() => setCardItem(cards.verifiedAI)}>IA Verificada</li>

          <li onClick={() => setCardItem(cards.totalValue)}>Valor total</li>
          <li onClick={() => setCardItem(cards.invest)}>Investir</li>
        </ul>
      </div>

      <HowItWorksCard card={cardItem} />
    </div>
  );
}

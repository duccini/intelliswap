"use client";

import { useState } from "react";
import { ArrowRight, HelpCircle } from "lucide-react";

import { Pool } from "@/types/pool";
import { filterPools } from "@/utils/fetchPools";

import styles from "./PoolsTable.module.css";
import { formatNumber } from "@/utils/formatNumber";
import { fetchAPR } from "@/utils/api";

interface Props {
  pools: Pool[];
}

export default function PoolsTable({ pools }: Props) {
  const [filter, setFilter] = useState<"all" | "low" | "medium" | "high">(
    "all"
  );

  let info = "";
  switch (filter) {
    case "all":
      info =
        "Pools de liquidez com maiores scores. Pode não ser indicado para o seu perfil de risco.";
      break;

    case "low":
      info =
        "Pools de liquidez formado por dois stablecoins. Risco menor assim como potencial de retorno.";
      break;

    case "medium":
      info =
        "Pools de liquidez formado por um stablecoin e um altcoin. Risco médio assim como potencial de retorno.";
      break;

    case "high":
      info =
        "Pools de liquidez formado por dois altcoins. Risco maior assim como potencial de retorno.";
      break;

    default:
      info = "Perfil de risco não encontrado";
      break;
  }

  const getFiltered = () => {
    if (filter === "all") return pools.slice(0, 10);
    return filterPools(pools, filter);
  };

  const handleGetAPR = async (pool_address: string, feeTier: number) => {
    try {
      const apr = await fetchAPR(pool_address, feeTier);
      const formattedAPR = `${apr.toFixed(2)}%`;
      alert(`APR previsto: ${formattedAPR}`);
    } catch (error: any) {
      alert(`Erro ao buscar APR: ${error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <button
          className={
            filter === "all" ? styles.buttonActive : styles.normalButton
          }
          onClick={() => setFilter("all")}
        >
          Explorar Pools
        </button>
        <button
          className={
            filter === "low" ? styles.buttonActive : styles.normalButton
          }
          onClick={() => setFilter("low")}
        >
          Risco Baixo
        </button>
        <button
          className={
            filter === "medium" ? styles.buttonActive : styles.normalButton
          }
          onClick={() => setFilter("medium")}
        >
          Risco Médio
        </button>
        <button
          className={
            filter === "high" ? styles.buttonActive : styles.normalButton
          }
          onClick={() => setFilter("high")}
        >
          Risco Alto
        </button>
      </div>

      <div className={styles.info}>
        <h2>{info}</h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pool</th>
            <th>
              Fee Tier{" "}
              <span title="Taxa da pool">
                <HelpCircle size={16} className={styles.icon} />
              </span>
            </th>
            <th>
              TVL{" "}
              <span title="Valor Total da pool">
                <HelpCircle size={16} className={styles.icon} />
              </span>
            </th>
            <th>
              24h Vol{" "}
              <span title="Valor negociado na pool em 24h">
                <HelpCircle size={16} className={styles.icon} />
              </span>
            </th>
            <th>
              24h Fee{" "}
              <span title="Taxa paga aos provedores de liquidez do pool">
                <HelpCircle size={16} className={styles.icon} />
              </span>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {getFiltered().map((pool) => (
            <tr key={pool.id}>
              <td>
                {pool.token0.symbol}-{pool.token1.symbol}
              </td>
              <td>{pool.feeTier / 10000}%</td>
              <td>{formatNumber(pool.totalValueLockedUSD)}</td>
              <td>{formatNumber(pool.volumeUSD)}</td>
              <td>{formatNumber(pool.feesUSD)}</td>
              <td>
                <ArrowRight
                  size={18}
                  onClick={() => handleGetAPR(pool.id, pool.feeTier)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

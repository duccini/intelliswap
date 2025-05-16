"use client";

import { useState } from "react";
import { Pool } from "@/types/pool";
import { filterPools } from "@/utils/fetchPools";
import Link from "next/link";

import styles from "./PoolsTable.module.css";

interface Props {
  pools: Pool[];
}

export default function PoolsTable({ pools }: Props) {
  const [filter, setFilter] = useState<"all" | "low" | "medium" | "high">(
    "all"
  );

  const getFiltered = () => {
    if (filter === "all") return pools.slice(0, 10);
    return filterPools(pools, filter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>Explorar Pools</button>
        <button onClick={() => setFilter("low")}>Risco Baixo</button>
        <button onClick={() => setFilter("medium")}>Risco Médio</button>
        <button onClick={() => setFilter("high")}>Risco Alto</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pool</th>
            <th>Fee Tier</th>
            <th>TVL</th>
            <th>24h Vol</th>
            <th>24h Fee / TVL</th>
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
              <td>${pool.totalValueLockedUSD.toFixed(2)}</td>
              <td>${pool.volumeUSD.toFixed(2)}</td>
              <td>{(pool.feesUSD / pool.totalValueLockedUSD).toFixed(6)}</td>
              <td>
                <Link href={`/pool/${pool.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// app/Pools/page.tsx
import { fetchPools } from "@/utils/fetchPools";
import { Pool } from "@/types/pool";
import PoolsTable from "./_components/PoolsTable/index";

import styles from "./Pools.module.css";

export default async function PoolsPage() {
  const pools: Pool[] = await fetchPools();

  return (
    <div className={styles.poolsContainer}>
      <div className={styles.poolsContent}>
        <div className={styles.poolsHeader}>
          <h1>Invista em um pool de liquidez</h1>
          <p>Escolha um pool de liquidez com base no ser perfil de risco</p>
        </div>

        <div className={styles.pools}>
          <PoolsTable pools={pools} />
        </div>
      </div>
    </div>
  );
}

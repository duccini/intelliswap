// app/Pools/page.tsx
import { fetchPools } from "@/utils/fetchPools";
import { Pool } from "@/types/pool";
import PoolsTable from "./_components/PoolsTable/index";

export default async function PoolsPage() {
  const pools: Pool[] = await fetchPools();

  return <PoolsTable pools={pools} />;
}

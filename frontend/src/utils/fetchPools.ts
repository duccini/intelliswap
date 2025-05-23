import { Pool, RawPool } from "@/types/pool";

const API_KEY = process.env.THE_GRAPH_API_KEY;
const STABLECOINS = ["USDC", "USDT", "DAI", "TUSD", "USDP", "GUSD"];

const query = `{
  pools(first: 50, orderBy: volumeUSD, orderDirection: desc) {
    id
    token0 { symbol id }
    token1 { symbol id }
    totalValueLockedUSD
    feeTier
    poolDayData(first: 1, orderBy: date, orderDirection: desc) {
      volumeUSD
      feesUSD
    }
  }
}`;

export async function fetchPools(): Promise<Pool[]> {
  const res = await fetch(
    `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    }
  );

  const json = await res.json();

  return json.data.pools.map((pool: RawPool) => ({
    id: pool.id,
    token0: pool.token0,
    token1: pool.token1,
    totalValueLockedUSD: parseFloat(pool.totalValueLockedUSD),
    volumeUSD: parseFloat(pool.poolDayData?.[0]?.volumeUSD ?? "0"),
    feesUSD: parseFloat(pool.poolDayData?.[0]?.feesUSD ?? "0"),
    feeTier: parseFloat(pool.feeTier),
  }));
}

export function filterPools(
  pools: Pool[],
  risk: "low" | "medium" | "high"
): Pool[] {
  return pools
    .filter((pool) => {
      const [a, b] = [pool.token0.symbol, pool.token1.symbol];
      const isStable = (s: string) => STABLECOINS.includes(s);

      if (risk === "low") return isStable(a) && isStable(b);
      if (risk === "medium")
        return (isStable(a) && !isStable(b)) || (!isStable(a) && isStable(b));
      return !isStable(a) && !isStable(b);
    })
    .slice(0, 10);
}

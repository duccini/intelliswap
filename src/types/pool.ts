export interface Token {
  symbol: string;
  id: string;
}

export interface Pool {
  id: string;
  token0: { symbol: string };
  token1: { symbol: string };
  totalValueLockedUSD: number;
  volumeUSD: number;
  feesUSD: number;
}

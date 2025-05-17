export interface Token {
  symbol: string;
}

export interface RawPool {
  id: string;
  token0: { symbol: string; id: string };
  token1: { symbol: string; id: string };
  totalValueLockedUSD: string;
  feeTier: string;
  poolDayData: {
    volumeUSD: string;
    feesUSD: string;
  }[];
}

export interface PoolsResponse {
  data: {
    pools: RawPool[];
  };
}

export interface Pool {
  id: string;
  token0: Token;
  token1: Token;
  totalValueLockedUSD: number;
  volumeUSD: number;
  feesUSD: number;
  feeTier: number;
}

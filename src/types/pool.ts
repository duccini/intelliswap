export interface Token {
  symbol: string;
}

export interface RawPool {
  id: string;
  token0: Token;
  token1: Token;
  totalValueLockedUSD: string; // vem como string do The Graph
  volumeUSD: string;
  feesUSD: string;
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
}

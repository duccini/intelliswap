import requests
import os

API_KEY = os.getenv("GRAPHQL_API_KEY")

if not API_KEY:
   raise EnvironmentError("Variável de ambiente GRAPHQL_API_KEY não está definida.")

#API_KEY = "54b3ae486458761ae740097bf7665918"

GRAPHQL_URL = f"https://gateway.thegraph.com/api/{API_KEY}/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV"


def fetch_latest_pool_data(pool_id: str):
  query = {
    "query": f"""
    {{
      poolDayDatas(
        first: 1,
        orderBy: date,
        orderDirection: desc,
        where: {{ pool: \"{pool_id}\" }}
      ) {{
        feesUSD
        liquidity
        token0Price
        token1Price
        tvlUSD
        volumeUSD
      }}
    }}
    """
  }

  try:
    response = requests.post(GRAPHQL_URL, json=query)
    response.raise_for_status()
    data = response.json()

    if "errors" in data:
      raise Exception(f"Erro no GraphQL: {data['errors']}")

    return data["data"]["poolDayDatas"]

  except Exception as e:
    print(f"❌ Erro ao buscar dados da pool: {e}")
    return None

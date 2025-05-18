from graphql_client import fetch_latest_pool_data
from model_loader import load_model


def predict_apr(pool_address: str, fee_tier: int):
  pool_data = fetch_latest_pool_data(pool_address)

  if not pool_data:
      return None

  try:
    pool = pool_data[0]

    features = [
      float(pool['feesUSD']),
      float(pool['liquidity']),
      float(pool['token0Price']),
      float(pool['token1Price']),
      float(pool['tvlUSD']),
      float(pool['volumeUSD']),
      float(fee_tier)
    ]

    model = load_model()
    apr_today = model.predict([features])
    return float(apr_today[0])

  except Exception as e:
    print(f"❌ Erro ao preparar dados para o modelo: {e}")
    return None

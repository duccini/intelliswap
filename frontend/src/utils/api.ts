export const fetchAPR = async (
  pool_address: string,
  feeTier: number
): Promise<number> => {
  console.log(pool_address, feeTier);

  try {
    const response = await fetch("http://localhost:8000/predict_apr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pool_address, feeTier }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.detail || "Erro desconhecido na requisição");
    }

    const data = await response.json();
    return data.apr_today;
  } catch (error: any) {
    console.error("Erro ao buscar APR:", error);
    throw new Error(error.message);
  }
};

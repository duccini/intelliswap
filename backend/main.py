from dotenv import load_dotenv
import os 
load_dotenv()

from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from schemas import APRRequest
from predictor import predict_apr

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou especifique: ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict_apr")
def predict_apr_handler(payload: APRRequest):
    apr = predict_apr(payload.pool_address, payload.feeTier)

    if apr is None:
        raise HTTPException(
            status_code=400,
            detail="Erro ao calcular o APR. Verifique se o endereço da pool é válido e tente novamente."
        )

    return JSONResponse(content={"apr_today": apr})

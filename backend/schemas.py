from pydantic import BaseModel, Field

class APRRequest(BaseModel):
    pool_address: str = Field(..., description="Endereço da pool")
    feeTier: int = Field(..., ge=0, le=10000, description="Fee tier da pool (ex: 500, 3000, 10000)")

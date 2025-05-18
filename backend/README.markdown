# IntelliSwap - BackEnd

API desenvolvida com FastAPI para prever o APR de uma pool na Uniswap V3 usando um modelo de machine learning (Random Forest).

## 🚀 Funcionalidades

- Recebe via POST os campos `pool_address` e `feeTier`.
- Consulta os dados da pool no The Graph.
- Utiliza modelo Random Forest para prever APR.
- Retorna JSON com o campo `apr_today`.

## 📦 Tecnologias

- Python >= 3.8
- FastAPI
- Pydantic
- Scikit-learn
- Requests
- Joblib

## Instalação

```bash
# Clone o repositório
git clone <repo-url>
cd <repo-dir>

# Crie e ative um ambiente virtual
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Instale as dependências
pip install -r requirements.txt
```

## Execução

```bash
uvicorn main:app --reload
```

Acesse a documentação automática em: [http://localhost:8000/docs](http://localhost:8000/docs)

## 🧪 Requisição de exemplo

```json
POST /predict_apr
{
  "pool_address": "0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
  "feeTier": 3000
}
```

## 📁 Estrutura do Projeto

```
├── main.py                # Inicialização da API
├── schemas.py             # Validação de entrada com Pydantic
├── predictor.py           # Função principal de predição
├── graphql_client.py      # Consulta ao The Graph
├── model_loader.py        # Carregamento do modelo Random Forest
├── models/
│   └── random_forest_0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640.pkl
├── .env                   # Variáveis de ambiente (NÃO versionar)
├── .gitignore
├── requirements.txt
└── README.md
```

---

## Observações

- A variável `API_KEY` deve ser ajustada no arquivo `graphql_client.py`.
- O modelo `.pkl` precisa estar na pasta `models/`.

import joblib
import os

MODEL_DIR = "models"
MODEL_FILENAME = "random_forest_0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640.pkl"


def load_model():
    model_path = os.path.join(MODEL_DIR, MODEL_FILENAME)
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Modelo não encontrado em {model_path}")

    return joblib.load(model_path)

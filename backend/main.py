from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "YOUR_CLIPDROP_API_KEY"

@app.get("/")
def home():
    return {"status": "Clipdrop API running"}

@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    image = await file.read()

    response = requests.post(
        "https://clipdrop-api.co/remove-background/v1",
        files={"image_file": image},
        headers={"x-api-key": API_KEY}
    )

    return Response(content=response.content, media_type="image/png")
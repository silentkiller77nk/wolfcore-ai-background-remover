from fastapi import FastAPI, UploadFile, File
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "API running"}

@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    return {"error": "Backend deployed successfully but AI model not attached yet"}
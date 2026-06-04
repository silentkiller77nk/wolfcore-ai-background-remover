from fastapi import FastAPI, UploadFile, File
from fastapi.responses import Response
from rembg import remove
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS fix (VERY IMPORTANT for Vercel frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"status": "AI Background remover is running"}

@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    input_image = await file.read()
    output_image = remove(input_image)
    return Response(content=output_image, media_type="image/png")
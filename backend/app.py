from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from ultralytics import YOLO
import shutil, os, cv2, uuid

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # production: ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load YOLO model
MODEL_PATH = "C:/Users/shant/Desktop/Helmet_detection website/backend/model/best.pt"
yolo_model = YOLO(MODEL_PATH)

UPLOAD_DIR = "uploads"
RESULT_DIR = "results"
os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(RESULT_DIR, exist_ok=True)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Save uploaded file
        file_ext = os.path.splitext(file.filename)[1].lower()
        file_id = str(uuid.uuid4())
        file_path = os.path.join(UPLOAD_DIR, f"{file_id}{file_ext}")
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Image processing
        if file_ext in [".jpg", ".jpeg", ".png", ".bmp"]:
            results = yolo_model.predict(file_path, imgsz=512, conf=0.25)
            annotated_img = results[0].plot()
            result_path = os.path.join(RESULT_DIR, f"{file_id}_result.png")
            cv2.imwrite(result_path, cv2.cvtColor(annotated_img, cv2.COLOR_RGB2BGR))
            return {"file_url": f"/results/{file_id}_result.png", "file_type": "image"}

        # Video processing
        elif file_ext in [".mp4", ".avi", ".mov", ".mkv"]:
            cap = cv2.VideoCapture(file_path)
            fourcc = cv2.VideoWriter_fourcc(*'mp4v')
            fps = cap.get(cv2.CAP_PROP_FPS) or 30
            out_path = os.path.join(RESULT_DIR, f"{file_id}_result.mp4")
            out = None

            while cap.isOpened():
                ret, frame = cap.read()
                if not ret:
                    break

                results = yolo_model.predict(frame, imgsz=512, conf=0.25)
                annotated_frame = results[0].plot()

                if out is None:
                    h, w, _ = annotated_frame.shape
                    out = cv2.VideoWriter(out_path, fourcc, fps, (w, h))

                out.write(cv2.cvtColor(annotated_frame, cv2.COLOR_RGB2BGR))

            cap.release()
            if out:
                out.release()
            return {"file_url": f"/results/{file_id}_result.mp4", "file_type": "video"}

        else:
            return JSONResponse(content={"error": "Unsupported file type"}, status_code=400)

    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Serve results
@app.get("/results/{filename}")
def serve_result(filename: str):
    file_path = os.path.join(RESULT_DIR, filename)
    if os.path.exists(file_path):
        media_type = "video/mp4" if filename.endswith(".mp4") else "image/png"
        return FileResponse(file_path, media_type=media_type)
    return JSONResponse({"error": "File not found"}, status_code=404)

@app.get("/")
def root():
    return {"message": "Helmet Detection API running"}

# Run backend:
# uvicorn app:app --reload

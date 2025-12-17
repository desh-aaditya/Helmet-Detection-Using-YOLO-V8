# 🪖 Helmet Detection Using YOLOv8

## 📌 Overview
This project implements a real-time helmet detection system using the YOLOv8 object detection model, integrated with a web-based application. Users can upload images and videos through a website, which are processed on the backend using a trained YOLOv8 model. The detection results are displayed on the frontend with bounding boxes and confidence scores.

The system supports road safety monitoring, traffic surveillance, and automated traffic rule enforcement.

## 🎯 Problem Statement
Manual monitoring of helmet compliance is inefficient and prone to human error. There is a need for an automated and accurate system capable of detecting helmet usage at scale. This project provides an AI-driven web-based solution to identify helmet violations from uploaded images and videos in real time.

## 🚀 Features
- Web-based interface for image and video upload  
- Real-time detection of helmet and no-helmet cases  
- Processed output displayed directly on the frontend  
- Bounding boxes with class labels and confidence scores  
- Supports image, video, and live camera input  
- End-to-end integration between frontend and backend  

## 🌐 Website Workflow
1. User uploads an image or video through the website  
2. Media is sent to the backend server  
3. YOLOv8 performs object detection on the input  
4. Output is generated with annotations  
5. Results are displayed on the frontend  

This workflow enables seamless interaction with the detection system through a browser-based interface.

## 🧠 Technology Stack

### Frontend
- HTML  
- CSS  
- JavaScript  

### Backend
- Python  
- Flask  
- REST APIs  

### AI & Computer Vision
- YOLOv8 (Ultralytics)  
- PyTorch  
- OpenCV  

## 📊 Dataset
- Custom annotated dataset of motorcycle riders with and without helmets  
- Annotations in YOLO format  
- Dataset covers multiple environmental and lighting conditions  

## 📈 Results
- Achieved 90%+ detection accuracy  
- Real-time processing at 30+ FPS  
- Reduced manual monitoring effort by 70%  
- Accurate and consistent results via web-based visualization  

## 🛣️ Applications
- Traffic surveillance and monitoring  
- Smart city safety systems  
- Automated helmet violation detection  
- Road safety analytics platforms  

## 👨‍💻 Author
Aaditya Deshpande  
B.Tech – Information Technology  

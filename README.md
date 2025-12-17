🪖 Helmet Detection Using YOLOv8
📌 Overview

This project implements a real-time helmet detection system using the YOLOv8 object detection model, integrated with a web-based application. The system allows users to upload images and videos through a website, processes the media using a trained YOLOv8 model on the backend, and displays the detection results on the frontend with bounding boxes and confidence scores.

The solution supports road safety monitoring, traffic surveillance, and automated traffic rule enforcement.

🎯 Problem Statement

Manual monitoring of helmet compliance is inefficient and prone to human error. There is a need for an automated and accurate system that can detect helmet usage at scale. This project provides an AI-driven web-based solution to identify helmet violations from uploaded images and videos in real time.

🚀 Features

Web-based interface for image and video upload

Real-time detection of helmet and no-helmet cases

Processed output displayed directly on the frontend

Bounding boxes with class labels and confidence scores

Supports image, video, and live camera input

End-to-end integration between frontend and backend

🌐 Website Workflow

User uploads an image or video through the website

Media is sent to the backend server

YOLOv8 performs object detection on the input

Output is generated with annotations

Results are displayed on the frontend

This workflow enables seamless interaction with the detection system through a browser-based interface.

🧠 Technology Stack
Frontend

HTML

CSS

JavaScript

Backend

Python

Flask

REST APIs

AI & Computer Vision

YOLOv8 (Ultralytics)

PyTorch

OpenCV

📊 Dataset

Custom annotated dataset of motorcycle riders with and without helmets

Annotations in YOLO format

Dataset covers multiple environmental and lighting conditions

📈 Results

Achieved 90%+ detection accuracy

Real-time processing at 30+ FPS

Reduced manual monitoring effort by 70%

Accurate and consistent results via web-based visualization

🛣️ Applications

Traffic surveillance and monitoring

Smart city safety systems

Automated helmet violation detection

Road safety analytics platforms

👨‍💻 Author

Aaditya Deshpande
B.Tech – Information Technology

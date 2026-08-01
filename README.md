# 🩺 Skin Cancer Detection Using Deep Learning

A deep learning-based web application that classifies skin lesions from dermoscopic images to assist in the early detection of skin cancer. The project leverages **MobileNetV2** for feature extraction and image classification, providing a fast and efficient prediction system.

---

## 📌 Project Overview

Skin cancer is one of the most common forms of cancer worldwide, and early diagnosis plays a crucial role in improving treatment outcomes.

This project applies **Deep Learning** techniques to classify skin lesion images into different categories using the **MobileNetV2** architecture. A user-friendly web interface allows users to upload an image and receive a predicted diagnosis.

---

## ✨ Features

- 🩺 Skin lesion image classification
- 🤖 Deep Learning-based prediction using MobileNetV2
- 📷 Upload dermoscopic images
- ⚡ Fast prediction
- 📊 High Accuracy (85.4%)
- 💻 User-friendly web interface

---

## 🛠️ Tech Stack

### Programming Language

- Python

### Deep Learning

- TensorFlow
- Keras
- MobileNetV2

### Image Processing

- OpenCV
- NumPy

### Data Visualization

- Matplotlib
- Seaborn

### Web Framework

- Flask

---

## 📂 Dataset

The model was trained using publicly available medical image datasets:

- ISIC 2018 Dataset
- HAM10000 Dataset

These datasets contain thousands of dermoscopic images belonging to different categories of skin lesions.

---

## 🧠 Model Architecture

- Transfer Learning using MobileNetV2
- Image Preprocessing
- Data Augmentation
- Feature Extraction
- Dense Classification Layer
- Softmax Output Layer

---

## 📈 Model Performance

| Metric | Value |
|--------|--------|
| Accuracy | **85.4%** |
| Framework | TensorFlow |
| Model | MobileNetV2 |
| Input Size | 224 × 224 |

---

## 📁 Project Structure

```
Skin-Cancer-Detection/
│
├── Dataset/
├── Model/
├── Static/
├── Templates/
├── app.py
├── train.py
├── predict.py
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/shreyshi11/skin-cancer-detection-ui.git
```

### Navigate to the Project

```bash
cd skin-cancer-detection-ui
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run the Application

```bash
python app.py
```

---

## 📸 Screenshots

### 🔍 Prediction Result

<img width="780" height="587" alt="Screenshot 2026-08-01 110147" src="https://github.com/user-attachments/assets/6a20a928-986f-4832-866e-c970e44d9956" />

<img width="741" height="583" alt="image" src="https://github.com/user-attachments/assets/ccf0d353-cfd7-42b7-b8f0-72b7b692095e" />


---

## 🚀 Future Improvements

- Increase model accuracy
- Deploy on cloud platforms
- Support more skin disease categories
- Add Grad-CAM visualization for model explainability
- Mobile application integration

---

## 📚 Applications

- Healthcare Assistance
- Medical Image Classification
- AI-based Disease Detection
- Clinical Decision Support

---

## 👩‍💻 Author

**Shreyshi Srivastav**

- 📧 Email: shreysriv23@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/shreyshisriwastav
- 💻 GitHub: https://github.com/shreyshi11

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!


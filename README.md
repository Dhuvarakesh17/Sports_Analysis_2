# 🏏 Sports Analysis 2

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://sports-analysis-2.vercel.app/)  
*A full-stack sports data analytics platform built with React + Vite (Frontend) and Flask (Backend).*

---

## 📖 Overview

**Sports Analysis 2** is a web application designed to simplify and visualize sports statistics.  
With an intuitive interface and robust backend, it allows users to explore matches, players, and team insights in real time.

- ⚡ **Frontend:** Modern, fast, and interactive (React + Vite + Tailwind CSS)  
- 🐍 **Backend:** Reliable Python (Flask) server for data handling and analytics  
- 🎯 **Goal:** Deliver meaningful sports insights through clean dashboards and APIs  

---

## 🗂️ Project Structure

```
Sports_Analysis_2/
├── Backend/
│   ├── app.py             # Flask backend entry point
│   ├── requirements.txt   # Python dependencies
│   └── .env               # Environment variables (not committed)
│
├── Frontend/
│   ├── src/               # React source code
│   ├── index.html         # App entry HTML
│   ├── package.json       # Frontend dependencies & scripts
│   ├── vite.config.js     # Vite configuration
│   └── eslint.config.js   # Linting rules
│
├── tailwind.config.js     # TailwindCSS configuration
└── README.md              # Project documentation
```

---

## 🛠️ Technologies Used

### **Frontend**
- ⚛️ [React](https://react.dev/) with [Vite](https://vitejs.dev/) for lightning-fast development
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for responsive UI
- ✅ [ESLint](https://eslint.org/) for maintaining code quality

### **Backend**
- 🐍 [Python 3.x](https://www.python.org/)
- 🌐 [Flask](https://flask.palletsprojects.com/) web framework
- 🔑 `.env` for environment configuration
- 📦 Dependencies listed in `requirements.txt`

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (>= 18) + npm/yarn
- **Python 3.x**
- Virtual environment tool (recommended: `venv`)

---

### 🔹 Backend Setup (Flask API)

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # macOS/Linux
   source venv/bin/activate
   # Windows
   venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables in `.env` (example below):
   ```
   FLASK_ENV=development
   FLASK_RUN_PORT=8000
   ```

5. Run the backend server:
   ```bash
   python app.py
   ```

---

### 🔹 Frontend Setup (React + Vite)

1. Navigate to the frontend folder:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser:  
   👉 usually [http://localhost:5173](http://localhost:5173)

---

## 🌍 Deployment

The project is live at:  
👉 [**sports-analysis-2.vercel.app**](https://sports-analysis-2.vercel.app/)

- **Frontend:** Deployed on [Vercel](https://vercel.com/)  
- **Backend:** Run locally or deployable on services like Render, Railway, or Fly.io

---

## 🤝 Contributing

We welcome contributions! 🎉  
To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m "feat: add my feature"`)
4. Push to branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📜 License

This project currently has **no specified license**.  
For usage and permissions, please contact the repository owner.

---

## 👨‍💻 Author

Built with ❤️ by **Dhuvarakesh**  
Frontend + Backend Integration | Sports Data Enthusiast

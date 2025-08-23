# Sports_Analysis_2

[Live Demo](https://sports-analysis-2.vercel.app/)

## Overview
Sports_Analysis_2 is a web application designed for sports data analysis. It features a modern frontend built with React and Vite, and a backend powered by Python (likely using Flask or a similar framework). The project aims to provide insightful sports analytics through an interactive user interface and robust backend services.

## Project Structure

Sports_Analysis_2/ ├── Backend/ │ ├── app.py # Main backend application script │ ├── requirements.txt # Python dependencies │ ├── .env # Environment variables (not committed) │ └── pycache/ # Python cache files ├── Frontend/ │ ├── src/ # React source code │ ├── index.html # HTML entry point │ ├── package.json # Node.js dependencies and scripts │ ├── vite.config.js # Vite configuration │ ├── .gitignore │ ├── README.md # Frontend specific README │ └── eslint.config.js # ESLint configuration ├── .gitignore ├── tailwind.config.js # Tailwind CSS configuration └── README.md # This file

Copy code

## Technologies Used

- **Frontend:**
  - React with Vite for fast development and hot module replacement
  - Tailwind CSS for styling
  - ESLint for code quality and linting

- **Backend:**
  - Python (likely Flask or similar framework)
  - Environment variables managed via `.env`
  - Dependencies listed in `requirements.txt`

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed for frontend
- Python 3.x installed for backend
- Recommended to use virtual environments for Python dependencies

### Setup Backend

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
Create and activate a virtual environment:
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
Install Python dependencies:
Copy code
pip install -r requirements.txt
Configure environment variables in .env file as needed.
Run the backend server:
Copy code
python app.py
Setup Frontend
Navigate to the Frontend directory:
Copy code
cd Frontend
Install Node.js dependencies:
Copy code
npm install
Start the development server:
Copy code
npm run dev
Open your browser and go to the URL provided by Vite (usually http://localhost:5173).
Deployment
The project is deployed and accessible at: https://sports-analysis-2.vercel.app/

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project does not specify a license. Please contact the repository owner for licensing information.

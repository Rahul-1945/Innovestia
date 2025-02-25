# ThriveX   

ThriveX is an AI-powered startup-investor matchmaking platform designed to help entrepreneurs connect with the right investors. It leverages AI to evaluate business pitches, generate business plans, and analyze investor sentiment to facilitate funding opportunities.  

## 🌟 Features  

- **AI-Powered Startup-Investor Matching**  
  - Matches startups with investors based on industry fit, funding needs, and risk levels.  

- **AI Business Pitch Evaluation**  
  - Entrepreneurs can upload pitch decks and receive AI-generated feedback on feasibility, competition, and market potential.  

- **AI-Generated Business Plans & Financial Projections**  
  - Generates structured business plans tailored to funding needs and market trends.  

- **Investor Sentiment Analysis**  
  - Tracks investor engagement and predicts funding interest using AI-powered analytics.  

- **AI Chatbot for Business & Investment Guidance**  
  - Provides instant advice on pitching, funding, and negotiations.  

## 🏗️ Project Structure  

```
ThriveX/
│── frontend/          # Frontend (React-based)
│── backend/           # Backend (Node.js + Express)
│── README.md          # Project documentation
```

### **Frontend (React)**  

- **Home Page**  
  - ![image](https://github.com/user-attachments/assets/e28c03c2-37b8-4e19-b800-7e21895b49c7)
  

- **Signup & Login Pages**  
  - Role-based authentication (Entrepreneur / Investor)  

- **Dashboard**  
  - Entrepreneurs: Submit startup details, view matches, get AI feedback  
  - Investors: Set preferences, track sentiment analysis, view startups  

- **Pitch Evaluation**  
  - Upload pitch deck → Get AI feedback  

- **Matchmaking Page**  
  - Displays matched startups/investors with filters  

- **Business Plan Generator**  
  - Generates downloadable AI business plans  

### **Backend (Node.js + Express + MongoDB)**  

- **User Authentication** (JWT-based)  
- **AI Processing** (Pitch evaluation, matchmaking, sentiment analysis)  
- **Database Storage** (Startups, investors, matches)  

## 🚀 Installation Guide  

### **1. Clone the repository**  

```bash
git clone https://github.com/Nagul71/ThriveX.git
cd ThriveX
```

### **2. Backend Setup**  

```bash
cd backend
npm install
```

- Configure `.env` file for database and API keys.  

```bash
npm start
```

### **3. Frontend Setup**  

```bash
cd ../frontend
npm install
npm start
```

## 🎯 Usage  

- **Entrepreneurs**: Sign up, submit your startup details, and get matched with investors.  
- **Investors**: Set preferences and discover promising startups.  
- **AI Insights**: Leverage AI-driven business plan generation, pitch evaluation, and sentiment analysis.  

## 🛠️ Tech Stack  

- **Frontend**: React, Tailwind CSS  
- **Backend**: Node.js, Express, MongoDB  
- **AI Models**: OpenAI/Gemini APIs  

## 🤝 Contributing  

We welcome contributions! Feel free to open issues and pull requests.  

## 📜 License  

This project is licensed under the MIT License.  


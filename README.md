ACCESS-AI: Educational Accessibility Rewriter 🎓
ACCESS-AI is a Full-Stack AI-powered platform designed to bridge the gap between complex academic content and student understanding. Using a "Meaning Lock" architecture, it simplifies tough concepts into student-friendly language without losing factual accuracy.

🚀 Key Features
1. 🔒 Meaning Lock (AI Simplification)
An AI agent that rewrites complex textbook paragraphs into plain English. It is specifically tuned to prevent "hallucinations" or factual drift, ensuring students learn the correct science/facts in simpler words.

2. 📚 LexiQuest (Gamified Vocabulary)
A gamified learning module where students "Master" vocabulary. Students are challenged to explain complex terms in simple language to gain XP and rank up through Beginner, Intermediate, and Advanced tiers.

3. 📂 Verified Resource Vault
Teachers can upload classroom materials (PDFs/Docs). Students can join via unique Class Codes to access these verified resources and instantly use the AI tools to simplify them.

4. 📎 Secure Document Handling
Integrated with PostgreSQL bytea storage for reliable document management and high-speed binary downloads of educational materials.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Axios, React-Router-DOM

Backend: Java 21, Spring Boot 3, Spring Security (JWT-ready)

Database: PostgreSQL (with Binary Large Object support)

AI Engine: Google Gemini Pro / 1.5-Flash (Generative AI)

State Management: React Hooks (useState, useEffect)

🏗️ Project Structure
Plaintext
/root
  ├── /frontend            # React.js UI & Gamification logic
  │    ├── /src/features   # Business logic (LexiQuest, Meaning Lock)
  │    └── /src/styles     # Modern Cyber-Glass UI styles
  ├── /backend             # Spring Boot REST API
  │    ├── /controller     # AI and Material endpoints
  │    ├── /service        # Gemini API & Business logic
  │    └── /entity         # JPA Database models
  └── README.md
🚦 Getting Started
Prerequisites
Node.js (v18+)

JDK 21

PostgreSQL Instance

Google Gemini API Key (Get it here)

Installation
Clone the repo

Bash
git clone https://github.com/your-username/access-ai.git
Backend Setup

Navigate to /backend/src/main/resources/application.properties

Configure your DB credentials and paste your Gemini Key:

Properties
gemini.api.key=YOUR_API_KEY
spring.datasource.url=jdbc:postgresql://localhost:5432/access_ai
Run ./mvnw spring-boot:run

Frontend Setup

Bash
cd frontend
npm install
npm run dev
🛡️ Interview Talking Points
PostgreSQL Optimization: "Implemented bytea mapping for binary data to avoid Large Object auto-commit issues in Postgres."

AI Prompt Engineering: "Used system instructions to enforce a 'Meaning Lock', preventing the AI from changing core scientific facts during simplification."

Gamification: "Developed LexiQuest to provide an active learning loop where students prove mastery rather than just passively reading."

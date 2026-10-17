**# Career Compass – Project Setup Guide**



**## 📌 About the Project**



Career Compass is an AI-based career guidance system that helps students identify suitable career paths based on their skills, interests, and academic background.



The project includes:



\* Frontend websites (Main, Student, Admin, Assessment)

\* Backend automation workflows (Make.com)

\* AI-based analysis system

\* Google Sheets-based database



\---



**## 📁 Folder Structure**



\* \*\*Assets/\*\* → Contains documentation, diagrams, screenshots, and reference files

\* \*\*Backend/\*\* → Contains automation workflow JSON files and links

\* \*\*Frontend/\*\* → Contains all website source code (HTML, CSS, JS)

\* \*\*README.md\*\* → This file (project guide)



\---



**## ⚙️ Requirements**



Before running the project, make sure you have:



\* A web browser (Chrome recommended)

\* VS Code (or any code editor)

\* Internet connection (for automation workflows)

\* Make.com account (for backend automation)

\* Google account (for Google Sheets database)



\---



**## 🚀 How to Run the Project**



\### 1. Open the Frontend



1\. Go to the `frontend/` folder

2\. Open `main.html` in your browser



This is the entry point of the project.



\---



\### 2. Navigate the System



From the main website, you can access:



\* Student Website

\* Admin Website

\* Assessment Form



Each section is connected through frontend logic.



\---



\### 3. Backend Workflows (Important)



The backend is handled using \*\*Make.com workflows\*\*.



Inside `backend/` folder:



\* `assessment\_workflow.json` → Handles student assessment \& AI report

\* `user\_workflow.json` → Handles login \& registration

\* Workflow links → Direct access to workflows



\#### To use workflows:



1\. Import JSON files into Make.com

2\. Configure:



&#x20;  \* Webhooks

&#x20;  \* Google Sheets connection

&#x20;  \* API keys (for AI)



\---



\### 4. Database (Google Sheets)



The system uses Google Sheets as a database.



It stores:



\* User login data

\* Student assessment data

\* AI results



Make sure:



\* Sheets are connected in Make.com

\* Proper permissions are enabled



\---



\### 5. Automation Flow



The system works like this:



1\. User submits form (frontend)

2\. Data sent via webhook

3\. Make.com workflow triggers

4\. Data stored in Google Sheets

5\. AI analyzes student data

6\. Results:



&#x20;  \* Stored back in Sheets

&#x20;  \* Sent via email

&#x20;  \* Available for admin dashboard



\---



**## 📂 Assets Usage**



\* \*\*Diagrams/\*\* → Understand system architecture

\* \*\*Screenshots/\*\* → Reference for workflows \& UI

\* \*\*Text Files/\*\* → Backup code for webpages

\* \*\*PDFs \& PPT\*\* → Documentation \& presentation



\---



**## ⚠️ Important Notes**



\* This project runs partially on \*\*local frontend\*\* and \*\*cloud automation (Make.com)\*\*

\* Without setting up workflows, some features will not work

\* API keys and webhook URLs must be configured manually

\* This is a \*\*prototype/project\*\*, not production-ready



\---



**## 🛠️ Troubleshooting**



\* If pages don’t load → Check file paths

\* If automation doesn’t trigger → Check webhook setup

\* If no data in Sheets → Verify Make.com connection

\* If AI not responding → Check API key



\---



**## 👨‍💻 Author**



**Tushar Thakur**

**Career Compass Project**



\---



**## 📌 Final Note**



This project is designed to demonstrate:



\* Web development

\* Automation workflows

\* AI integration

\* System design



**Follow the steps carefully to run the system properly.**




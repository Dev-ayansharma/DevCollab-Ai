# 🎟️ Ticket Support System

A full-stack ticket support platform where users can raise tickets, and moderators can manage and resolve them efficiently. Powered by Node.js, MongoDB, Inngest (for background processing), and a modern React frontend.

---

## 📦 Features

### 👤 Users
- Register and log in securely
- Create support tickets with title & description
- Track ticket status: `TODO`, `IN_PROGRESS`, `ASSIGNED`, `CANCELLED`, `COMPLETED`
- Search through their tickets

### 🛠️ Moderators
- Auto-assigned tickets based on skills via AI
- See all tickets and those assigned to them
- View ticket details and update statuses
- Dashboard stats: total, todo, in progress, assigned, cancelled

### ⚙️ Backend (Node.js + Express)
- REST API with authentication and role-based access
- Ticket creation triggers `Inngest` background function:
  - AI analysis of the ticket
  - Skill-based moderator assignment
  - Email notification upon assignment
  - Auto-cancellation if no suitable moderator is found
- Secure password handling
- Email notifications using Nodemailer

### 🧠 AI Skill Matching
- On ticket creation, the system:
  - Analyzes ticket content with AI
  - Extracts relevant skills
  - Matches those with available moderators

### ⏳ Background Jobs with Inngest
- `ticket/create` event triggers:
  - Ticket status update
  - AI skill tagging
  - Assignment to suitable moderator
  - Email notifications
  - Status update to `CANCELLED` if no match found

---

## 🖥️ Tech Stack

| Frontend | Backend | Database | Background Jobs | Email |
|----------|---------|----------|------------------|-------|
| React + Vite | Node.js + Express | MongoDB | Inngest | Nodemailer | Mailtrap |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/ticket-support-system.git
cd ticket-support-system
```
###2. backend setup
```bash
cd ai-ticket-assistant
npm install
npm run dev
```
then for the inngest 
```bash
cd ai-ticket-assistant
npm run inngest-dev
```
###3.Env file for backend
```bash
APP_URL=
GEMINI_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
JWT_SECRET=
MAILTRAP_SMTP_HOST=
MAILTRAP_SMTP_PASSWORD=
MAILTRAP_SMTP_PORT=
MAILTRAP_SMTP_USER=
MONGO_URI=
PORT=
```
### 4. Frontend setup
```bash
cd ../frontend
npm install
npm run dev
```
###5. env file for frontend
```bash
VITE_API_BASE=
```

---

Github repo - [https://github.com/Dev-ayansharma/DevCollab-Ai]
Live link - [https://dev-collab-ai.vercel.app/]

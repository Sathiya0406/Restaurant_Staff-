# 🍽️ Restaurant Staff Roster Planner – Week 1

## 📌 Overview

This Week 1 implementation establishes the foundation of the Restaurant Staff Roster Planner by integrating backend APIs, database connectivity, and a functional frontend interface. The system allows basic management of restaurant staff information including their roles and availability.

---

## 🛠️ Technologies Used

### Backend

* FastAPI (Python)
* Supabase (PostgreSQL Database)
* Python-dotenv (Environment variable management)

### Frontend

* React.js
* CSS (Custom styling)
* Lucide React (Icons)

---

## 🧱 Project Setup

### Backend Setup

* Created FastAPI application
* Configured Supabase connection using `.env` file
* Implemented API routes
* Enabled CORS for frontend-backend communication

### Frontend Setup

* Created React application
* Designed UI with dashboard-style layout
* Connected frontend with backend APIs

---

## ⚙️ Features Implemented

### 👤 Staff Management

* Add new staff with:

  * Name
  * Role
  * Availability
* View all staff in a structured list
* Delete staff records

---

### 🔗 Backend API Endpoints

* `GET /` → Check API status
* `GET /staff` → Retrieve all staff
* `POST /staff` → Add new staff
* `DELETE /staff/{id}` → Delete staff
* `POST /seed` → Insert sample data

---

### 🗄️ Database Integration

* Created `staff` table in Supabase
* Stored and retrieved data using API
* Managed data consistency between frontend and backend

---

### 🎨 User Interface

* Dashboard-style layout with header
* Form-based staff entry
* Dropdown inputs for role and availability
* Staff list with:

  * Name and role display
  * Availability badge
  * Delete icon

---

### 🧪 Testing and Validation

#### API Testing

* Tested endpoints using FastAPI Swagger (`/docs`)
* Verified:

  * Data insertion
  * Data retrieval
  * Validation checks

#### UI Testing

* Added staff through frontend
* Verified real-time updates
* Tested delete functionality
* Confirmed data persistence in database

---

### 🔐 Security and Configuration

* Stored Supabase credentials in `.env` file
* Loaded environment variables using python-dotenv
* Configured `.gitignore` to protect sensitive data

---

## 🚀 How to Run the Project

### 🔹 Start Backend

```bash id="bkstart"
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

Open in browser:

```id="bkurl"
http://127.0.0.1:8000/docs
```

---

### 🔹 Start Frontend

```bash id="frstart"
cd frontend
npm install
npm start
```

Open in browser:

```id="frurl"
http://localhost:3000
```

---

## 📌 Outcome

The Week 1 implementation successfully delivers a working full-stack application with CRUD functionality for staff management, integrated with Supabase and accessible through a clean React-based user interface.

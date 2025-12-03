Here's a complete `README.md` file for your **MERN Calc** project:

```md
# 🧮 MERN Calc

A simple calculator application built using the **MERN stack**:
- **MongoDB**
- **Express.js**
- **React.js**
- **Node.js**

This project demonstrates a full-stack application with frontend and backend integration, RESTful APIs, and user input handling through URL parameters.

---

## 📁 Folder Structure

```

mern-calc/
├── backend/
│   ├── server.js
│   └── (Node.js + Express files)
├── frontend/
│   ├── src/
│   │   └── App.js (React code here)
│   └── (React app files)

````

---

## ⚙️ Backend Setup

### 1. Create the folder
```bash
mkdir MernCalc
cd MernCalc
mkdir backend
cd backend
````

### 2. Initialize Node.js

```bash
npm init -y
```

### 3. Install backend dependencies

```bash
npm install express cors
```

### 4. Create `server.js`

Use port `5000` for backend.

### 5. Start the backend server

```bash
node server.js
```

---

## 🌐 API Test

Use browser or Postman to test:

```
http://localhost:5000/api/calc?n1=10&n2=8
```

* `?` indicates user query parameters (`n1`, `n2`).

---

## 🚀 Frontend Setup

### 1. Create frontend folder and React app

If starting from scratch:

```bash
npx create-react-app frontend
```

If you're inside the folder already:

```bash
npx create-react-app@latest .
```

### 2. Start the frontend

```bash
cd frontend
npm start
```

### 3. Change frontend port (optional)

To change port to `4000`:

```bash
set PORT=4000 && npm start  # Windows
```

---

## 📄 Frontend Instructions

1. Go to `frontend/src`
2. Open `App.js`
3. Write your React code to:

   * Take two inputs
   * Send them to backend API
   * Display the result

---

## 🧠 Notes

* MongoDB default port: `27010` (custom in this case)
* Express backend port: `5000`
* React frontend port: `3000` (or `4000`)
* Total system ports: `65536`

  * Reserved ports: `0–1023`

---

## 📬 API Example

```bash
GET http://localhost:5000/api/calc?n1=10&n2=8
```

**Response:**

```json
{
  "result": 18
}
```

---

## ✅ Tech Stack

* React (Frontend)
* Express (Backend)
* Node.js
* MongoDB (if used in future)

---

## 📦 Dependencies

**Backend:**

* express
* cors

**Frontend:**

* react





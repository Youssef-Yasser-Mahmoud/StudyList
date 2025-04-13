# Student Management System 🧑‍🎓

A simple Node.js application for managing students — built using **Express.js**, **Mongoose**, **EJS templates**, and following an **MVC project structure**.

---

## 📌 Project Overview

This project allows you to:

- Add new students.
- View all students in a table.
- View detailed information for each student.
- Edit student data.
- Delete students.

---

## 💡 Technologies Used

| Technology | Description                        |
|------------|------------------------------------|
| Node.js    | JavaScript runtime environment.    |
| Express.js | Web server framework for Node.js.  |
| Mongoose   | ODM for MongoDB.                   |
| EJS        | Embedded JavaScript templating.    |
| MVC        | Structured using Model-View-Controller design pattern. |

---
## 💻 How To Run The Project

1. **Install dependencies**
```bash
npm install
```
## 💻 Start MongoDB Make sure you have MongoDB running locally (or you can connect to Atlas).
---
2. Open your browser:
```arduino
http://localhost:3000/
```
---

## ⚙️ Features
GET /students → Show all students.

GET /students/:id → View student details.

GET /students/:id/edit → Edit student form.

POST /students → Add new student.

PUT /students/:id → Update student.

DELETE /students/:id → Delete student.

---

## 🌱 Why MVC?
This project follows the MVC design pattern to separate concerns:

Model: Handles MongoDB interaction using Mongoose.

View: EJS templates render dynamic content.

Controller: Functions handle the logic for each route.

---

## 🚀 Future Improvements
Add form validation.

Connect to MongoDB Atlas.

Add authentication.



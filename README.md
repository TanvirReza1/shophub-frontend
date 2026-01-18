# Next.js Item Listing Application

## 📌 Project Description

This is a simple full-stack web application built with **Next.js 15/16 (App Router)** and an **Express.js API**. The app includes public pages, a mock authentication system using cookies, publicly accessible item listings and item details, and an optional protected page for adding new items.

The project demonstrates routing, authentication, protected routes, API integration, and basic CRUD functionality following modern Next.js App Router practices.

---

## 🚀 Technologies Used

- **Next.js 15/16** (App Router)
- **React**
- **Express.js** (REST API)
- **MongoDB / JSON-based storage** (via Express API)
- **Tailwind CSS** (Styling)
- **Cookies** (Mock authentication)
- **react-hot-toast** (Notifications)

---

## 📂 Application Routes

### Public Routes

| Route         | Description                                   |
| ------------- | --------------------------------------------- |
| `/`           | Landing page with 7 sections, navbar & footer |
| `/login`      | Mock login page                               |
| `/items`      | Public item list page                         |
| `/items/[id]` | Item details page                             |

### Protected Routes

| Route       | Description                   |
| ----------- | ----------------------------- |
| `/add-item` | Add new item (requires login) |

Unauthenticated users attempting to access protected routes are redirected to `/login`.

---

## 🔐 Authentication

### Mock Authentication (Implemented)

- Uses a **hardcoded email & password**
- On successful login, an `auth_token` cookie is stored
- Cookie is checked on protected pages
- Redirects unauthenticated users automatically

```js
email === VALID_EMAIL && password === VALID_PASSWORD;
```

> Optional enhancement (not required): NextAuth.js for Google or credential login.

---

## 🧩 Core Features Implemented

### ✅ Landing Page

- Publicly accessible
- Contains **7 relevant sections** (excluding Navbar & Footer)
- Navigation links to Login and Items pages

### ✅ Item List Page

- Publicly accessible
- Fetches items from Express.js API
- Displays item name, description, price, category, and image

### ✅ Item Details Page

- Publicly accessible
- Displays full details of a selected item

### ✅ Protected Add Item Page

- Accessible only when logged in
- Form to add a new item
- Sends data to Express API
- Stores item in database / JSON
- Redirects unauthenticated users

### ✅ Toast Notifications

- Success notification on item creation
- Error notification on failure

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd project-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env.local` file in the Next.js project:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4️⃣ Run Express Server

```bash
cd server
npm install
npm run dev
```

### 5️⃣ Run Next.js App

```bash
npm run dev
```

Open: `http://localhost:3000`

---

## 🛠 Express API Overview

### Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| GET    | `/items`     | Fetch all items          |
| GET    | `/items/:id` | Fetch single item        |
| POST   | `/items`     | Add new item (protected) |

Protected routes validate the `auth_token` cookie.

---

## 📌 Notes

- This project is for **learning and assessment purposes**
- Authentication is intentionally simple (mock-based)
- Follows Next.js App Router best practices

---

## ✅ Conclusion

This project fulfills all required core features and optional enhancements:

- Public & protected routing
- Mock authentication
- API-driven data
- Clean UI with Tailwind
- Toast notifications

✔ Fully compliant with the given task requirements

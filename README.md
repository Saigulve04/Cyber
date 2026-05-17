# ⚡ Cyber 🕹️

A modern web backend for a **Cyber Cafe Management System**, leveraging Node.js, Express, Prisma ORM, JWT authentication, and a structured public frontend. This project provides robust user registration, login, and protected dashboard APIs out of the box.

---

## 🚀 Features

- **User Authentication:** Secure registration & login with hashed passwords and JWT tokens.
- **Protected Dashboard:** Authenticated users can access personal dashboard information and mock cyber-cafe stats.
- **RESTful API:** Clean and extendable endpoints built with Express.
- **Prisma ORM:** Simple modern database access (requires your own schema in `prisma/`).
- **Static Frontend Ready:** Serve HTML, CSS, and JS assets through the `public/` directory.
- **Environment Config:** Store secrets and environment variables with `.env`.

---

## 🗂️ Project Structure

```
/Cyber
  ├── prisma/              # Your database schema and migrations (Prisma)
  ├── public/              # Static files (frontend HTML, CSS, JS, images)
  ├── server.js            # Main Express server (API + static serving)
  ├── package.json         # Project metadata & dependencies
  └── .gitignore           # Version control ignores
```

---

## 🔑 Authentication API

- **Register:**  
  `POST /api/auth/register`  
  _Body:_ `{ username, email, password }`  
  → Registers a new user (email/username unique, password securely hashed).

- **Login:**  
  `POST /api/auth/login`  
  _Body:_ `{ email, password }`  
  → Returns a JWT on success for protected routes.

- **Dashboard (Protected):**  
  `GET /api/user/dashboard`  
  _Header:_ `Authorization: Bearer <token>`  
  → Returns user info & mock cyber-cafe stats.

---

## 🛠️ Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/Saigulve04/Cyber.git
   cd Cyber
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Copy `.env.example` to `.env` and fill in values:
     ```
     PORT=3000
     JWT_SECRET=your-very-secret-key
     ```
   - Setup your database & Prisma schema in `/prisma`.

4. **Run the server**
   ```bash
   npm start
   ```
   Or, for development with auto-restart:
   ```bash
   npx nodemon server.js
   ```

---

## 🏗️ Tech Stack

- **Node.js** & **Express**: Reliable backend framework
- **Prisma ORM**: Next-gen database client
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Secure env config
- **CORS**: Flexible API access
- **Nodemon**: Live server reload (dev)

---

## 📂 Extending Functionality

- Add database schema/models in `prisma/schema.prisma`
- Place your static frontend files in `public/`
- Expand API routes for admin/session/payment/etc in `server.js`

---

## 🧩 Example Requests

**Register**
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "myuser",
  "email": "myuser@example.com",
  "password": "secretpass"
}
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "myuser@example.com",
  "password": "secretpass"
}
```

---

## 🙌 Contributing

- Fork and star this repo!
- Open issues and PRs for bugs, features, or improvements.

---

## ⚖️ License

This project is released under the ISC License.

---

> Built & maintained by [Saigulve04](https://github.com/Saigulve04) 🚀

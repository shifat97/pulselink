# PulseLink - Doctor Appointment Booking Platform

PulseLink is a modern, full-stack doctor appointment booking platform designed to streamline the connection between patients and healthcare providers. Built with a robust React frontend and a scalable Node.js backend, it offers a seamless experience for browsing doctors, managing profiles, and scheduling appointments.

## 🚀 Key Features

- **User Authentication:** Secure sign-up and sign-in functionality with JWT-based authentication.
- **Doctor Discovery:**
  - Browse a comprehensive list of all available doctors.
  - Filter doctors by specialty and "Top Doctor" status.
  - View detailed doctor profiles including expertise and availability.
- **Appointment Management:**
  - Easy-to-use booking system.
  - View and manage personal appointments in the "My Appointments" section.
- **User Profiles:** Personalized profile management for patients.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS 4, ensuring a great experience on desktops, tablets, and mobile devices.
- **Protected Routes:** Secure access to user-specific pages like profile and appointments.

## 🛠️ Tech Stack

### Frontend
- **React 19:** For building a dynamic and interactive user interface.
- **Vite:** High-performance build tool and development server.
- **Tailwind CSS 4:** Modern utility-first CSS framework for rapid styling.
- **React Router 7:** Declarative routing for React applications.
- **Axios:** For making asynchronous HTTP requests to the backend.
- **React Toastify:** For elegant and non-intrusive notifications.
- **React Icons:** A collection of popular icons for the UI.

### Backend
- **Node.js & Express 5:** For a fast and minimalist web server.
- **MongoDB & Mongoose:** NoSQL database for flexible and scalable data storage.
- **Zod:** Schema-based validation for request payloads.
- **JWT (JSON Web Tokens):** For secure user authentication and session management.
- **Bcrypt:** For hashing and securing user passwords.

## 📂 Project Structure

```text
pulselink/
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components
│   │   ├── routes/      # Application routing logic
│   │   ├── contexts/    # React Context API for state management
│   │   └── constants/   # API endpoints and configuration constants
├── server/           # Node.js backend API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── models/      # Mongoose schemas and models
│   │   ├── routers/     # API route definitions
│   │   ├── services/    # Business logic layer
│   │   └── schemas/     # Zod validation schemas
```

## ⚙️ Setup and Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local instance or Atlas cluster)

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example` and fill in your configuration:
   ```env
   PORT=5000
   ALLOWED_ORIGIN=http://localhost:5173
   MONGO_URI=mongodb://localhost:27017
   DB_NAME=pulselink
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛣️ API Endpoints

- **Auth:**
  - `POST /auth/sign-up`: Register a new user.
  - `POST /auth/sign-in`: Authenticate a user.
  - `PATCH /auth/user/:id`: Update user profile information.
- **Doctors:**
  - `GET /doctors`: Get all doctors.
  - `GET /doctors/top`: Get featured top doctors.
  - `GET /doctors/doctor`: Get doctor(s) by specific parameters (id, type, etc.).
- **Appointments:**
  - `POST /appointments/create`: Book a new appointment.
  - `GET /appointments`: Get all appointments for the authenticated user.

## 📄 License

This project is licensed under the ISC License.

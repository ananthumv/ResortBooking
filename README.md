# 🌴 Ocean Breeze Resort | Beachfront Luxury Retreat Web App

A modern **Resort Booking Web Application** built with **React, Vite, Tailwind CSS, Node.js, TypeScript, and MongoDB**.  
This app allows users to browse resort services, view a gallery, and book stays online. Admins can view all bookings in real-time.

---

## 🚀 Features

### Frontend
- **Hero Section** with stunning resort background image, company name, tagline, and "Book Now" button.
- **Services Section** highlighting:
  - Accommodation 🏨
  - Adventure Activities 🧗
  - Wellness & Spa 💆
- **Gallery Section** showcasing resort images in a responsive grid.
- **Booking Form** with:
  - User details (name, email, phone)
  - Guests and room type selection
  - Check-in and check-out dates
  - Notes for special requests
- **Admin Page** to list all bookings.
- Fully **responsive** design for desktop and mobile.
- Styled using **Tailwind CSS** for a modern look.

### Backend
- **RESTful API** built with **Node.js, Express, TypeScript, and MongoDB**.
- **Endpoints:**
  - `POST /bookings` → Save booking details with validation.
  - `GET /bookings` → Fetch all bookings.
- **Booking Schema** includes:
  - Full Name
  - Email
  - Phone
  - Guests
  - Room Type
  - Check-in & Check-out Dates
  - Notes (optional)
  - Created At timestamp
- **Security & Validation:**
  - Input validation and sanitization
  - CORS configured for frontend
  - XSS protection
  - Secure HTTP headers via Helmet

### Integration
- Frontend booking form connects seamlessly to backend API.
- Admin page fetches live bookings from backend.
- End-to-end booking flow works: user submits → data stored → visible in admin.

---

## 🛠️ Tech Stack

| Frontend | Backend | Database |
|----------|--------|----------|
| React + Vite + TypeScript | Node.js + Express + TypeScript | MongoDB (Mongoose) |
| Tailwind CSS | Express-validator | |

---

## 📸 Screenshots

**Hero Section & Booking Form**  

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/eb936cf4-475a-4f55-9a16-55fa350f813a" />

**Services & Gallery**

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/fbc4227b-4757-43b8-9c5a-434ed429720f" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/61369da6-c5b6-429b-ae87-550f05b215c5" />

**Booking**

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/74f0b940-26ec-4b23-b174-cbdcef641e2e" />

**Footer**

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/48d0ea1c-da9f-47fe-aea5-7b0d5b2823a2" />

**Admin Page (Bookings List)**  

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/7037dd82-9614-461a-96d6-8fa15a1dbf57" />

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/f762d754-c9d1-4612-9c65-e4d5ebcfb2dc" />



---

## ⚡ Installation & Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Set your MONGODB_URI and CORS_ORIGIN
npm run dev








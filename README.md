# Vasundhara Academy Web Platform & Management System

![Vasundhara Academy](public/logo.png)

A comprehensive, full-stack web application designed for **Abhinav Education Society's Vasundhara Academy**. This platform serves as both a premium, high-performance public website for parents and students, and a robust backend administrative management system for school officials.

## 🚀 Key Features

### 🌐 Public Website (Frontend)
- **Premium Aesthetics**: Custom-built CSS architecture featuring modern glassmorphism, smooth scroll reveals, dynamic hover states, and parallax animations.
- **Floating WhatsApp Widget**: An interactive, non-intrusive "Ultimate Support Center" widget with typing animations and automated greetings for instant parent communication.
- **Application Tracking System (ATS)**: A secure, public-facing portal where parents can track their child's admission status using a unique Application ID.
- **Dynamic Content**: Server-side rendered pages for Academics, Campus Life, Gallery, Notifications, and Staff Directories pulled directly from the database.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports, ensuring a seamless experience across all devices.

### 🛡️ Admin Dashboard (Backend)
- **Secure Authentication**: Protected routes utilizing `next-auth` to ensure only authorized personnel can access sensitive school data.
- **Admissions Management**: A comprehensive table to review, update, and manage incoming student applications. Includes a "Notify via WhatsApp" utility for instant communication.
- **Enquiry Handling**: A centralized inbox to read and respond to contact form submissions.
- **Content Management**: Interfaces to dynamically update the Board of Directors, Staff details, Gallery images (via Cloudinary integration), and school Announcements/Notifications.
- **Analytics Overview**: A centralized dashboard providing a quick snapshot of pending admissions, total staff, and unread enquiries.

---

## 🛠️ Technology Stack

This project is built using modern, scalable web technologies:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Frontend Library**: [React 18](https://react.dev/)
- **Styling**: Modular Vanilla CSS (`globals.css`, `admin.css`, `animations.css`, etc.)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (Hosted on [Neon](https://neon.tech/))
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (Credentials Provider with `bcryptjs`)
- **Media Storage**: [Cloudinary](https://cloudinary.com/) API for gallery and image uploads
- **Icons**: FontAwesome 6 (CDN)

---

## 📂 Project Structure

```text
vasundhara-academy/
├── prisma/                  # Database schema and seed scripts
│   ├── schema.prisma        # Prisma data models
│   └── seed.js              # Initial database seeding script
├── public/                  # Static assets (images, fonts, robots.txt)
├── src/
│   ├── app/                 # Next.js App Router pages and API routes
│   │   ├── (public)/        # Public-facing pages (Home, About, Academics, etc.)
│   │   ├── admin/           # Protected administrative dashboard pages
│   │   └── api/             # Backend API endpoints (auth, public data, admin actions)
│   ├── components/          # Reusable React components
│   │   ├── admin/           # Components specific to the dashboard (Sidebar, Tables)
│   │   ├── layout/          # Global layout components (Navbar, Footer)
│   │   └── ui/              # Reusable UI elements (WhatsApp Widget, Modals, Buttons)
│   ├── lib/                 # Utility functions and library configurations (Prisma client)
│   └── styles/              # Vanilla CSS modules and global styles
├── .env                     # Environment variables (not checked into version control)
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

---

## 💻 Getting Started

To run this project locally, follow these steps:

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A PostgreSQL database instance (e.g., local Postgres or Neon.tech)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Viraj-Mali/vasundhara-academy.git
cd vasundhara-academy
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following required keys:
```env
# Database Connection URL (Prisma)
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_generated_secret_string" # Generate via `openssl rand -base64 32`

# Cloudinary Configuration (For Image Uploads)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

### 4. Database Setup
Push the Prisma schema to your database and seed it with initial data (Admin user, Staff, Committees):
```bash
npm run db:push
npm run db:seed
```

### 5. Start Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the public site.
Open [http://localhost:3000/admin/login](http://localhost:3000/admin/login) to access the Admin Panel.
*(Default Seeded Admin login: `admin@vasundharaacademy.edu.in` / `admin123`)*

---

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Builds the application for production deployment.
- `npm start`: Starts the Next.js production server.
- `npm run lint`: Runs ESLint to catch syntax and styling issues.
- `npm run db:push`: Synchronizes your Prisma schema with your database without requiring migrations.
- `npm run db:seed`: Populates the database with initial required data.
- `npm run db:studio`: Opens Prisma Studio at `localhost:5555` for visual database management.

---



## 🤝 Maintenance & Contributions
This platform is maintained by the Abhinav Education Society IT team. For any major structural changes, please ensure database models in `schema.prisma` are updated accordingly and tested locally before pushing to the production environment.

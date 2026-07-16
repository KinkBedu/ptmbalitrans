<div align="center">

<img src="public/logo.svg" alt="PTM Bali Trans" width="120" />

# PTM Bali Trans

A full-stack car rental and transportation web application based in Bali, Indonesia.

[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://mongodb.com)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)](https://prisma.io)

</div>

---

## Overview

PTM Bali Trans provides vehicle rental services (daily and hourly) across Bali. This application serves as both the public-facing website and the internal admin dashboard for managing vehicles, bookings, drivers, and content.

## Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Framework    | Next.js 16 (App Router)     |
| Language     | TypeScript                  |
| Database     | MongoDB                     |
| ORM          | Prisma                      |
| Styling      | Vanilla CSS                 |
| Auth         | JWT (cookie-based sessions) |
| Deployment   | Docker + VPS                |

## Project Structure

```
ptmbalitrans/
  prisma/                          # Database schema
  public/                          # Static assets (images, fonts, icons, videos)
  scripts/                         # Deployment and setup scripts
  src/
    app/
      (public)/                    # Public-facing pages
        about/
        fleet/                     # Vehicle catalog
        services/                  # Airport transfer, tour, charter
        booking/                   # Booking flow
        gallery/
        news/
        contact/
      (admin)/                     # Admin dashboard (protected)
        admin/
          vehicles/                # Vehicle CRUD
          bookings/                # Booking management
          drivers/                 # Driver management
          gallery/                 # Gallery management
          news/                    # News/blog management
          reviews/                 # Review management
          settings/                # Site settings
        login/                     # Admin login
      api/
        v1/                        # Versioned REST API
          vehicles/
          bookings/
          drivers/
          gallery/
          news/
          reviews/
          services/
          settings/
          upload/
        auth/                      # Authentication endpoints
    components/
      ui/                          # Reusable UI primitives
      layout/                      # Navbar, footer, sidebar
      features/                    # Feature-specific components
      shared/                      # Shared across public and admin
    lib/                           # Core utilities
      db/                          # Prisma client
      auth/                        # Authentication logic
      utils/                       # Helpers and validators
    hooks/                         # Custom React hooks
    types/                         # TypeScript type definitions
    data/                          # Static content and navigation data
    styles/
      components/                  # Component-level styles
      pages/                       # Page-level styles
```

## Getting Started

### Prerequisites

- Node.js 20.9 or later
- MongoDB instance (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ptmbalitrans.git
cd ptmbalitrans

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Docker Setup

```bash
# Start all services (app + MongoDB)
docker compose up -d

# Start and rebuild containers
docker compose up -d --build

# View running containers
docker compose ps

# View application logs
docker compose logs -f app

# Stop all services
docker compose down

# Stop and remove all data (including database volumes)
docker compose down -v
```

The application will be available at `http://localhost:3000` and MongoDB at `localhost:27017`.

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="mongodb://root:password@localhost:27017/ptmbalitrans?authSource=admin"
JWT_SECRET="your-secret-key"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## Scripts

| Command                        | Description                              |
| ------------------------------ | ---------------------------------------- |
| `npm run dev`                  | Start development server                 |
| `npm run build`                | Build for production                     |
| `npm run start`                | Start production server                  |
| `docker compose up -d`         | Start app + MongoDB containers           |
| `docker compose up -d --build` | Rebuild and start containers             |
| `docker compose down`          | Stop all containers                      |
| `docker compose logs -f app`   | Follow application logs                  |
| `bash scripts/deploy.sh`       | Deploy to VPS                            |
| `bash scripts/setup-vps.sh`    | Initial VPS setup                        |

## API Endpoints

All API routes follow RESTful conventions under `/api/v1/`:

| Method   | Endpoint               | Access | Description        |
| -------- | ---------------------- | ------ | ------------------ |
| `GET`    | `/api/v1/vehicles`     | Public | List all vehicles  |
| `POST`   | `/api/v1/vehicles`     | Admin  | Create a vehicle   |
| `GET`    | `/api/v1/vehicles/:id` | Public | Get vehicle detail |
| `PUT`    | `/api/v1/vehicles/:id` | Admin  | Update a vehicle   |
| `DELETE` | `/api/v1/vehicles/:id` | Admin  | Delete a vehicle   |

The same pattern applies to `/bookings`, `/drivers`, `/gallery`, `/news`, `/reviews`, and `/services`.

## License

This project is proprietary. All rights reserved.

---

<div align="center">

Made by **Bagas** [Contact via WhatsApp](https://wa.me/6285280239768)

</div>

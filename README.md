# Full-Stack Authentication System

This is a full-stack authentication system built with React, TypeScript, Node.js, and modern development practices.

## Project Structure

The project is organized into two main directories:

```
/
├── frontend/          # React TypeScript application
└── backend/          # Node.js TypeScript server
```

## Tech Stack

### Frontend

- React with TypeScript
- Vite
- React Query
- React Hook Form
- Zod
- Emotion (Styled Components)
- React Router DOM

### Backend

- Node.js with TypeScript
- Express.js
- Prisma (ORM)
- PostgreSQL
- JSON Web Tokens (JWT)
- bcrypt

## Features

- User authentication (login/register)
- Protected routes
- Form validation
- Type safety
- Modern UI design
- Secure password handling
- JWT-based authentication
- Error handling
- Database integration

## Getting Started

1. Clone the repository
2. Set up the backend:

   ```bash
   cd backend
   npm install
   # Create .env file with required variables
   npx prisma generate
   npx prisma migrate dev
   npm run dev
   ```

3. Set up the frontend:

   ```bash
   cd frontend
   npm install
   # Create .env file if needed
   npm run dev
   ```

4. Access the application:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## Environment Variables

### Backend (.env)

```
DATABASE_URL="postgresql://user:password@localhost:5432/assignment_db"
JWT_SECRET="your-secret-key"
PORT=5000
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000/api
```

## Development

Each directory contains its own README with specific instructions for development and available commands.

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Protected routes
- Input validation
- Error handling
- Secure HTTP-only cookies

## Type Safety

The project uses TypeScript throughout the stack for maximum type safety:

- Zod schemas for validation
- Type-safe API calls
- Strict TypeScript configuration
- Prisma-generated types

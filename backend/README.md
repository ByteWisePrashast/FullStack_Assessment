# Backend Service

This is the backend service for the authentication system, built with Node.js, Express, TypeScript, and Prisma.

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Prisma (ORM)
- PostgreSQL
- JSON Web Tokens (JWT)
- bcrypt

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── server.ts      # Main application file
├── prisma/
│   └── schema.prisma  # Database schema
└── package.json
```

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/assignment_db"
   JWT_SECRET="your-secret-key"
   PORT=5000
   ```

3. Set up the database:

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- POST `/api/auth/register`

  - Register a new user
  - Body: `{ email: string, password: string }`

- POST `/api/auth/login`
  - Login with existing credentials
  - Body: `{ email: string, password: string }`

## Error Handling

The application includes a custom error handling middleware that processes:

- Validation errors
- Authentication errors
- Database errors
- Generic server errors

## Security

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Environment variables for sensitive data
- Input validation using Zod

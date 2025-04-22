# Frontend Application

This is the frontend application for the authentication system, built with React, TypeScript, and modern development practices.

## Tech Stack

- React
- TypeScript
- Vite
- React Query
- React Hook Form
- Zod
- Emotion (Styled Components)
- React Router DOM

## Project Structure

```
frontend/
├── src/
│   ├── components/     # UI components
│   ├── hooks/         # Custom hooks
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
└── package.json
```

## Features

- User authentication (login/register)
- Form validation with Zod
- Protected routes
- Modern UI with Emotion
- Type-safe API calls
- Efficient state management with React Query

## Setup Instructions

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory (if needed):

   ```
   VITE_API_URL=http://localhost:5000/api
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Component Structure

### Authentication

- `LoginForm` - Handles user login
- `RegisterForm` - Handles user registration
- `ProtectedRoute` - Protects routes that require authentication
- `AuthLayout` - Layout for authentication pages

### Styling

The application uses Emotion for styling, providing:

- Consistent theme
- Responsive design
- Component-scoped styles
- Global styles

## Type Safety

- Zod schemas for form validation
- TypeScript interfaces for API responses
- Strict type checking enabled

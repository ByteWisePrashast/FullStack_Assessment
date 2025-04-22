import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { useAuth } from './hooks/useAuth';
import styled from '@emotion/styled';

const queryClient = new QueryClient();

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
`;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : <>{children}</>;
};

const Welcome = styled.div`
  text-align: center;
  padding: 2rem;
  background: #2a2a2a;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 2rem auto;
  color: white;
`;

const LogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1.5rem;
  font-size: 1rem;
  
  &:hover {
    background-color: #c0392b;
  }
`;

const Home = () => {
  const { logout } = useAuth();
  return (
    <Welcome>
      <h1>Welcome to the Dashboard!</h1>
      <p>You have successfully logged in.</p>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </Welcome>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppContainer>
          <Routes>
            <Route
              path="/login"
              element={
                <AuthLayout>
                  <LoginForm />
                </AuthLayout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthLayout>
                  <RegisterForm />
                </AuthLayout>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AppContainer>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

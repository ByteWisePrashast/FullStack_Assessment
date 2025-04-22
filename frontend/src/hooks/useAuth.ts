import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../services/api';
import { LoginFormData, RegisterFormData } from '../types/auth';

export const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: (data: LoginFormData) => authApi.login(data),
    onSuccess: (response) => {
      localStorage.setItem('token', response.data.token);
      navigate('/');
    },
  });

  const register = useMutation({
    mutationFn: (data: RegisterFormData) => authApi.register(data),
    onSuccess: (response) => {
      localStorage.setItem('token', response.data.token);
      navigate('/');
    },
  });

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return {
    login,
    register,
    logout,
    isAuthenticated: !!localStorage.getItem('token'),
  };
}; 
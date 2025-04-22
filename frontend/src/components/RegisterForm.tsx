import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterFormData } from '../types/auth';
import { useAuth } from '../hooks/useAuth';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1a1a1a;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  background: #2a2a2a;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  font-size: 1.75rem;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  background: #3a3a3a;
  border: 1px solid #4a4a4a;
  border-radius: 4px;
  font-size: 1rem;
  color: white;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::placeholder {
    color: #888;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 1rem;
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const LoginContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
  color: #888;
`;

const LoginLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin-left: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const RegisterForm = () => {
  const { register: registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    registerUser.mutate(data);
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>Create an Account</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
          
          <InputContainer>
            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputContainer>

          <Button type="submit" disabled={isSubmitting || registerUser.isPending}>
            {registerUser.isPending ? 'Creating account...' : 'Sign up'}
          </Button>

          {registerUser.isError && (
            <ErrorMessage>
              {registerUser.error instanceof Error ? registerUser.error.message : 'An error occurred'}
            </ErrorMessage>
          )}
        </Form>

        <LoginContainer>
          Already have an account?
          <LoginLink to="/login">Login</LoginLink>
        </LoginContainer>
      </FormContainer>
    </PageContainer>
  );
}; 
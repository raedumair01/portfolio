import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Main Container
const LoginSignupContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(158.86deg, #1C2A34 10.36%, #111A20 49.58%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Form Container
const FormContainer = styled.div`
  width: 600px;
  background: #1C2C35;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 500px;
  height: 70%;
  overflow: hidden;
`;

// Title
const FormTitle = styled.h1`
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 36px;
  background: linear-gradient(180deg, #B0FBBC 0%, #82F9A1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 30px;
`;

// Input Field Style
const InputField = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin: 10px 0;
  font-size: 16px;
  font-family: 'Jost', sans-serif;
  background: #111A20;
  color: #ECF8FF;
  border: none;
  border-radius: 6px;
  outline: none;
`;

// Error Message styled to ensure layout remains consistent
const ErrorMessage = styled.p`
  color: red;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  margin-top: 5px;
  min-height: 16px;
`;

// Success Message
const SuccessMessage = styled.p`
  color: green;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  margin-top: 10px;
`;

// Toggle Text for switching between forms
const ToggleText = styled.p`
  color: #ECF8FF;
  font-family: 'Jost', sans-serif;
  cursor: pointer;
  margin: 20px 0;
`;

// Button Style
const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  font-family: 'Jost', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #111A20;
  background: #83F9A2;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #B0FBBC;
  }
`;

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Use the useNavigate hook

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setSuccessMessage('');
  };

  // Validate form inputs
  const validate = () => {
    let validationErrors = {};
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email address is invalid';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (!isLogin && !formData.fullName) {
      validationErrors.fullName = 'Full name is required';
    }

    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccessMessage(isLogin ? 'Login successful!' : 'User account created successfully!');

      // Simulate login/signup process, then navigate to the home page
      setTimeout(() => {
        navigate('/home'); // Redirect to the home page after successful login/signup
      }, 1000);
    }
  };

  // Update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <LoginSignupContainer>
      <FormContainer>
        <FormTitle>{isLogin ? 'Login' : 'Signup'}</FormTitle>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <InputField
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              <ErrorMessage>{errors.fullName}</ErrorMessage>
            </>
          )}

          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.email}</ErrorMessage>

          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <ErrorMessage>{errors.password}</ErrorMessage>

          <SubmitButton type="submit">{isLogin ? 'Login' : 'Signup'}</SubmitButton>
        </form>

        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

        <ToggleText onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Login'}
        </ToggleText>
      </FormContainer>
    </LoginSignupContainer>
  );
};

export default LoginSignup;

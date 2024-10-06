// WelcomePage.js

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const WelcomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background: linear-gradient(to right, #5f2c82, #49a09d); /* Gradient background */
`;

const WelcomeText = styled.h1`
  font-size: 3rem;
  color: #ffffff; /* Text color */
  margin-top: 20vh; /* Adjust margin as needed */
  text-align: center; /* Center align the text */
`;

const BackgroundImage = styled.div`
  background-image: url('C:\Users\himas\OneDrive\Desktop\eye-health-app\eye-health-app\public\welcome.jpg');
  background-size: cover;
  width: 100%;
  height: 50vh; 
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1; 
`;

const QuoteText = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  margin-top: 10px; 
`;

const StartButton = styled.button`
  position: absolute;
  bottom: 40px;
  right: 20px;
  padding: 15px 30px;
  background-color: #f8f9fa;
  color: #343a40;
  border: none;
  cursor: pointer;
`;

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/main');
  };

  return (
    <WelcomePageContainer>
      <WelcomeText>Welcome to OptiSecure</WelcomeText>
      <BackgroundImage />
      <QuoteText>Protecting Your Eyes Every Day</QuoteText>
      <StartButton onClick={handleStartClick}>Let's Get Started</StartButton>
    </WelcomePageContainer>
  );
};

export default WelcomePage;








// Quotations.js

import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  font-size: 1.5rem;
  color: #ffffff;
  padding: 20px;
  background-image: url('/eye-health.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 100%;
  height: 500px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const QuoteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const dailyQuotes = [
  "Take care of your eyes, they're the window to your world.",
  "Your eyes are your most important asset, protect them.",
  "Healthy eyes, healthy life.",
  "Keep your eyes healthy and see the world clearly.",
  "Your Future is Bright, See it Clearly.",
  "We Bring You Clarity",
  "Wear Lens and Perfect your Eye Care",
  "Our sight is the most perfect and most delightful of all our senses.",
];

const Quotations = () => {
  const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];

  return (
    <QuoteContainer>
      <QuoteOverlay>{randomQuote}</QuoteOverlay>
    </QuoteContainer>
  );
};

export default Quotations;


// Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #343a40;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 2rem;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="logo.png" alt="OptiSecure Logo" />
      {<h4>OptiSecure</h4> }
    </HeaderContainer>
  );
};

export default Header;

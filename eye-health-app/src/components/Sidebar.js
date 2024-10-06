// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border-radius: 8px;
  &:hover {
    background-color: #e2e6ea;
  }
`;

const IconImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const IconLabel = styled.span`
  font-size: 1rem;
  color: #343a40;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Link to="profile">
        <IconContainer>
          <IconImage src="profiless.png" alt="Profile" />
          <IconLabel>Profile</IconLabel>
        </IconContainer>
      </Link>
      <Link to="tips">
        <IconContainer>
          <IconImage src="tips.png" alt="Daily Tips" />
          <IconLabel>Daily Tips</IconLabel>
        </IconContainer>
      </Link>
      <Link to="exercises">
        <IconContainer>
          <IconImage src="exercise.png" alt="Eye Exercises" />
          <IconLabel>Eye Exercises</IconLabel>
        </IconContainer>
      </Link>
      <Link to="settings">
        <IconContainer>
          <IconImage src="settings.png" alt="Settings" />
          <IconLabel>Settings</IconLabel>
        </IconContainer>
      </Link>
      
    </SidebarContainer>
  );
};

export default Sidebar;



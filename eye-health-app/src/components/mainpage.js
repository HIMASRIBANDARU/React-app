import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Quotations from './Quotations';
import { Outlet, useLocation } from 'react-router-dom';

const MainPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const MainPage = () => {
  const location = useLocation();


  const isMainPage = location.pathname === '/main' || location.pathname === '/';


  const isNestedRoute = location.pathname.startsWith('/main');

  return (
    <MainPageContainer>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <Content>
          {isMainPage && <Quotations />} {/* Render Quotations only on the main page */}
          {isNestedRoute && <Outlet />} {/* Render nested routes when in '/main' route */}
        </Content>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;














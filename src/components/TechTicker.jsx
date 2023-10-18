'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  animation: moveLeft 10s linear infinite;
`;

const Logo = styled.img`
  width: 100px;
  margin-right: 1rem;
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const TechTicker = () => {
  return (
    <LogoContainer>
      <Logo src="/images/logo1.png" alt="Logo 1" />
      <Logo src="/images/logo2.png" alt="Logo 2" />
      <Logo src="/images/logo3.png" alt="Logo 3" />
      {/* Add more logos here */}
    </LogoContainer>
  );
};

export default TechTicker;

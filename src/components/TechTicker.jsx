'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import imagesDir from '../resources/1.png';
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
      <Logo src={imagesDir} alt="Logo" />
      <Logo src={imagesDir} alt="Logo" />
      <Logo src={imagesDir} alt="Logo" />
    </LogoContainer>
  );
};

export default TechTicker;

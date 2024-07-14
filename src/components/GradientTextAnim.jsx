// Suggested code may be subject to a license. Learn more: ~LicenseLog:3527377538.

import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GradientText = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #ff0080, #ff0000);
  animation: ${gradientAnimation} 5s linear infinite;
`;

const GradientTextAnim = ({ text }) => {
  return (
    <GradientText>
      {text}
    </GradientText>
  );
};

export default GradientTextAnim;

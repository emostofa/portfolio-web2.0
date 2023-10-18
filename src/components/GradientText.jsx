'use client';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe animation for the gradient effect
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

// Create a styled component with the gradient animation
const GradientTextAnimated = styled.span`
  font-size: 6rem;
  font-weight: bold;
  background: linear-gradient(90deg, #2193b0,#f89ca8, #74dddd  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 200% 100%;
  animation: ${gradientAnimation} 5s linear infinite;
`;

function GradientText({children}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <GradientTextAnimated >
        {children}
      </GradientTextAnimated>
    </div>
  );
}

export default GradientText;

import React, { useState, useEffect } from 'react';
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
function GradientText({children, styling, gradient}) {
  

// Create a styled component with the gradient animation
// background: linear-gradient(90deg, #2193b0,#f89ca8, #74dddd  );

const GradientTextAnimated = styled.span`

  
  background: linear-gradient(90deg, ${gradient?? '#fff,#fff,#fff  '});
  background-clip: text;
  -webkit-background-clip: text;
  
  background-size: 200% 100%;
  animation: ${gradientAnimation} 5s linear infinite;
`;

  return (
    <div className={styling}>
      <GradientTextAnimated >
        {children}
      </GradientTextAnimated>
    </div>
  );
}

export default GradientText;

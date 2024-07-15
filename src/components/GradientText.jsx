// Suggested code may be subject to a license. Learn more: ~LicenseLog:1841157141.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1136311251.
import React from 'react';
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

// Create a styled component with the gradient animation OUTSIDE the function
const GradientTextAnimated = styled.span`
  background: linear-gradient(90deg, ${({ $gradient }) => $gradient ?? '#fff,#fff,#fff'}); // Use $gradient
  background-clip: text;
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: ${gradientAnimation} 5s linear infinite;
`;
function GradientText({children, styling, gradient}) {
  return (
    <div className={styling}>
      <GradientTextAnimated $gradient={gradient}> {/* Pass gradient with $ prefix */}
        {children}
      </GradientTextAnimated>
    </div>
  );
}

export default GradientText;

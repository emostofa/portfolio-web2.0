'use client';
import React, { useEffect } from 'react';

const ParallaxEffect = ({children}) => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-text');

      parallaxElements.forEach((element) => {
        const scrollY = window.scrollY;
        const parallaxFactor = element.getAttribute('data-parallax-factor');
        const translateY = -scrollY * parallaxFactor;
        element.style.transform = `translateY(${translateY}px)`;
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-text">
      {children}
    </div>
  );
};

export default ParallaxEffect;

'use client';
import React, { useState, useEffect } from 'react';

const ScrambleText = ({ text, jumbleDuration, descrambleDuration }) => {
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    let animationFrameId;
    let currentIndex = 0;

    const animateJumble = (timestamp) => {
      const elapsed = timestamp - startTime;

      if (elapsed < jumbleDuration) {
        // Jumble characters during the jumbleDuration
        const progress = elapsed / jumbleDuration;
        const jumbledText = text
          .split('')
          .map((char, index) => {
            if (Math.random() < progress) {
              return char;
            } else {
              return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Random lowercase letter
            }
          })
          .join('');

        setScrambledText(jumbledText);
        animationFrameId = requestAnimationFrame(animateJumble);
      } else if (elapsed < jumbleDuration + descrambleDuration) {
        // Descramble characters character by character during the descrambleDuration
        const descrambleProgress = (elapsed - jumbleDuration) / descrambleDuration;
        const descrambledText = text.slice(0, currentIndex + 1) +
          scrambledText.slice(currentIndex + 1);
        setScrambledText(descrambledText);
        currentIndex++;
        animationFrameId = requestAnimationFrame(animateJumble);
      } else {
        // Animation is complete, set to the original text
        setScrambledText(text);
      }
    };

    const startTime = performance.now();
    animationFrameId = requestAnimationFrame(animateJumble);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, jumbleDuration, descrambleDuration]);

  return <div className="scramble-text">{scrambledText}</div>;
};

export default ScrambleText;

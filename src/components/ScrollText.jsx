'use client';
import React, { useState, useEffect } from 'react';

const AnimatedTextJoiner = ({ textArray, letterDuration, jumbleDuration }) => {
  const [currentText, setCurrentText] = useState('');
  const [jumbledText, setJumbledText] = useState('');
  const [showTransparentBox, setShowTransparentBox] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTransparentBox(false);
      setCurrentText('');
      setJumbledText(textArray.join(''));
    }, 1000); // Timeout after 10 seconds

    return () => clearTimeout(timeout);
  }, [textArray]);

  useEffect(() => {
    if (!showTransparentBox) {
      const interval = setInterval(() => {
        if (jumbledText.length > 0) {
          setCurrentText((prevText) => {
            const randomIndex = Math.floor(Math.random() * jumbledText.length);
            const letter = jumbledText.charAt(randomIndex);
            setJumbledText((prevJumbledText) =>
              prevJumbledText.slice(0, randomIndex) + prevJumbledText.slice(randomIndex + 1)
            );
            return prevText + letter;
          });
        }
      }, letterDuration);

      return () => clearInterval(interval);
    }
  }, [showTransparentBox, jumbledText, letterDuration]);

  return (
    <div>
      {showTransparentBox && <div className="transparent-box">{currentText}</div>}
      {!showTransparentBox && <div className="jumbled-box">{currentText}</div>}
    </div>
  );
};

export default AnimatedTextJoiner;

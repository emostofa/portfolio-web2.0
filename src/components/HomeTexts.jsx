import React from 'react'
import ScrambleText from './ScrambleText';
export default function HomeTexts() {
    const text = "ScrambleText allows you to animate the scrambling of text.";

    const scrambleTextProps = {
      text: "ScrambleText allows you to animate the scrambling of text.",
      chars: "lowerCase",
      revealDelay: 0.5,
      tweenLength: false,
    };
  
    return (
      <div>
        <ScrambleText text={text} scrambleTextProps={scrambleTextProps} />
      </div>
    );
  };


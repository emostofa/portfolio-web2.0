'use client';
import React from 'react';
import { useRef, useState } from 'react';
import { useScramble } from 'use-scramble';

export default function Scrambler({delay, texts, speed, tick, step, scramble, seed, chance, overDrive,styling, replayM}) {
  const [index, setIndex] = useState(0);
  const loopRef = useRef();

    const { ref, replay } = useScramble({
        
        speed: speed? speed : 1,
        tick: tick ? tick : 1,
        step: step ? step : 1,
        scramble: scramble ? scramble : 4,
        seed: seed ? seed : 0,
        playOnMount: true,
        chance: chance? chance : 0.7,
        overdrive: overDrive ? overDrive : true,
        ignore: [" ", "!", "?"],
        text: texts && texts.length > 0 ? texts[index ? index : 0] : null ,
    onAnimationStart: () => {
      clearInterval(loopRef.current)
    },
    onAnimationEnd: () => {
      clearInterval(loopRef.current)
      loopRef.current = setTimeout(() => {
        setIndex((index) => (index < texts.length - 1 ? index + 1 : 0))
      }, delay? delay : 1800);
    },
      });
  return (
    <p className={styling} onMouseOver={replayM?replayM:replay}  ref={ref} onClick={replay} onFocus={replay} />
  )
}



  
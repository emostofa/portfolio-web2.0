'use client';
import React from 'react';
import { useScramble } from 'use-scramble';

export default function Scrambler({text, speed, tick, step, scramble, seed, chance, overDrive}) {
    const { ref, replay } = useScramble({
        text: text,
        speed: speed? speed : 1,
        tick: tick ? tick : 1,
        step: step ? step : 1,
        scramble: scramble ? scramble : 4,
        seed: seed ? seed : 0,
        playOnMount: true,
        chance: chance? chance : 0.5,
        overdrive: overDrive ? overDrive : true
       
      });
  return (
    <div ref={ref} onMouseOver={replay} 
    onFocus={replay} >{text}</div>
  )
}

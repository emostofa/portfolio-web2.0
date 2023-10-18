'use client';
import Image from 'next/image';
import ima from '../resources/1.png';
import React, { useState , useEffect } from 'react';
import Scrambler from './Scrambler';
import GradientText from './GradientText';

function HomeHeading() {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const scrambleSteps = [
    { action: "scramble", times: 1 },
    { action: "descramble", times: 1, delay: 2000 },
  ];
  useEffect(() => {
    // Automatically hide the pop-up after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setShow(false);
      setHide(true);
    }, 5000);

    // Clear the timer when the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    <div className={`transition-all duration-[2000ms] transform ${show ? 'scale-0' : 'scale-50'}`}>
      <Image src={ima} alt="Profile" width={500} height={400} /> 
     
    </div>

    <div className={`transition-all duration-[2000ms] transform ${hide ? 'scale-0' : 'scale-200'}`}>
      {/* <h1 className={`text-7xl font-bold -mt-72 text-white p-4  rounded-md shadow-lg`}>
        
      </h1> */}
      <GradientText>

      <Scrambler text={'Hi There!'} speed={.11} tick={1} scramble={4}  seed={0} chance={0.5} overDrive={126}/>
      </GradientText>
      
      
    </div>
    
    <div className={`transition-all delay-100 duration-1000 transform ease-in-out ${show ? 'scale-0' : 'scale-150'}`}>
    <h1 className={`text-6xl font-bold  -mt-32 text-white p-4 pt-2 rounded-md shadow-lg`}>
        I'm Mostofa Dhali Emon.
      </h1>
      
    </div>


  
      
    </>
  );
}

export default HomeHeading;

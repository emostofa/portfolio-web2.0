import React from "react";
import Scrambler from "@/components/Scrambler";
import GradientText from "@/components/GradientText";
const App = () => {
  
  let count = Math.random().toPrecision(1);
  let overDriveVal = Math.floor(Math.random() * (126 - 32 + 1)) + 32;


  return (
    <>
      <GradientText  colors={['#ee9ca7', '#ffdde1', '#2193b0', '#6dd5ed']}>
       <Scrambler text={'Hi There!'} speed={.11} tick={1} scramble={4}  seed={0} chance={0.5} overDrive={overDriveVal} />
     
      </GradientText>
    </>
  );
};

export default App;

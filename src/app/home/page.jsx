import React from 'react';
import ScrambleText from '../../components/ScrambleText';
const App = () => {
 

  return (
    <h1 className="flex flex-col items-center text-6xl justify-center min-h-screen w-full">

      <ScrambleText text="Hello!!" jumbleDuration={1000} descrambleDuration={6000} delay={200}  />
    </h1>
      
  );
};

export default App;

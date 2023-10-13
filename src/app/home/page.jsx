import React from 'react';
import AnimatedTextJoiner from '../../components/ScrollText';

function App() {
  const textArray = ["T","i","s"," ","i","s"," ","a","n"," ","a","n","i","m","a","t","e","d"," ","t","e","x","t"," ","j","o","i","n","e","r"];
  const animationDuration = 1000; // 1 second

  return (
    <div className="App">
      <AnimatedTextJoiner textArray={textArray} animationDuration={animationDuration} jumbleDuration={5} />
    </div>
  );
}

export default App;

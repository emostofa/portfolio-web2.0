import React from "react";
import { Parallax } from "react-scroll-parallax";
import GradientText from "./GradientText";
import Scrambler from "./Scrambler";

export default function Experi({
  children,
  image,
  text,
  styling,
  description,
  gradient,
  imageStyling
}) {
  return (
    <>
      
        <div className={imageStyling}>

        {image && <img src={image} />}
        </div>
        <GradientText styling={styling} gradient={gradient}>
          <Scrambler texts={[text]} overDrive={true} />
          <h1 className="text-2xl md:text-8xl text-white font-thin">
            {description}
          </h1>
          {children}
        </GradientText>
      
    </>
  );
}

"use client";
import React from "react";
import Scrambler from "./Scrambler";
import GradientText from "./GradientText";
import Image from "next/image";
export default function FirstSection({name}) {
  const nameTitle = "I'm "+name;

  return (

    <div className="flex flex-col  items-center justify-center dark:text-white h-screen ">
    <Image src="/avatar.svg" height={200} width={200} alt="avatar" />
    <GradientText
      styling={
        "text-4xl md:text-8xl text-transparent  flex items-center justify-center"
      }
      gradient={"#fafaa4,#fa44  ,#fa4"}
    >
      Hi there!
    </GradientText>


    <GradientText
      styling={
        "text-4xl md:text-8xl text-transparent  flex items-end justify-center"
      }
    >
      <Scrambler
        texts={[nameTitle]}
        overDrive={true}
        speed={1}
        tick={1}
        seed={0}
        replayM={() => {}}
      />
    </GradientText>
    <div className=" mt-5 p-16 md:p-0">
      <img
        src="/scroll.png"
        height={100}
        width={70}
        className=" white invert"
        alt="scroll"
      />
    </div>
  </div>

  
  )
}

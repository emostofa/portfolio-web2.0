'use client';
import React from "react";
import Scrambler from "./Scrambler";
import Experi from "./Experi";
import GradientText from "./GradientText";

export default function HomeView() {
  const introText = [
    "A Software Developer",
    "A Mern-Stack Developer",
    "A SQA Engineer",
    "A Web Developer"
  ];
  const nameTitle = "I'm Mostafa Dhali Emon,";
  return (
    <>
      {/* 1st section */}
      <div className="flex flex-col  items-center justify-center text-white h-screen ">
        <Experi
          text={"Hi there! <br/>"}
          image={"/avatar.svg"}
          styling={
            "text-4xl md:text-8xl text-transparent flex items-center justify-center"
          }
          imageStyling={" flex items-center   "}
          gradient={"#fff,#000,#fa4"}
        >
          <GradientText
            styling={
              "text-4xl md:text-8xl text-transparent flex items-end justify-center"
            }
            gradient={"#fff,#000,#fa4"}
          >
            {nameTitle}
          </GradientText>
        </Experi>
        <div className=" mt-5">
          <img
            src="/scroll.png"
            height={100}
            width={70}
            className=" white invert"
            alt="scroll"
          />
        </div>
      </div>

      {/* 2nd section */}

      <div className="flex flex-col  items-center justify-center text-white bg-[url('/self3.1.png')] bg-fixed bg-[length:25rem]  bg-no-repeat bg-[55rem_6rem] bg-contain h-screen  ">
        <h2 className="text-3xl md:text-6xl md:leading-loose  font-thin">
          Let me <span className="text-blue-400">introduce</span> Myself
        </h2>
        <div className=" flex w-full items-center justify-left">
          <div className="w-1/2 px-16">
            <h1 className="text-2xl md:text-4xl">{nameTitle}</h1>
            <Scrambler
              styling="text-2xl md:text-3xl   font-thin"
              texts={introText}
            />
            <p className="text-l md:text-xl font-thin">
              I love to build Web Apps. I also like to test them.
              My areas of interest are making web
              technologies easier to use.
              <br />
              I discovered my passion for programming and have learnt
              something, I guess. <br/>
              I am good at programming languages such as- 
              <Scrambler texts={["Java", "C", "JavaScript", "Python"]} delay={1600} />
              
              
              <br />I am familiar with
              {<Scrambler
                styling={"flex"}
                delay={3000}
                texts={["Node.js,", "Express.js,"]}
              />}
              & Modern Javascript Library and Frameworks like{" "}
              <Scrambler
                delay={3000}
                texts={["React.js", "Next.js", "Tailwindcss", "Bootstrap"]}
              />
            </p>
          </div>
      
          <div>
            {/* <img src="/self3.1.png" height={300} width={300} className="w-[10rem] md:w-[25rem]" alt="self" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

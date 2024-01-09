"use client";
import React from "react";
import Scrambler from "./Scrambler";

export default function SecondSection({ name }) {
  const introText = [
    "A Software Developer",
    "A Mern-Stack Developer",
    "A SQA Engineer",
    "A Web Developer",
  ];
  const nameTitle = name;


  return (
    <>
      <div className="h-screen dark:text-white">
      <h2 className="text-4xl md:text-6xl text-transparent  dark:text-white  flex items-center justify-center">
      Let me&nbsp;<span className="text-blue-400">introduce</span>&nbsp;Myself
      </h2>

<div className="flex w-full mt-10 md:p-0">

        <div className="md:w-1/2 w-full  ">
        <h1 className="text-2xl md:text-4xl lg:text-6xl  font-thin">I&apos;m {nameTitle}</h1>
            <Scrambler
              styling="text-2xl md:text-3xl lg:text-4xl  font-thin"
              texts={introText}
            />
            <div className="text-l md:text-xl lg:text-2xl font-thin">
              I love to build Web Apps. I also like to test them. My areas of
              interest are making web technologies easier to use.
              <br />
              I discovered my passion for programming and have learnt something,
              I guess. <br /> <br />
              I am good at programming languages such as- &nbsp;
              <Scrambler
                texts={["Java", "C", "JavaScript", "Python"]}
                delay={1600}
                styling={"inline"}
              />
              <br />I am familiar with&nbsp;
              {
                <Scrambler
                  styling={"inline"}
                  delay={3000}
                  texts={["Node.js,", "Express.js,"]}
                />
              }
               <br />& Modern Javascript Library and Frameworks like {" "}
              <Scrambler
                delay={3000}
                texts={["React.js", "Next.js", "Tailwindcss", "Bootstrap"]}
              />
            </div>
        </div>

        <div className="md:w-1/2">

        </div>
</div>

        
      </div>
    </>
  );
}

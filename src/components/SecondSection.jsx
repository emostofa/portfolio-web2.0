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
      <div className="container mx-auto h-screen flex flex-col items-center justify-center dark:text-white">

        <h2 className="text-4xl md:text-6xl text-transparent  dark:text-white  flex items-center justify-center">
          Let me&nbsp;<span className="text-blue-400">introduce</span>&nbsp;Myself
        </h2>

        <div className="flex w-full mt-10 md:p-0">

          <div className="md:w-1/2 w-full p-5 md:p-6 lg:p-8 ">

            <div className="flex items-center">
              <h1 className="text-2xl md:text-4xl lg:text-6xl text-gray-500 font-light">I'm {nameTitle}</h1>
              <img src="/pngegg.png" alt="profile" className="mt-4 w-5 h-5 rounded-full ml-4" />
            </div>


            <Scrambler
              styling="text-2xl md:text-3xl lg:text-4xl  "
              texts={introText}
            />
            <div className="text-l md:text-xl  lg:text-2xl font-thin pt-2 md:pt-5">
              <p className="text-align:justify">
                I love to build Web Apps. I also like to test them. My areas of
                interest are making web technologies easier to use.

                I discovered my passion for programming and have learnt something,
                I guess.
                I am good at programming languages such as- &nbsp;</p>
              <Scrambler
                texts={["Java", "C", "JavaScript", "Python"]}
                delay={1600}
                styling={"inline font-bold "}
              />
              <br />I am familiar with&nbsp;
              {
                <Scrambler
                  styling={"inline font-bold"}
                  delay={3000}
                  texts={["Node.js,", "Express.js,"]}
                />
              }
              <br />& Modern Javascript Library and Frameworks like {" "}
              <Scrambler
                delay={3000}
                texts={["React.js", "Next.js", "Tailwindcss", "Bootstrap"]}
                styling={"inline font-bold"}
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

"use client";
import React from "react";
import Scrambler from "./Scrambler";
import GradientText from "./GradientText";
import Image from "next/image";

export default function HomeView() {
  const introText = [
    "A Software Developer",
    "A Mern-Stack Developer",
    "A SQA Engineer",
    "A Web Developer",
  ];
  const nameTitle = "I'm Mostofa Dhali Emon";
  return (
    <>
      {/* 1st section */}
      <div className="flex flex-col  items-center justify-center text-white h-screen ">
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

      {/* 2nd section */}

      <div className="flex flex-col  items-center justify-center text-white bg-[url('/self3.1.png')] bg-fixed bg-[length:25rem]  bg-no-repeat bg-[55rem_6rem] bg-contain h-screen  ">
        <h2 className="text-3xl md:text-6xl md:leading-loose leading-loose  font-thin">
          Let me <span className="text-blue-400">introduce</span> Myself
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full px-16 order-last md:order-first">
            <h1 className="text-2xl md:text-4xl   font-thin">{nameTitle}</h1>
            <Scrambler
              styling="text-2xl md:text-3xl   font-thin"
              texts={introText}
            />
            <p className="text-l md:text-xl font-thin">
              I love to build Web Apps. I also like to test them. My areas of
              interest are making web technologies easier to use.
              <br />
              I discovered my passion for programming and have learnt something,
              I guess. <br />
              I am good at programming languages such as-
              <Scrambler
                texts={["Java", "C", "JavaScript", "Python"]}
                delay={1600}
              />
              <br />I am familiar with
              {
                <Scrambler
                  styling={"flex"}
                  delay={3000}
                  texts={["Node.js,", "Express.js,"]}
                />
              }
              & Modern Javascript Library and Frameworks like{" "}
              <Scrambler
                delay={3000}
                texts={["React.js", "Next.js", "Tailwindcss", "Bootstrap"]}
              />
            </p>
          </div>

          <div className="md:w-1/2 w-full md:flex md:items-center order-first md:order-last">
            <img
              src="/self3.1.png"
              height={300}
              width={300}
              className="w-full md:hidden "
              alt="self"
            />
          </div>
        </div>
      </div>
    </>
  );
}

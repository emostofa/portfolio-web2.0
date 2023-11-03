'use client';
import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
const HomeHeading = ({ title, desc, backgroundImage, subTitle, image, bgColor }) => {
  return (
    <ParallaxBanner style={{backgroundImage: "backgroundImage"}} className={`aspect-[1/1] md:h-[60vh] lg:h-[110vh] ${bgColor}` }>
      {/* <ParallaxBannerLayer
        className="bg-right bg-no-repeat bg-cover  bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        translateY={[0, 50]}
        
        scale={[1.05, 1, "easeOutCubic"]}
        shouldAlwaysCompleteAnimation={false}
        speed={-15}
      ></ParallaxBannerLayer> */}

      <ParallaxBannerLayer
        speed={20}
        className="absolute ml-9 w-[40rem]  flex flex-col items-left justify-center"
      >
        <h1 className=" text-6xl md:text-8xl text-white font-thin">{title}</h1>
        <h1 className="text-5xl md:text-6xl text-white font-thin">
          {subTitle}
        </h1>
        <p className={`text-2xl md:text-4xl text-white`}>{desc}</p>

      </ParallaxBannerLayer>
      <ParallaxBannerLayer  opacity={[.3, 1, "easeOutCubic"]}>
        {image && (
          <img
            className="justify-right ml-auto w-[15rem] md:w-[33rem] "
            src={image}
            alt="image"
          />
        )}
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default HomeHeading;

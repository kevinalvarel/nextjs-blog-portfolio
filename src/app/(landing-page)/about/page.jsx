"use client";
import React from "react";
import ScrollFloat from "./components/ScrollFloat";
import BlurText from "./components/BlurText";
import SplashCursor from "./components/SplashCursor";

const Page = () => {
  return (
    <div className="container">
      <div className="mx-10 justify-items-center items-center py-5">
        <div className="py-36 md:py-40 sm:py-44 mb-28">
          <BlurText
            text="Hello"
            delay={150}
            animateBy="letters"
            direction="bottom"
            className="font-extrabold text-5xl"
          />
          <SplashCursor />
        </div>
        <div className="py-36 md:py-40 sm:py-44">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=80%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.3}
            textClassName="font-bold"
          >
            I'm Kevin
          </ScrollFloat>
        </div>
      </div>
    </div>
  );
};

export default Page;

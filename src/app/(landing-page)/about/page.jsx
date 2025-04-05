import React from "react";

const Page = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-3xl">About Me</h1>
      </div>
      <div className="grid grid-cols-2 mx-10 justify-items-center items-center py-5">
        <h2 className="font-bold text-xl">Hi</h2>
        <p className="text-center font-medium">
          I am currently an Informatics student with a strong passion for
          technology and problem-solving. As I delve deeper into the world of
          computer science, I am particularly drawn to web development. I find
          great joy in learning new programming languages, exploring web
          technologies, and building interactive websites. My curiosity drives
          me to stay updated with the latest trends in the industry, and I am
          always eager to expand my knowledge and skills. Beyond just coding, I
          enjoy the creative process of designing user-friendly interfaces and
          ensuring that websites are both functional and visually appealing. In
          the future, I aspire to leverage my skills to create innovative
          solutions that can positively impact the digital world.
        </p>
      </div>
    </div>
  );
};

export default Page;

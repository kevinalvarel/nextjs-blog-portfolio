import React from "react";
import ScrollVelocity from "../animations/ScrollVelocity/ScrollVelocity";

const Separator = () => {
  return (
    <div className="py-36">
      <ScrollVelocity
        texts={["Kevin Alvarel", "Portofolio Blog"]}
        velocity={100}
        className="custom-scroll-text"
        damping={50}
      />
    </div>
  );
};

export default Separator;

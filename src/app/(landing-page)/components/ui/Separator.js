import React from "react";
import ScrollVelocity from "../../animations/ScrollVelocity/ScrollVelocity";

const Separator = () => {
  return (
    <div className="my-10">
      <ScrollVelocity
        texts={["Kevin Alvarel", "Portofolio Blog"]}
        velocity={100}
        className="custom-scroll-text font-bold uppercase"
      />
    </div>
  );
};

export default Separator;

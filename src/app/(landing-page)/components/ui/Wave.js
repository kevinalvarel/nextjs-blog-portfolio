import React from "react";
import Threads from "../../animations/Threads/Threads";

const Wave = () => {
  return (
    <div style={{ width: "100%", height: "200%", position: "relative" }}>
      <Threads amplitude={2} distance={0.5} enableMouseInteraction={true} />
    </div>
  );
};

export default Wave;

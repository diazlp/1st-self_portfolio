import React, { useEffect } from "react";
import { FaReact, FaHtml5, FaNodeJs, FaJsSquare, FaCss3 } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

const Carousel = () => {
  return (
    <div>
      <div className="carousel-parent position-relative" id="carousel">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          Technologies I Use
        </h1>

        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaHtml5 color="orange" />
          </span>
          <span style={{ "--i": 2 }}>
            <FaCss3 color="blue" />
          </span>
          <span style={{ "--i": 3 }}>
            <FaJsSquare color="yellow" />
          </span>
          <span style={{ "--i": 4 }}>
            <FaReact color="cyan" />
          </span>
          <span style={{ "--i": 5 }}>
            <SiNextdotjs />
          </span>
          <span style={{ "--i": 6 }}>
            <FaNodeJs color="green" />
          </span>
          <span style={{ "--i": 7 }}>
            <SiMongodb color="#589636" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

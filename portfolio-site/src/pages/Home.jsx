import React, { useRef } from "react";
import "../css/Home.css";
import VariableProximity from "../components/VariableProximity";
import RotatingText from "../components/RotatingText";
import Navbar from "./Navbar";

function Home() {
  const containerRef = useRef(null);
  return (
    <div className="homepage-wrapper">
      <div className="home-container">
        <div className="site-name">
          <h1>ozencdonmezer.com</h1>
        </div>
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="variable-proximity"
        >
          <VariableProximity
            label={
              "Hi! I'm Özenç. This site is a summary of my journey with coding."
            }
            className={"variable-proximity-demo"}
            fromFontVariationSettings="'wght' 600, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className="rotating-text">
          <RotatingText
            texts={[
              "I code, design, and learn",
              "This is where I bring",
              " everything",
              "I've built together.",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <div className="paragraph">
          <p>
            Each line of code is a step in my learning journey, each design a
            story waiting to be told. This space is a canvas for my ideas, a
            place where I combine passion and skill to build meaningful
            projects. Join me as I explore, create, and evolve.
          </p>
        </div>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;

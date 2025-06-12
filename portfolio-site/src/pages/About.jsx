import React from "react";
import FallingText from "../components/FallingText";
import "../css/About.css";
import BackToHomeButton from "../components/BackToHomeButton";

function About() {
  return (
    <div className="falling-text">
      <BackToHomeButton />
      <FallingText
        text={`Hello! I’m Özenç, a passionate individual in the fields of software development and design. I see coding not just as a job, but as a way to express myself and add value to the world. In this fast-paced, ever-changing tech landscape, staying open to learning and growth is essential to me. I strive to explore different programming languages, tools, and methodologies to create innovative and effective solutions.This site serves as a platform where I share the knowledge and experiences I’ve gained throughout my career, showcase my projects, and document my personal growth. My goal is to share what I’ve learned with others and create an inspiring resource. Throughout my journey in software and design, I continuously work on learning new technologies and gaining diverse perspectives.
          If you share the same passion or want to learn more about my projects, feel free to reach out!`}
        highlightWords={[
          "Özenç",
          "coding",
          "design",
          "personaş",
          "experiences",
          "projects",
          "journey",
          "development",
        ]}
        highlightClass="highlighted"
        trigger="hover"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
}

export default About;

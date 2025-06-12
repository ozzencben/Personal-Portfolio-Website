import React, { useEffect, useState, useRef } from "react";
import "../css/ProjecList.css";
import BackToHomeButton from "../components/BackToHomeButton";
import ScrollVelocity from "../components/ScrollVelocity";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <>
      <div ref={scrollRef} style={{ overflow: "hidden", backgroundColor:"#D6FEAA"}}>
        <ScrollVelocity
          scrollContainerRef={scrollRef}
          texts={[
            "These are the things I do",
            "I can do it for you",
            "You can contact me",
          ]}
          velocity={50}
          damping={30}
          stiffness={300}
          className="scroll-text"
          parallaxClassName="parallax-wrapper"
          scrollerClassName="scroller"
        />
      </div>
      <BackToHomeButton />
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectList;

import React, { useEffect, useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import "../css/Homepage.css";
import GridMotion from "../components/GridMotion";
import img1 from "../assets/bloom.jpg";
import img2 from "../assets/greenade.jpg";
import img3 from "../assets/hand.jpg";
import img4 from "../assets/lion.jpg";
import img5 from "../assets/meow.jpg";
import img6 from "../assets/nike.jpg";
import img7 from "../assets/pink.jpg";
import img8 from "../assets/red.jpg";
import img9 from "../assets/scotland.jpg";
import img10 from "../assets/vietnam.jpg";
import MagnetButton from "../components/MagnetButton";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import avatar from "../assets/avatar.png";

function Homepage() {
  const imageItems = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <>
      <BackToHomeButton />
      <div className="homepage-container">
        <div className="grid-section">
          <GridMotion items={imageItems} gradientColor="black" />
        </div>
        <div className="welcome">
          <p>
            Hi, I’m Özenç. A developer exploring frontend & backend. I enjoy
            building small but meaningful web projects.
          </p>
          <img src={avatar} alt="Avatar image" />
          <small>And yep, this is exactly what I look like.</small>
        </div>
        <div className="project-class">
          <div className="project-text">
            <h2>My Projects</h2>
            <p>
              I’ve tried to turn what I’ve learned into useful, fun, and
              meaningful projects. Below you can find the ones I’ve worked on
              over time — all part of my personal learning journey.
            </p>
          </div>
          <div className="project-container">
            {projects.slice(-3).map((project) => (
              <div key={project.id} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
          <div className="button-class">
            <MagnetButton
              padding={50}
              disabled={false}
              magnetStrength={1}
              className="magnet-button"
            >
              <Link to="/projects">Go To Project!</Link>
            </MagnetButton>
          </div>
        </div>
        <div className="blog-section">
            <h2>Blog coming soon.</h2>
            <p>I'm setting up a space to share what I’ve learned, experienced, and built. It's a bit quiet here for now — but not for long!</p>
        </div>
        <div className="contact-me">
          <p>Got a project or just want to say hi? Let’s talk!</p>
          <Link to="/contact">Contact Me</Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;

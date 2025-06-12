import React from "react";
import DecryptedText from "../components/DecryptedText";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "../css/Contact.css";
import BackToHomeButton from "../components/BackToHomeButton";

function Contact() {
  return (
    <>
      <BackToHomeButton />
      <div className="contact-container">
        <div className="decrypted-text">
          <DecryptedText
            text="You don’t need a special reason to get in touch. Whether you want to share an idea, talk about a project, offer a collaboration, request a service, or just say “hi,” I’d be happy to hear from you. Connecting, meeting new people, and thinking together is always valuable. Even a short message can be the beginning of something great."
            className="text"
          />
        </div>
        <div className="links">
          <a href="#">
            <FaGithub />
            <small>Github</small>
          </a>
          <a href="#">
            <FaLinkedin />
            <small>Linkedin</small>
          </a>
        </div>
        <div className="mail">
          <a href="mailto:ozzencben@gmail.com">ozzencben@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export default Contact;

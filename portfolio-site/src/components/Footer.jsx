import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <div className="mail">
            <a href="mailto:ozzencben@gmail.com">ozzencben@gmail.com</a>
          </div>
          <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
        <div>
            <span>Copy Right || created by <strong>Özenç Dönmezer</strong></span>
        </div>
      </div>
    </>
  );
}

export default Footer;

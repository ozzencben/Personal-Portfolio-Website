import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarElement = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Projects",
    },
    {
      title: "Contact",
    },
    {
      title: "Blog",
    },
  ];

  return (
    <>
      <nav className="navbar-nav">
        <ul>
          {navbarElement.map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.title.toLowerCase()}`}
                className="navbar-element"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

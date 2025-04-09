import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <h1>Krystal</h1>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={location.pathname === "/projects" ? "active" : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className={location.pathname === "/resume" ? "active" : ""}
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

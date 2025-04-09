import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation-bar">
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Resume
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;

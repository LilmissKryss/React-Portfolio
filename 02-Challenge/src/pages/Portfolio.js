import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "project1.png",
      appLink: "",
      repoLink: "",
    },
    {
      title: "Project 2",
      image: "project2.png",
      appLink: "",
      repoLink: "",
    },
    {
      title: "Project 3",
      image: "project3.png",
      appLink: "",
      repoLink: "",
    },
    {
      title: "Project 4",
      image: "project4.png",
      appLink: "",
      repoLink: "",
    },
    {
      title: "Project 5",
      image: "project5.png",
      appLink: "",
      repoLink: "",
    },
  ];
}

return (
  <div className="portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  </div>
);

export default Portfolio;

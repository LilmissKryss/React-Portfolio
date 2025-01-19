import React from "react";

function Project({ title, image, appLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={appLink} target="-blank" rel="">
        Deployed App
      </a>
      <a href={repoLink} target="-blank" rel="">
        GitHub Repo
      </a>
    </div>
  );
}

export default Project;

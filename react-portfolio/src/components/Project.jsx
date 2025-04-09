import React from 'react';

function Project({ title, image, appLink, repoLink }) {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="links">
        <a href={appLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </div>
  );
}

export default Project;

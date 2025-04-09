import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import "./styles.css";

// Section Components
function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-left">
          <div className="profile-image"></div>
        </div>
        <div className="about-right">
          <p>
            Hi, I'm Krystal a passionate software developer based in Texas, with
            a background in business analysis and a growing love for crafting
            clean, efficient code. I specialize in building full-stack web
            applications using technologies like React, Node.js, Express, and
            PostgreSQL.
          </p>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const projectList = [
    {
      title: "Weather Dashboard",
      image: "/images/02-portfolio-4.jpg",
      appLink: "https://weather-dashboard-9j39.onrender.com",
      repoLink: "https://github.com/LilmissKryss/weather_dashboard",
    },
    {
      title: "Vehicle Builder ",
      image: "/images/02-portfolio-3.jpg",
      appLink: "#",
      repoLink: "https://github.com/LilmissKryss/vehicle-builder",
    },
    {
      title: "Readme Generator",
      image: "/images/02-run-buddy.jpg",
      appLink: "#",
      repoLink: "https://github.com/LilmissKryss/readme_generator",
    },
    {
      title: "Candidate Search",
      image: "/images/02-portfolio-1.jpg",
      appLink: "https://candidate-search-3ozm.onrender.com",
      repoLink: "https://github.com/LilmissKryss/candidate-search",
    },
    {
      title: "Tech Quiz Tech Suite",
      image: "/images/02-portfolio-2.jpg",
      appLink: "https://ci-cd-pipeline-2l53.onrender.com",
      repoLink: "https://github.com/LilmissKryss/tech_quiz_test_suite",
    },
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            appLink={project.appLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

function Resume() {
  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <div className="download-container">
        <a href="/resume.pdf" download className="resume-download-link">
          Download my Resume
        </a>
      </div>
      <div className="skills-section">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
        </ul>

        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST APIs</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

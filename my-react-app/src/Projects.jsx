import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      title: "Quiz Management System",
      description:
        "A real-time web app built with Firebase for managing quizzes with teacher and student roles, featuring instant insights and secure login.",
      live: "#",
      github: "#",
      tags: ["React", "Firebase", "HTML", "CSS"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This modern responsive portfolio built with React showcases my projects, skills, and contact information with smooth navigation.",
      live: "#",
      github: "#",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      title: "Git & Version Control Practice",
      description:
        "A hands-on experience using Git and GitHub to manage version control, collaborate on projects, and maintain clean code workflow.",
      live: "#",
      github: "#",
      tags: ["Git", "GitHub", "CLI"],
    },
  ];

  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

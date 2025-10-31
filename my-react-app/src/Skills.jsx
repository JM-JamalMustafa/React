import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "SEO Optimization", level: "Beginner" },
    { name: "Git & GitHub", level: "Intermediate" },
    { name: "Responsive Design", level: "Advanced" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "./About.css";
import profileImg from "./assets/Profile.jpg"; // update path if different

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImg} alt="Kashif Ali" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I’m <span className="highlight">Kashif Ali 👋</span>
          </p>
          <p>
            A passionate <span className="highlight">Web Developer</span> with
            strong skills in React, JavaScript, and modern front-end
            technologies. I love creating clean, responsive, and interactive
            websites that bring ideas to life.
          </p>
          <p>
            My focus is on writing clean code, learning new tools, and
            continuously improving my skills to deliver high-quality digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
//           <Link to="/contact" className="btn-secondary">
//             Contact Me
//           </Link>
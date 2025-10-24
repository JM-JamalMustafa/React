// src/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Hi, I’m Kashif Ali</h1>
        <p className="hero-subtitle">
          A passionate <span>Web Developer</span> & aspiring creator.  
          Building modern, responsive, and interactive experiences.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

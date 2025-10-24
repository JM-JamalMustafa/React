// src/Navbar.jsx
import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const glowRef = useRef(null);

  // Close menu on window resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Glow follows mouse
  const handleMouseMove = (e) => {
    if (glowRef.current) {
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    }
  };

  const links = [
    { id: "home", name: "Home", path: "/" },
    { id: "about", name: "About", path: "/about" },
    { id: "skills", name: "Skills", path: "/skills" },
    { id: "projects", name: "Projects", path: "/projects" },
    { id: "contact", name: "Contact", path: "/contact" },
  ];

  return (
    <header className="site-nav" onMouseMove={handleMouseMove}>
      <span className="nav-glow" ref={glowRef}></span>

      <div className="nav-inner fade-in">
        <NavLink className="logo" to="/" end>
          Kashif Ali
        </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l, i) => (
            <div
              key={l.id}
              className="nav-item slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <NavLink
                to={l.path}
                end={l.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                <span className="link-text">{l.name}</span>
              </NavLink>
            </div>
          ))}
        </nav>

        <button
          className={`hamburger ${open ? "is-active" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

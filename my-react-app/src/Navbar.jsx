// src/Navbar.jsx
import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const glowRef = useRef(null);

  // close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // glow effect follows mouse
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

  // animation variants
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 12 },
    },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <motion.header
      className="site-nav"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* glow span */}
      <span className="nav-glow" ref={glowRef}></span>

      <div className="nav-inner">
        <NavLink className="logo" to="/" end>
          Kashif Ali
        </NavLink>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {links.map((l, i) => (
            <motion.div
              key={l.id}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
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
            </motion.div>
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
    </motion.header>
  );
}

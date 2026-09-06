"use client";

import { useState } from "react";
import Image from "next/image";

/* =========================
   ICONS
========================= */

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-1.02-.014-1.85-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.092.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.59 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.414-.012 2.742 0 .268.18.579.688.481A10.003 10.003 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.999H3.559v11.453Z" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SendIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ArrowRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ArrowDownIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function MenuIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

function CodeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

function RocketIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6.05 11a22.35 22.35 0 0 1-3.95 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="16" cy="8" r="1" />
    </svg>
  );
}

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Java",
  "Git & GitHub",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumePath = `${process.env.NODE_ENV === "production" ? "/Portfolio" : ""}/cv.pdf`;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="site-main">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#home" onClick={closeMenu} className="logo">
            richman<span>beka</span>
          </a>

          <div className="desktop-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href={resumePath} download className="nav-talk">
            Download Resume
            <DownloadIcon size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mobile-talk"
            >
              Let&apos;s Talk
              <ArrowRightIcon size={16} />
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero section">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow">
              <span />
              <p>Software Developer</p>
            </div>

            <h1>
              Hi, I&apos;m
              <br />
              <span className="hero-name">
                <strong>Robera</strong>{" "}
                <span>Mulgeta.</span>
              </span>
            </h1>

            <p className="hero-description">
              I&apos;m a student and software developer passionate about
              building modern, responsive and useful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
                <ArrowRightIcon size={17} />
              </a>

              <a href={resumePath} download className="secondary-button">
                Download Resume
                <DownloadIcon size={17} />
              </a>
            </div>

            <div className="availability">
              <span />
              Available for opportunities &amp; collaboration
            </div>

            <a href="#about" className="scroll-link">
              Scroll to explore
              <ArrowDownIcon size={14} />
            </a>

            <div className="hero-stats" aria-label="Portfolio highlights">
              <div>
                <strong>2+</strong>
                <span>Years learning</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Core technologies</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Curiosity</span>
              </div>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="code-card-wrapper">
            <div className="code-glow" />

            <div className="profile-card">
              <div className="profile-card-topline">
                <span className="profile-status"><span /> Available</span>
                <span className="profile-index">01 / 01</span>
              </div>

              <div className="profile-image-frame">
                <Image
                  src="/profile.jpeg"
                  alt="Illustrated portrait of Robera Mulgeta"
                  fill
                  priority
                  sizes="(max-width: 1000px) 620px, 48vw"
                  className="profile-image"
                />
                <div className="profile-image-shade" />
                <div className="profile-image-caption">
                  <span>Robera Mulgeta</span>
                  <small>Software Developer</small>
                </div>
              </div>
            </div>

            <div className="building-card">
              <p>Currently building</p>
              <strong>
                Digital Experiences<span>.</span>
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section bordered-section">
        <div className="container">
          <div className="section-label">
            <span />
            <p>About Me</p>
          </div>

          <div className="about-grid">
            <h2>
              Turning ideas into
              <span> digital experiences.</span>
            </h2>

            <div className="about-text">
              <p>
                I&apos;m Robera Mulgeta, operating professionally as
                richmanbeka. I&apos;m a fourth-year Software Engineering
                student at Addis Ababa University and a full-stack
                developer with a strong focus on frontend architecture.
              </p>

              <p>
                I build modern, high-performance web applications with
                intuitive, responsive user interfaces. Through complex,
                real-world projects, I continue refining my engineering
                capabilities across TypeScript, React, Next.js and the
                wider modern web ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section bordered-section">
        <div className="container">
          <div className="section-label">
            <span />
            <p>Skills</p>
          </div>

          <h2 className="section-title">
            Technologies I work with<span>.</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <div className="skill-top">
                  <span>0{index + 1}</span>
                  <CodeIcon size={20} />
                </div>

                <h3>{skill}</h3>

                <div className="skill-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section bordered-section">
        <div className="container">
          <div className="section-label">
            <span />
            <p>Projects</p>
          </div>

          <h2 className="section-title">
            Selected work<span>.</span>
          </h2>

          <div className="projects-empty">
            <div className="project-icon">
              <RocketIcon size={28} />
            </div>

            <p className="project-empty-title">
              Projects will be added here soon.
            </p>

            <p className="project-empty-description">
              Real projects, screenshots, descriptions and GitHub
              links will be added when the portfolio is ready.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section bordered-section">
        <div className="container">
          <div className="section-label">
            <span />
            <p>Contact</p>
          </div>

          <div className="contact-grid">
            <div>
              <h2 className="contact-title">
                Let&apos;s build something
                <span> together.</span>
              </h2>

              <p className="contact-description">
                Feel free to connect with me for collaboration,
                projects or just to say hello.
              </p>
            </div>

            <div className="contact-buttons">
              <a
                href="mailto:lilbeka33@gmail.com"
                className="contact-button primary-contact"
              >
                <MailIcon size={17} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/richmanbeka/"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                <LinkedinIcon size={18} />
                LinkedIn
                <ArrowUpRightIcon size={15} />
              </a>

              <a
                href="https://github.com/richmanbeka"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                <GithubIcon size={18} />
                GitHub
                <ArrowUpRightIcon size={15} />
              </a>

              <a
                href="https://t.me/richmanbeka"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                <SendIcon size={17} />
                Telegram
                <ArrowUpRightIcon size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Robera Mulgeta.
          </p>
        </div>
      </footer>
    </main>
  );
}
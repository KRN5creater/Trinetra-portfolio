import React, {useEffect, useState} from "react";
import "./style.css";

export default function App() {
  const [isLight, setIsLight] =
  useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for contacting me!");
  };
  useEffect(() =>{document.body.className = isLight ? "light-theme" :"";}, [isLight] );

  
  return (
    <div>
      {/* HEADER + NAVIGATION */}
      <header className="site-header">
        <nav className="navbar">
          <div className="logo">KK</div>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="theme-toggle"
            onClick={() => setIsLight(!isLight)}
            >
              {isLight ? "🌙" :"🌞"}
            </button>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>

        {/* HERO */}
        <section className="hero-section" id="hero">
          <h1 className="hero-title">Hi I'm Trinetra</h1>

          <p className="tagline">
            Building responsive websites and turning ideas into engaging
            digital experiences
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <h2>About Me</h2>

          <div className="about-content">
            <figure className="profile-figure">
              <img
                src="/images/profile.jpeg"
                alt="profile pic"
              />

              <figcaption>Trinetra-Web Developer</figcaption>
            </figure>

            <div className="about-text">
              <p>I am student of Mathematics and computing and a passionate web developer</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-item">HTML</div>
            <div className="skill-item">CSS</div>
            <div className="skill-item">JS</div>
            <div className="skill-item">REACT</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="project-section" id="projects">
          <h2>My Projects</h2>

          <div className="project-grid">

            <article className="project-card">
              <img
                src="https://images.pexels.com/photos/37501562/pexels-photo-37501562.jpeg"
                alt="weather"
              />

              <h3>Weather App</h3>
              <p>Real time weather dashboard</p>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">API</span>
              </div>

              <a href="#" className="button">Live Demo</a>
              <a href="#" className="button">GitHub</a>
            </article>

            <article className="project-card">
              <img
                src="https://images.pexels.com/photos/1493759/pexels-photo-1493759.jpeg"
                alt="weather"
              />

              <h3>Weather App</h3>
              <p>Real time weather dashboard</p>

              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">API</span>
              </div>

              <a href="#" className="button">Live Demo</a>
              <a href="#" className="button">GitHub</a>
            </article>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <h2>Reach out to me @</h2>

          <form id="contact-form"
          onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                name="message"
                id="message"
                required
                rows="5"
              />
            </div>

            <button id="submit" type="submit">
              Send Message
            </button>

          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Trinetra Build with React
        </p>

        <nav id="footer">
          <a
            href="https://github.com/KRN5creater"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </footer>
    </div>
  );
}

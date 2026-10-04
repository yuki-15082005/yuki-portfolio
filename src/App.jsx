
import { useEffect, useState } from "react";
import yukiPhoto from "./assets/yuki photo.png";
import "./App.css";

const skills = [
  { name: "Java", type: "Development", level: "Core" },
  { name: "Python", type: "Programming", level: "Working knowledge" },
  { name: "React", type: "Frontend", level: "Building projects" },
  { name: "JavaScript", type: "Frontend", level: "Working knowledge" },
  { name: "HTML & CSS", type: "Web design", level: "Building projects" },
  { name: "SQL", type: "Database", level: "Fundamentals" },
  { name: "AI / ML", type: "Exploration", level: "Internship" },
  { name: "Graphic Design", type: "Creative", level: "Designing" },
];

const projects = [
  {
    number: "01",
    title: "Learning Management System",
    category: "WEB APPLICATION",
    description:
      "An LMS project built to support a learning platform. I contributed to the quiz module and its user-facing functionality.",
    tags: ["React", "Web Development", "Quiz Module"],
    link: "https://github.com/yuki-15082005/LearningManagementSystem",
    linkText: "View project",
    symbol: "✳",
    style: "project-purple",
  },
  {
    number: "02",
    title: "Employee Management System",
    category: "MANAGEMENT SYSTEM",
    description:
      "A software project focused on organizing employee information and making common management tasks easier.",
    tags: ["Java", "Database", "Application"],
    link: "https://github.com/yuki-15082005/employee-management-system",
    linkText: "View project",
    symbol: "▦",
    style: "project-blue",
  },
  {
    number: "03",
    title: "AI / ML Exploration",
    category: "LEARNING & EXPERIMENTS",
    description:
      "Exploring Python, AI and machine learning concepts through internship training and practical work.",
    tags: ["Python", "AI / ML", "Learning"],
    link: "",
    linkText: "Internship work",
    symbol: "⌘",
    style: "project-pink",
  },
];

const experience = [
  {
    date: "2026 — PRESENT",
    title: "AI / ML Python Intern",
    company: "RIS",
    description:
      "Completed Python training and currently working on real-time projects while exploring AI and machine learning.",
  },
  {
    date: "DEC 2025 — FEB 2026",
    title: "Learning Management System",
    company: "AdroIT Technologies Innovative Solutions Pvt. Ltd.",
    description:
      "Contributed to the LMS project, with a focus on the quiz module and its functionality.",
  },
  {
    date: "MAR 2025 — AUG 2025",
    title: "Java Full Stack Development Training",
    company: "HEJEX Technology",
    description:
      "Completed training in Java full stack development, covering programming and web application fundamentals.",
  },
];

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div
        className="cursor-glow"
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">Y.</span>
          <span>YUKI<span className="brand-dot">/</span>PORTFOLIO</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability-pill reveal">
              <span className="status-dot" />
              ECE STUDENT · DEVELOPER · DESIGNER
            </div>

            <p className="eyebrow reveal">HELLO, I'M</p>

            <h1 className="hero-title reveal">
              Yukesh
              <span className="gradient-text">Yadav.</span>
            </h1>

            <div className="hero-role reveal">
              <span className="role-line" />
              I build <span className="role-highlight">digital experiences.</span>
            </div>

            <p className="hero-description reveal">
              An engineering student with a creative mind, exploring web
              development, AI/ML, and visual design. I enjoy turning ideas
              into useful and memorable digital experiences.
            </p>

            <div className="hero-actions reveal">
              <a className="button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button-quiet" href="#about">
                Get to know me <span>↓</span>
              </a>
            </div>

            <div className="hero-footnote reveal">
              <span>BASED IN INDIA</span>
              <span className="footnote-separator">✳</span>
              <span>CLASS OF 2027</span>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-index">PROFILE / 001</div>
            <div className="photo-stage">
              <div className="photo-orbit orbit-a" />
              <div className="photo-orbit orbit-b" />
              <div className="photo-orbit orbit-c" />
              <div className="photo-halo" />

              <div className="photo-frame">
                <img
                  src={yukiPhoto}
                  alt="Portrait of Yukesh Yadav"
                  className="hero-photo"
                />
              </div>

              <div className="floating-chip chip-top">
                <span className="chip-icon">✳</span>
                Creative mind
              </div>
              <div className="floating-chip chip-bottom">
                <span className="chip-live" />
                Always learning
              </div>
              <div className="floating-symbol symbol-one">✦</div>
              <div className="floating-symbol symbol-two">+</div>
              <div className="floating-symbol symbol-three">✳</div>
            </div>
            <div className="visual-caption">
              <span>DESIGN MEETS TECHNOLOGY</span>
              <span>01 — 05</span>
            </div>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to about">
            <span className="scroll-cue-line" />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-strip">
          <div className="strip-track">
            <span>BUILD</span><i>✳</i><span>DESIGN</span><i>✳</i>
            <span>CREATE</span><i>✳</i><span>LEARN</span><i>✳</i>
            <span>BUILD</span><i>✳</i><span>DESIGN</span><i>✳</i>
            <span>CREATE</span><i>✳</i><span>LEARN</span><i>✳</i>
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>

          <div className="about-grid">
            <div className="about-heading reveal">
              <h2>
                Curious by nature.
                <span className="gradient-text"> Creative by choice.</span>
              </h2>
              <div className="about-stamp">
                <span>Y</span>
                <small>MADE WITH<br />CURIOSITY</small>
              </div>
            </div>

            <div className="about-content reveal">
              <p>
                I'm Yukesh Yadav, a final-year Electronics and Communication
                Engineering student at Jeppiaar Engineering College, graduating
                in 2027.
              </p>
              <p>
                My interests sit at the intersection of technology and
                creativity. I've completed Java Full Stack training, explored
                Python and AI/ML through an internship, and worked on a
                Learning Management System project.
              </p>
              <p>
                I'm always looking for opportunities to learn, collaborate,
                and build things that make a difference.
              </p>

              <div className="about-facts">
                <div>
                  <span className="fact-number">01</span>
                  <span className="fact-name">Developer mindset</span>
                </div>
                <div>
                  <span className="fact-number">02</span>
                  <span className="fact-name">Creative thinking</span>
                </div>
                <div>
                  <span className="fact-number">03</span>
                  <span className="fact-name">Always learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap content-section">
            <SectionLabel number="02">MY TOOLKIT</SectionLabel>

            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">THINGS I'M WORKING WITH</p>
                <h2>Skills that keep <span className="gradient-text">growing.</span></h2>
              </div>
              <p className="heading-note">
                A mix of engineering, development, and creativity — still
                learning, always experimenting.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article
                  className="skill-card reveal"
                  key={skill.name}
                  style={{ "--delay": `${index * 65}ms` }}
                >
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="skill-spark">✳</span>
                  <h3>{skill.name}</h3>
                  <p>{skill.type}</p>
                  <span className="skill-level">{skill.level}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>

          <div className="section-heading reveal">
            <div>
              <p className="eyebrow">IDEAS IN ACTION</p>
              <h2>Some things I've <span className="gradient-text">built.</span></h2>
            </div>
            <p className="heading-note">
              Every project is a chance to experiment, solve a problem, and
              get a little better.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card ${project.style} reveal`}
                key={project.number}
              >
                <div className="project-topline">
                  <span>PROJECT / {project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-art" aria-hidden="true">
                  <div className="project-art-ring ring-one" />
                  <div className="project-art-ring ring-two" />
                  <span className="project-symbol">{project.symbol}</span>
                  <span className="project-art-caption">{project.category}</span>
                </div>

                <div className="project-details">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkText} <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-private-note">
                      Internship learning & practical work
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note reveal">
            More experiments and projects will be added as I keep building.
          </p>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap content-section">
            <SectionLabel number="04">THE JOURNEY SO FAR</SectionLabel>

            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">LEARNING THROUGH DOING</p>
                <h2>Every step adds <span className="gradient-text">something.</span></h2>
              </div>
            </div>

            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item reveal" key={item.title}>
                  <div className="timeline-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-body">
                    <h3>{item.title}</h3>
                    <p className="timeline-company">{item.company}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <SectionLabel number="05">LET'S CONNECT</SectionLabel>

          <div className="contact-panel reveal">
            <div className="contact-decoration" aria-hidden="true">✳</div>
            <p className="eyebrow">HAVE AN IDEA OR OPPORTUNITY?</p>
            <h2>
              Let's make something
              <span className="gradient-text"> meaningful.</span>
            </h2>
            <p className="contact-description">
              I'm open to learning opportunities, creative collaborations,
              and projects where technology meets design.
            </p>

            <a
              className="button-primary contact-button"
              href="mailto:yukeshyadav0@gmail.com?subject=Let's%20connect"
            >
              Email me <span>↗</span>
            </a>

            <div className="contact-links">
              <a href="https://github.com/yuki-15082005" target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
              <a href="https://www.linkedin.com/in/yukesh-yadav-j-b92ab032a" target="_blank" rel="noreferrer">
                LinkedIn <span>↗</span>
              </a>
              <a href="mailto:yukeshyadav0@gmail.com">
                Email <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">Y.</a>
        <p>Designed with curiosity. Built by Yukesh Yadav.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
import { useEffect } from "react";
import "./Resume.css";

function Resume() {

  useEffect(() => {
    const sections = document.querySelectorAll(".story-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToNext = (e) => {
    const currentSection = e.target.closest(".story-section");
    const nextSection = currentSection.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="resume-page">

      {/* SECTION 1 */}
      <section className="story-section intro">
        <h1>SHRAVANI S</h1>
        <h2>System Builder. Structured Thinker. Developer.</h2>
        <p>
          I build secure, scalable and logically structured systems
          that solve real-world problems.
        </p>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="story-section">
        <h2>Education</h2>
        <div className="content">
          <h3>CMR University</h3>
          <p>B.Tech – Computer Science Engineering (2022 – 2026)</p>
          <span>CGPA: 8.90</span>

          <h3>BGS PU College</h3>
          <p>PCMC (2020 – 2022)</p>
          <span>92.11%</span>
        </div>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="story-section">
        <h2>Projects</h2>
        <div className="content">
          <div className="project">
            <h3>Role-Based CRM System</h3>
            <p>
              Built a secure CRM with authentication,
              lead assignment workflow and structured database design.
            </p>
          </div>

          <div className="project">
            <h3>Student Performance Prediction System</h3>
            <p>
              Integrated Flask backend with Random Forest model
              and JWT-based secure access control.
            </p>
          </div>

          <div className="project">
            <h3>AI Log & Error Debugging Platform</h3>
            <p>
              Designed rule-based error classification and
              structured monitoring-style reporting system.
            </p>
          </div>

          <div className="project">
            <h3>Local Business Website</h3>
            <p>
              Developed a responsive website focused on clean UI,
              usability and structured implementation.
            </p>
          </div>
        </div>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="story-section">
        <h2>Technical Expertise</h2>
        <div className="skills">
          <span>Python</span>
          <span>Java</span>
          <span>Flask</span>
          <span>REST APIs</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>SQL</span>
          <span>SQLite</span>
          <span>GitHub</span>
          <span>Power BI</span>
          <span>Postman</span>
        </div>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="story-section">
        <h2>Leadership & Responsibility</h2>
        <div className="content">
          <h3>Event Organizer</h3>
          <p>
            Led a team of 10 members to organize events for
            500+ students during Pre-University Annual Fest.
          </p>

          <h3>Orphanage Volunteer</h3>
          <p>
            Assisted caretakers and supported 30+ children
            through educational and interactive activities.
          </p>
        </div>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="story-section">
        <h2>Certifications</h2>
        <div className="content">
          <p>SQL and Database Fundamentals – Simplilearn (2025)</p>
          <p>Python Foundation – Infosys Springboard (2025)</p>
          <p>Data Science & AI/ML – YBI Foundation (2024)</p>
        </div>

        <div className="scroll-indicator" onClick={scrollToNext}>
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </section>

      {/* LAST SECTION */}
      <section className="story-section ending">
        <h2>Driven by Structure. Focused on Impact.</h2>
      </section>

    </div>
  );
}

export default Resume;
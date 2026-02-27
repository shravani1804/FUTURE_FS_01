import "./Projects.css";
import { useState } from "react";

function Projects() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Role-Based CRM System",
      description:
        "Built a secure CRM system with authentication and role-based access control to manage leads and customer data efficiently.",
      tech: {
        Backend: ["Flask"],
        Database: ["SQLite"],
        Frontend: ["HTML", "CSS"]
      }
    },
    {
      id: 2,
      title: "Student Performance Prediction System",
      description:
        "Developed a machine learning application using Random Forest to predict student performance with secure JWT authentication.",
      tech: {
        Backend: ["Flask"],
        ML: ["Random Forest"],
        Security: ["JWT"],
        Database: ["SQLite"]
      }
    },
    {
      id: 3,
      title: "AI Log & Error Debugging Platform",
      description:
        "Designed a system to analyze logs, classify runtime errors, and generate structured explanations with recommended fixes.",
      tech: {
        Language: ["Python"],
        Logic: ["Rule-Based Classification"],
        System: ["Log Analysis"]
      }
    },
    {
      id: 4,
      title: "Local Business Website – Future Interns Task",
      description:
        "Designed and developed a responsive website for a local business as part of the Future Interns full stack task.",
      tech: {
        Frontend: ["HTML", "CSS", "JavaScript / React","Durable"],
        Design: ["Responsive Layout", "Modern UI"],
        Deployment: ["GitHub / Hosting"]
      }
    }
  ];

  return (
    <div className={`projects-page ${active ? "energy-mode" : ""}`}>
      <h1 className="projects-heading">Projects</h1>

      {/* Background Energy Particles */}
      {active && (
        <div className="energy-particles">
          {[...Array(20)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      )}

      <div className="timeline">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;
          const isActive = active === project.id;

          return (
            <div
              key={project.id}
              className={`timeline-row ${isActive ? "active-row" : ""}`}
            >
              {/* LEFT */}
              <div className="side">
                {isLeft && (
                  <div className="card">
                    <h3 onClick={() =>
                      setActive(isActive ? null : project.id)
                    }>
                      {project.title}
                    </h3>
                    {isActive && <p>{project.description}</p>}
                  </div>
                )}

                {!isLeft && isActive && (
                  <div className="tech-box left-tech">
                    {Object.entries(project.tech).map(([cat, items]) => (
                      <div key={cat}>
                        <strong>{cat}</strong>
                        <ul>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* CENTER */}
              <div className="center">
                <div className="dot"></div>
                {isActive && <div className="connector"></div>}
              </div>

              {/* RIGHT */}
              <div className="side">
                {!isLeft && (
                  <div className="card">
                    <h3 onClick={() =>
                      setActive(isActive ? null : project.id)
                    }>
                      {project.title}
                    </h3>
                    {isActive && <p>{project.description}</p>}
                  </div>
                )}

                {isLeft && isActive && (
                  <div className="tech-box right-tech">
                    {Object.entries(project.tech).map(([cat, items]) => (
                      <div key={cat}>
                        <strong>{cat}</strong>
                        <ul>
                          {items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
import React from "react";
import "./Portfolio.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
const skills = [
  "Dynamics 365 CE",
  "Power Platform",
  "Dataverse",
  "Power Apps",
  "Power Automate",
  "Power Pages",
  "C#",
  "JavaScript",
  "TypeScript",
  "React",
  "Azure",
  "Azure DevOps",
  "AI & Copilot",
];

const projects = [
  {
    title: "Dynamics 365 CRM Implementation",
    category: "Dynamics 365 CE",
    description:
      "Enterprise CRM implementation with customizations, integrations, workflows and business process automation.",
    icon: "bi bi-cloud-check",
  },
  {
    title: "Power Platform Solutions",
    category: "Power Platform",
    description:
      "Model-driven and canvas applications using Dataverse, Power Automate and Power Apps.",
    icon: "bi bi-grid-1x2",
  },
  {
    title: "AI & Copilot Solutions",
    category: "AI / Agentic AI",
    description:
      "AI-powered assistants and Copilot solutions for CRM and business process automation.",
    icon: "bi bi-stars",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="portfolio-badge">
                Dynamics 365 | Power Platform | AI
              </span>

              <h1>
                Building Intelligent
                <span> Business Solutions</span>
              </h1>

              <p>
                Dynamics 365 & Power Platform professional helping organizations
                build scalable CRM, automation and AI-powered solutions.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-primary">View My Work</button>

                <button className="btn btn-outline-primary">Contact Me</button>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="profile-card">
                <div className="profile-circle">
                  <i className="bi bi-person"></i>
                </div>

                <h3>Amar Sapkal</h3>
                <p>Dynamics 365 / Power Platform Architect</p>

                <div className="experience">
                  <strong>9+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>ABOUT ME</span>
            <h2>Technology & Business Expertise</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-7">
              <p className="about-text">
                I specialize in Microsoft Dynamics 365 CE and Power Platform
                solutions, focusing on architecture, development, integration
                and enterprise application design.
              </p>

              <p className="about-text">
                My experience includes Dataverse, Power Apps, Power Automate,
                Power Pages, Azure, JavaScript, TypeScript, C# and modern web
                technologies.
              </p>

              <p className="about-text">
                Currently focusing on AI, Copilot and agentic AI solutions for
                next-generation business applications.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="stats-card">
                <div>
                  <strong>9+</strong>
                  <span>Years Experience</span>
                </div>

                <div>
                  <strong>15+</strong>
                  <span>Technologies</span>
                </div>

                <div>
                  <strong>100+</strong>
                  <span>Solutions Delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-title">
            <span>TECHNOLOGIES</span>
            <h2>My Technical Skills</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <i className="bi bi-check-circle"></i>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span>PORTFOLIO</span>
            <h2>Featured Work</h2>
          </div>

          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <div className="project-card">
                  <div className="project-icon">
                    <i className={project.icon}></i>
                  </div>

                  <span>{project.category}</span>

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <button className="btn btn-link p-0">View Project →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

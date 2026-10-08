import React from "react";
import "./Courses.css";

const courses = [
  {
    title: "Dynamics 365 CE Development",
    level: "Intermediate",
    duration: "8 Weeks",
    icon: "bi bi-cloud",
    description:
      "Learn Dynamics 365 CE development from fundamentals to enterprise-level customization.",
    topics: [
      "Dataverse",
      "Plugins",
      "JavaScript",
      "Web API",
      "Custom APIs",
      "Security",
    ],
  },
  {
    title: "Power Platform Development",
    level: "Beginner to Advanced",
    duration: "6 Weeks",
    icon: "bi bi-grid",
    description:
      "Build real-world business applications using Power Apps, Power Automate and Dataverse.",
    topics: [
      "Power Apps",
      "Dataverse",
      "Power Automate",
      "Power Pages",
      "ALM",
      "Integration",
    ],
  },
  {
    title: "Dynamics 365 Solution Architecture",
    level: "Advanced",
    duration: "4 Weeks",
    icon: "bi bi-diagram-3",
    description:
      "Learn how to design scalable Dynamics 365 and Power Platform enterprise solutions.",
    topics: [
      "Architecture",
      "Integration",
      "Security",
      "ALM",
      "Azure",
      "Design Patterns",
    ],
  },
  {
    title: "AI & Copilot for Power Platform",
    level: "Advanced",
    duration: "4 Weeks",
    icon: "bi bi-stars",
    description:
      "Learn how to build AI-powered business solutions using Copilot and agentic AI concepts.",
    topics: [
      "Copilot Studio",
      "AI Agents",
      "Azure AI",
      "Dataverse",
      "API Integration",
      "Agentic AI",
    ],
  },
];

const Courses = () => {
  return (
    <div className="courses-page">
      {/* Hero */}
      <section className="courses-hero">
        <div className="container text-center">
          <span>LEARN FROM REAL PROJECT EXPERIENCE</span>

          <h1>
            Master Dynamics 365,
            <br />
            Power Platform & AI
          </h1>

          <p>
            Practical training designed around real-world enterprise scenarios
            instead of only theoretical concepts.
          </p>

          <button className="btn btn-primary btn-lg">Explore Courses</button>
        </div>
      </section>

      {/* Courses */}
      <section className="section">
        <div className="container">
          <div className="section-title text-center">
            <span>COURSES</span>
            <h2>Choose Your Learning Path</h2>
          </div>

          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-md-6" key={course.title}>
                <div className="course-card">
                  <div className="course-header">
                    <div className="course-icon">
                      <i className={course.icon}></i>
                    </div>

                    <div>
                      <span>{course.level}</span>
                      <h3>{course.title}</h3>
                    </div>
                  </div>

                  <p>{course.description}</p>

                  <div className="course-info">
                    <span>
                      <i className="bi bi-clock"></i>
                      {course.duration}
                    </span>

                    <span>
                      <i className="bi bi-camera-video"></i>
                      Live / Online
                    </span>
                  </div>

                  <hr />

                  <h6>What you'll learn</h6>

                  <div className="topic-list">
                    {course.topics.map((topic) => (
                      <span key={topic}>
                        <i className="bi bi-check"></i>
                        {topic}
                      </span>
                    ))}
                  </div>

                  <button className="btn btn-primary w-100 mt-4">
                    Enquire About Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry Submitted:", formData);

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="enquiry-page">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left */}
          <div className="col-lg-5">
            <span className="enquiry-label">GET IN TOUCH</span>

            <h1>
              Let's Build Something
              <span> Great Together</span>
            </h1>

            <p>
              Interested in training, consulting, Dynamics 365, Power Platform
              or AI solutions? Send your enquiry and I'll get back to you.
            </p>

            <div className="contact-item">
              <div>
                <i className="bi bi-envelope"></i>
              </div>

              <div>
                <small>Email</small>
                <strong>your@email.com</strong>
              </div>
            </div>

            <div className="contact-item">
              <div>
                <i className="bi bi-telephone"></i>
              </div>

              <div>
                <small>Phone</small>
                <strong>+91 XXXXX XXXXX</strong>
              </div>
            </div>

            <div className="contact-item">
              <div>
                <i className="bi bi-linkedin"></i>
              </div>

              <div>
                <small>LinkedIn</small>
                <strong>Connect with me</strong>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-7">
            <div className="enquiry-card">
              <h3>Send an Enquiry</h3>
              <p>Fill in the details and I'll contact you.</p>

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Full Name</label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone</label>

                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Course / Service</label>

                    <select
                      name="course"
                      className="form-select"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>

                      <option>Dynamics 365 CE Development</option>

                      <option>Power Platform Development</option>

                      <option>Solution Architecture</option>

                      <option>AI & Copilot</option>

                      <option>Consulting</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label>Experience</label>

                    <select
                      name="experience"
                      className="form-select"
                      value={formData.experience}
                      onChange={handleChange}
                    >
                      <option value="">Select experience</option>

                      <option>Fresher</option>
                      <option>1–3 Years</option>
                      <option>3–5 Years</option>
                      <option>5–8 Years</option>
                      <option>8+ Years</option>
                    </select>
                  </div>

                  <div className="col-12 mb-3">
                    <label>Message</label>

                    <textarea
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="Tell me about your requirement..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit Enquiry
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;

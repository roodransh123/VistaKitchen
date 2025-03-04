import React from "react";
import "../styles/Contact.css";
import "../style.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-page" style={{ marginTop: "6rem" }}>
      <div className="contact-header">
        <h2 style={{ color: "black", fontSize: "2.5rem" }}>Get in Touch</h2>
        <p style={{ textAlign: "center" }}>We'd love to hear from you! Fill out the form below or reach out directly.</p>
      </div>

      <div className="contact-container">
        <div className="contact-form">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Phone</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>Message</label>
            <textarea placeholder="Write your message..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div> 
    </div>
  );
}
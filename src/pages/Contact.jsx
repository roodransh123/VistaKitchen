import React, { useState } from "react";
import styled from "styled-components";

const ContactPage = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

const ContactHeader = styled.div`
  h2 {
    color: black;
    font-size: 2.5rem;
  }
  p {
    text-align: center;
    font-size: 1rem;
    color: #8491a3;
    margin-bottom: 30px;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactForm = styled.form`
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  textarea {
    height: 150px;
    resize: none;
  }
  
  button {
    width: 100%;
    padding: 14px;
    color: white;
    background-color: #214f4b;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #16c172;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    // Here, you can integrate an API or email service
  };

  return (
    <ContactPage>
      <ContactHeader>
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Fill out the form below or reach out directly.</p>
      </ContactHeader>

      <ContactContainer>
        <ContactForm onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </ContactForm>
      </ContactContainer>
    </ContactPage>
  );
}

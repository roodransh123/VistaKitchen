import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Vanity.css";
import "../style.css";

const carouselImages = [
  "/carousel_images/C1.webp",
  "/carousel_images/C2.webp",
  "/carousel_images/C3.webp",
];

export default function Ceilings() {
  const navigate = useNavigate();

  const imagesWithDuplicates = [
    carouselImages[carouselImages.length - 1],
    ...carouselImages,
    carouselImages[0],
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImageIndex === imagesWithDuplicates.length - 1) {
      setTimeout(() => {
        setCurrentImageIndex(1);
      }, 1000);
    }
  }, [currentImageIndex]);

  return (
    <div className="vanities">
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition:
              currentImageIndex === 1 ? "none" : "transform 0.5s ease-in-out",
          }}
        >
          {imagesWithDuplicates.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <span className="carousel-text">
                {index === 1 && (
                  <>
                    <p>Experience the Perfect Ceiling Designs</p>
                    <button onClick={() => navigate("/contact")}>Book Free Consultation</button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p>Explore Innovative Ceiling Textures</p>
                    <button onClick={() => navigate("/ceiling-form")}>Calculate Now</button>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p>Customize Your Ceiling Look</p>
                    <button onClick={() => navigate("/ceiling-form")}>Get Started</button>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="vanity-layout-container">
        <div className="grid-heading">
          <h2>Transform Your Interiors with Stunning Ceilings</h2>
          <p>Discover ceiling designs that blend aesthetics and functionality.</p>
        </div>

        <div id="layout-grid">
          <div className="grid-item">
            <div className="card-icon">
              <i className="fas fa-paint-roller" style={{ fontSize: "50px", color: "#3dff95", display: "block" }}></i>
            </div>
            <div className="card-content">
              <h3>Custom Ceiling Designs</h3>
              <p>Design ceilings that complement your interiors.</p>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="card-icon">
              <i className="fas fa-ruler-combined" style={{ fontSize: "50px", color: "#3dff95", display: "block" }}></i>
            </div>
            <div className="card-content">
              <h3>Space Optimization</h3>
              <p>Innovative designs for efficient space utilization.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="kitchen-inspiration-section">
        <h2>Get Inspired by Our Ceiling Designs</h2>
        <p>Explore modern, elegant, and functional ceiling inspirations.</p>

        <div className="inspiration-grid">
          <div className="inspiration-card" style={{ backgroundImage: "url(/others/false-ceilings.webp)" }}>
            <div className="inspiration-overlay">
              <h3>False Ceiling</h3>
              <p>Stylish and modern false ceiling designs.</p>
            </div>
          </div>
          <div className="inspiration-card" style={{ backgroundImage: "url(/others/wooden-ceilings.webp)" }}>
            <div className="inspiration-overlay">
              <h3>Wooden Ceiling</h3>
              <p>Elegant wooden textures.</p>
            </div>
          </div>
          <div className="inspiration-card" style={{ backgroundImage: "url(/others/modern-ceilings.webp)" }}>
            <div className="inspiration-overlay">
              <h3>Modern Ceiling</h3>
              <p>Stunning modern ceiling designs.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="last-section">
        <div className="last-text">
          <h2>Upgrade Your Ceilings Today</h2>
          <p>Start designing your perfect ceiling now.</p>
          <button onClick={() => navigate("/ceiling-form")}
            style={{
              width: "200px",
              padding: "12px 24px",
              fontSize: "1.2rem",
            }}
          >Get Started</button>
        </div>
      </div>
    </div>
  );
}
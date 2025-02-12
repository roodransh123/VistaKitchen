import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Vanity.css";

const carouselImages = [
  "/carousel_images/V1.jpg",
  "/carousel_images/V2.webp",
  "/carousel_images/V3.webp",
];

export default function Vanities() {
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
                    <p
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    >
                      Elegant Designs for Every Bathroom
                    </p>
                    <button onClick={() => navigate("/consultation")}>Book Free Consultation</button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    >
                      Get a Quick Price Estimate
                    </p>
                    <button onClick={() => navigate("/calculator")}>Calculate Now</button>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p
                      style={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "20px",
                        color: "white",
                      }}
                    >
                      Customize Your Vanity Today
                    </p>
                    <button onClick={() => navigate("/vanity-form")}>Get Started</button>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="vanity-layout-container">
        <div className="grid-heading">
          <h2 style={{ fontSize: "40px" }}>Transform Your Bathroom</h2>
          <p>
            Discover vanities that blend style and function, designed to enhance your bathroom space.
          </p>
        </div>

        <div id="layout-grid">
          <div className="grid-item">
            <div className="card-icon">
              <i className="fas fa-sink" style={{ fontSize: "50px", color: "#ff8c3d", display: "block" }}></i>
            </div>
            <div className="card-content">
              <h3>Custom Vanity Designs</h3>
              <p>Create vanities that suit your space and style.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="card-icon">
              <i className="fas fa-draw-polygon" style={{ fontSize: "50px", color: "#ff8c3d", display: "block" }}></i>
            </div>
            <div className="card-content">
              <h3>Space Optimization</h3>
              <p>Innovative solutions to maximize your bathroom space.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="card-icon">
              <i className="fas fa-pencil-ruler" style={{ fontSize: "50px", color: "#ff8c3d", display: "block" }}></i>
            </div>
            <div className="card-content">
              <h3>Vanity Planner</h3>
              <p>Design your perfect vanity with our intuitive planner.</p>
            </div>
          </div>

          <div className="grid-item">
            <div className="card-icon">
              <i className="fas fa-calculator" style={{ fontSize: "50px", color: "#ff8c3d", display: "block" }}></i>
            </div>
            <div className="card-content">
              <h3>Vanity Cost Calculator</h3>
              <p>Quickly estimate the cost of your new vanity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="vanity-types">
        <h2 style={{ fontSize: "40px" }}>Find the Perfect Fit</h2>
        <p>Explore different styles and configurations to match your needs.</p>

        <div className="vanity-images">
          <div className="vanity-type">
            <img src="/others/freestanding_vanity.jpg" alt="Freestanding Vanity" />
            <h3>Freestanding Vanity</h3>
            <p>Classic, versatile, and perfect for any bathroom size.</p>
          </div>

          <div className="vanity-type">
            <img src="/others/wall_mounted_vanity.jpg" alt="Wall-Mounted Vanity" />
            <h3>Wall-Mounted Vanity</h3>
            <p>Modern and sleek, offering a minimalist look and more floor space.</p>
          </div>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={() => alert("Redirecting to form")}>Calculate Now</button>
      </div>

      <div className="last-section">
        <div className="last-text">
          <h2>Ready to Upgrade Your Bathroom?</h2>
          <p>Start designing your custom vanity today.</p>
          <button
            onClick={() => alert("Redirecting to contact page")}
            style={{
              width: "200px",
              padding: "12px 24px",
              fontSize: "1.2rem",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
} 

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Wardrobe.css";

const carouselImages = [
  "/carousel_images/W1.jpg",
  "/carousel_images/W2.jpg",
  "/carousel_images/W3.jpg",
];

export default function Wardrobe() {
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
    <div className="wardrobe">
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: currentImageIndex === 1 ? "none" : "transform 0.5s ease-in-out",
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
                      Home to Beautiful Interiors
                    </p>
                    <button onClick={() => navigate("/contact")}>
                      Book Free Consultation
                    </button>
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
                      Estimate the cost hassle-free
                    </p>
                    <button onClick={() => navigate("/wardrobe-form")}>
                      Calculate Now
                    </button>
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
                      Craft Your Dream Wardrobe
                    </p>
                    <button onClick={() => navigate("/wardrobe-form")}>
                      Get Started
                    </button>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
  padding: "40px", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  textAlign: "center" 
}}>
  <div>
    <h2 style={{ fontSize: "40px", marginBottom: "20px", textAlign: "center" }}>Transform Your Wardrobe</h2>
    <p>
      Create a wardrobe that reflects your style with our range of custom
      designs, storage solutions, and more.
    </p>
  </div>

  <div style={{ 
    display: "flex", 
    justifyContent: "space-around", 
    flexWrap: "wrap", 
    gap: "30px", 
    marginTop: "30px" 
  }}>
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column", 
      textAlign: "center", 
      maxWidth: "300px", 
      margin: "0 auto" 
    }}>
      <div style={{ marginBottom: "20px" }}>
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-tshirt"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Custom Wardrobe Design</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Design your dream wardrobe with tailored features.</p>
      </div>
    </div>

    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column", 
      textAlign: "center", 
      maxWidth: "300px", 
      margin: "0 auto" 
    }}>
      <div style={{ marginBottom: "20px" }}>
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-boxes"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Storage Solutions</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Maximize space with innovative storage options.</p>
      </div>
    </div>

    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column", 
      textAlign: "center", 
      maxWidth: "300px", 
      margin: "0 auto" 
    }}>
      <div style={{ marginBottom: "20px" }}>
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-clipboard-list"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Wardrobe Planner</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Plan your wardrobe with our free wardrobe planner.</p>
      </div>
    </div>

    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      flexDirection: "column", 
      textAlign: "center", 
      maxWidth: "300px", 
      margin: "0 auto" 
    }}>
      <div style={{ marginBottom: "20px" }}>
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-calculator"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Wardrobe Cost Calculator</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Estimate the cost of your dream wardrobe.</p>
      </div>
    </div>
  </div>
</div>



      <div className="wardrobe-types">
      <h2 style={{ fontSize: "40px" }}>Since One Type Doesn't Fit All</h2>
        <p>No matter your style, our wardrobe price calculator has got you covered.</p>

        <div className="wardrobe-images">
          <div className="wardrobe-type">
            <img src="/others/swing_wardrobe.jpg" alt="Swing Wardrobe" />
            <h3>Swing Wardrobe</h3>
            <p>Built with hinged doors to offer more space for storage and visibility.</p>
          </div>

          <div className="wardrobe-type">
            <img src="/others/sliding_wardrobe2.jpg" alt="Sliding Wardrobe" />
            <h3>Sliding Wardrobe</h3>
            <p>Modern designs with horizontally movable doors to save floor space.</p>
          </div>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={() => navigate("/wardrobe-form")}>Calculate Now</button>
      </div>

      <div className="last-section">
        <div className="last-text">
          <h2>Let's get you the perfect wardrobe?</h2>
          <p>Get started with calculating your price.</p>
          <button
            onClick={() => navigate("/wardrobe-form")}
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

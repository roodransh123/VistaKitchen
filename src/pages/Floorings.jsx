import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Vanity.css";
import "../style.css";
const carouselImages = [
  "/carousel_images/F1.webp",
  "/carousel_images/F2.webp",
  "/carousel_images/F3.webp",
];

export default function Floorings() {
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
                    <p>Discover Elegant Flooring Solutions</p>
                    <button onClick={() => navigate("/contact")}>Book Free Consultation</button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p>Explore a Variety of Floor Textures</p>
                    <button onClick={() => navigate("/flooring-form")}>Calculate Now</button>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p>Customize Your Flooring Style</p>
                    <button onClick={() => navigate("/flooring-form")}>Get Started</button>
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
    <h2 style={{ fontSize: "40px", marginBottom: "20px", textAlign: "center" }}>
      Upgrade Your Space with Stunning Floorings
    </h2>
    <p>Discover flooring options that blend beauty and durability.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-th-large"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Custom Flooring Designs
        </h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Create floors that suit your style and needs.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-ruler"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          Efficient Space Utilization
        </h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Smart flooring solutions for every room.</p>
      </div>
    </div>
  </div>
</div>

      
      <div className="kitchen-inspiration-section">
        <h2>Get Inspired by Our Flooring Designs</h2>
        <p>Explore modern, stylish, and functional flooring options.</p>

        <div className="inspiration-grid">
          <div className="inspiration-card" style={{ backgroundImage: "url(/others/wooden-flooring.webp)" }}>
            <div className="inspiration-overlay">
              <h3>Hardwood Flooring</h3>
              <p>Timeless and elegant wooden flooring options.</p>
            </div>
          </div>
          <div className="inspiration-card" style={{ backgroundImage: "url(/others/marble-flooring.webp)" }}>
            <div className="inspiration-overlay">
              <h3>Marble Flooring</h3>
              <p>Luxurious marble textures for sophisticated spaces.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="last-section">
        <div className="last-text">
          <h2>Upgrade Your Flooring Today</h2>
          <p>Start designing your dream floor now.</p>
          <button onClick={() => navigate("/flooring-form")}
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

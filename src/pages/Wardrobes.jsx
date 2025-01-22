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
                    <button onClick={() => navigate("/consultation")}>
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
                    <button onClick={() => navigate("/calculator")}>
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

      <div className="wardrobe-types">
        <h2>Since One Type Doesn't Fit All</h2>
        <p>No matter your style, our wardrobe price calculator has got you covered.</p>

        <div className="wardrobe-images">
          <div className="wardrobe-type">
            <img src="/others/swing_wardrobe.jpg" alt="Swing Wardrobe" />
            <h3>Swing Wardrobe</h3>
            <p>Built with hinged doors to offer more space for storage and visibility.</p>
          </div>

          <div className="wardrobe-type">
            <img src="/others/sliding_wardrobe.jpg" alt="Sliding Wardrobe" />
            <h3>Sliding Wardrobe</h3>
            <p>Modern designs with horizontally movable doors to save floor space.</p>
          </div>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={() => alert("Redirecting to form")}>Calculate Now</button>
      </div>
      
      <div className="last-section">
        <div className="last-text">
          <h2>Let's get you the perfect wardrobe?</h2>
          <p>Get started with calculating your price.</p>
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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Kitchen.css";  // Assuming you have a Kitchen-specific CSS file

const carouselImages = [
  "/kitchen/kitchen1.jpg",
  "/kitchen/kitchen2.jpg",
  "/kitchen/kitchen3.jpg",
];

export default function Kitchen() {
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
    <div className="kitchen">
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
                      Beautiful Kitchen Interiors
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
                    <button onClick={() => navigate("/kitchen-form")}>
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
                      Design Your Dream Kitchen
                    </p>
                    <button onClick={() => navigate("/kitchen-form")}>
                      Get Started
                    </button>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="kitchen-layout-container">
  <div className="grid-heading">
    <h2 style={{ fontSize: "40px" }}>Your Kitchen, Your Style</h2>
    <p>
      Be it end-to-end interiors, renovation, or modular solutions, we have it
      all for your home or office. With a wide range of furniture & decor, we
      have your back from start to finish.
    </p>
  </div>

  <div id="layout-grid">
  <div className="grid-item">
    <div className="card-icon">
      <i className="fas fa-utensils" style={{ fontSize: "50px", color: "#3dff95", display: "block" }}></i>
    </div>
    <div className="card-content">
      <h3>Kitchen Essentials</h3>
      <p>Discover the essential tools and appliances for your kitchen.</p>
    </div>
  </div>

  <div className="grid-item">
    <div className="card-icon">
      <i className="fas fa-blender" style={{ fontSize: "50px", color: "#3dff95", display: "block" }}></i>
    </div>
    <div className="card-content">
      <h3>Appliances</h3>
      <p>Explore top-quality appliances for a functional kitchen.</p>
    </div>
  </div>

  <div className="grid-item">
    <div className="card-icon">
      <i className="fas fa-cogs" style={{ fontSize: "50px", color: "#3dff95", display: "block" }}></i>
    </div>
    <div className="card-content">
      <h3>Custom Design</h3>
      <p>Design your dream kitchen with tailored features.</p>
    </div>
  </div>

  <div className="grid-item">
    <div className="card-icon">
      <i className="fas fa-archive" style={{ fontSize: "50px", color: "#3dff95", display: "block" }}></i>
    </div>
    <div className="card-content">
      <h3>Storage Solutions</h3>
      <p>Maximize space with innovative storage options.</p>
    </div>
  </div>
</div>

  <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <span style={{ color: "#8491a3", fontSize: "20px" }}>and many more..</span>
  </div>
</div>

      <div className="kitchen-inspiration-section">
    <h2>Get Inspired by Our Stunning Kitchen Designs</h2>
    <p>Discover modern, elegant, and functional kitchen designs that elevate your space.</p>

  <div className="inspiration-grid">
    <div className="inspiration-card" style={{ backgroundImage: "url(/kitchen/kitchen4.jpg)" }}>
      <div className="inspiration-overlay">
        <h3 style={{ background: "linear-gradient(90deg, rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Minimalist Charm</h3>
        <p>Clean, sleek, and functional designs that focus on simplicity and style.</p>
      </div>
    </div>
    <div className="inspiration-card" style={{ backgroundImage: "url(/kitchen/kitchen5.jpg)" }}>
      <div className="inspiration-overlay">
        <h3 style={{ background: "linear-gradient(90deg, rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Modern Luxury</h3>
        <p>Luxury meets functionality in our most elegant kitchen designs.</p>
      </div>
    </div>
    <div className="inspiration-card" style={{ backgroundImage: "url(/kitchen/kitchen6.jpg)" }}>
      <div className="inspiration-overlay">
        <h3 style={{ background: "linear-gradient(90deg, rgba(103, 255, 161, 0.7), rgba(159, 255, 195, 0.7))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Cozy & Inviting</h3>
        <p>Transform your kitchen into a welcoming space for family and friends.</p>
      </div>
    </div>
  </div>

  <div className="inspiration-footer">
    <p>Get inspired and start creating your perfect kitchen today.</p>
    <button onClick={() => navigate("/kitchen-form")}>Design Your Dream Kitchen
    </button>
  </div>
</div>

      <div className="last-section">
        <div className="last-text">
          <h2>Let's Create Your Perfect Kitchen!</h2>
          <p>Get started with calculating your price.</p>
          <button
            onClick={() => navigate("/kitchen-form")}
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


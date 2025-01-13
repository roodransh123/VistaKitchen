import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FlipWords } from "../components/ui/flip-words";
import { style } from "framer-motion/client";

const carouselImages = [
  "/carousel_images/1.jpg",
  "/carousel_images/2.jpg",
  "/carousel_images/3.jpg",
];

const synonyms = [
            "Kitchen",
            "Wardrobe",
            "Vanities",
            "Flooring",
            "Ceiling",
];

export default function Home() {
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
    <div className="home">
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
              <div className="carousel-text">
                {index === 1 && (
                  <>
                    <h1 style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "20px", color: "white", margin: "0 400px", textAlign: "center", marginBottom: "5px" }}>Home to Beautiful Interiors</h1>
                    <button onClick={() => alert("Redirecting to contact page")}>
                      Book Free Consultation
                    </button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h1 style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "20px", color: "white", margin: "0 400px", textAlign: "center" ,marginBottom: "5px"}}>Estimate the cost hassle-free</h1>
                    <button onClick={() => alert("Redirecting to calculator page")}>
                      Calculate Now
                    </button>
                  </>
                )}
                {index === 3 && (
                  <>
                    <h1 style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "20px",marginBottom: "5px", color: "white", margin: "0 400px", textAlign: "center" }}>Come say hi to a new life</h1>
                    <button onClick={() => alert("Redirecting to contact page")}>
                      Visit Us
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "40%",
          backgroundColor: "white",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          fontSize: "30px",
          zIndex: 100,
        }}
      >
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <img
            src="/whatsapp.png"
            alt="whatsapp"
            style={{ width: "60px", height: "60px", borderRadius: "40%" }}
          />
        </a>
      </div>

      <div className="layout-container">
        <div className="grid-heading">
          <h2 style={{ fontSize: "40px" }}>One-stop shop for all things interiors</h2>
          <p>
            Be it end-to-end interiors, renovation, or modular solutions, we have it
            all for your home or office. With a wide range of furniture & decor, we
            have your back from start to finish.
          </p>
        </div>
        <div className="layout-grid">
          <div className="grid-card" style={{ backgroundImage: "url(/feature-section/kitchen.jpg)" }}>
            <div className="card-overlay">
              <h3 style={{ background: "linear-gradient(90deg,rgb(101, 224, 198), #3dff95)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dream Kitchen</h3>
              <p>Design your dream kitchen with custom options.</p>
            </div>
          </div>
          <div className="grid-card" style={{ backgroundImage: "url(/feature-section/ceiling.jpg)" }}>
            <div className="card-overlay">
              <h3 style={{ background: "linear-gradient(90deg,rgb(101, 224, 198), #3dff95)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Modern Ceilings</h3>
              <p>Elevate your space with modern ceilings.</p>
            </div>
          </div>
          <div className="grid-card" style={{ backgroundImage: "url(/feature-section/flooring.jpg)" }}>
            <div className="card-overlay">
              <h3 style={{ background: "linear-gradient(90deg,rgb(101, 224, 198), #3dff95)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Homey Flooring</h3>
              <p>Experience the comfort of modern floors.</p>
            </div>
          </div>
          <div className="grid-card" style={{ backgroundImage: "url(/feature-section/living-room.jpg)" }}>
            <div className="card-overlay">
              <h3 style={{ background: "linear-gradient(90deg,rgb(101, 224, 198), #3dff95)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Cozy Living Room</h3>
              <p>Relax and unwind in our cozy living room.</p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <span style={{color:"#8491a3",fontSize: "20px"}}>and many more..</span>
        </div>
      </div>

      <div className="estimate-div">
        <div className="estimate-text">
          <h2 style={{ fontSize: "40px" }}>Get the estimate for your <FlipWords words={synonyms} duration={3000}></FlipWords></h2>
          <br />
          <p>Calculate the approximate cost of your interiors</p>
        </div>

        <div className="card-container">
        <div className="card-container">
  <div className="estimate-card">
    <img src="/path/to/kitchen-icon.png" alt="Kitchen Icon" className="card-icon" />
    <h3>Kitchen</h3>
    <p>Design your dream kitchen with custom options.</p>
    <button onClick={() => alert("Redirecting to kitchen calculator page")}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/path/to/vanities-icon.png" alt="Vanities Icon" className="card-icon" />
    <h3>Vanities</h3>
    <p>Custom vanities designed for your personal style.</p>
    <button onClick={() => alert("Redirecting to vanities calculator page")}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/path/to/flooring-icon.png" alt="Flooring Icon" className="card-icon" />
    <h3>Flooring</h3>
    <p>Experience the comfort of modern and stylish floors.</p>
    <button onClick={() => alert("Redirecting to flooring calculator page")}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/path/to/ceiling-icon.png" alt="Ceiling Icon" className="card-icon" />
    <h3>Ceiling</h3>
    <p>Add elegance and style with premium ceiling designs.</p>
    <button onClick={() => alert("Redirecting to ceiling calculator page")}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/path/to/wardrobe-icon.png" alt="Wardrobe Icon" className="card-icon" />
    <h3>Wardrobe</h3>
    <p>Choose the perfect wardrobe for your unique space.</p>
    <button onClick={() => alert("Redirecting to wardrobe calculator page")}>Calculate</button>
  </div>
</div>

  </div>
  </div>

      <div className="why-choose-us">
        <h2 style={{ fontSize: "40px" }}>Why Choose Us?</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <img src="/path/to/warranty-icon.png" alt="Warranty" />
            <p style={{ fontSize: "25px" }}>Flat 10-year warranty</p>
          </div>
          <div className="testimonial-card">
            <img src="/path/to/emi-icon.png" alt="EMIs" />
            <p style={{ fontSize: "25px" }}>Easy EMIs</p>
          </div>
          <div className="testimonial-card">
            <img src="/path/to/support-icon.png" alt="Support" />
            <p style={{ fontSize: "25px" }}>24/7 Support</p>
          </div>
          <div className="testimonial-card">
            <img src="/path/to/design-icon.png" alt="Custom Designs" />
            <p style={{ fontSize: "25px" }}>Custom Designs</p>
          </div>
          <div className="testimonial-card">
            <img src="/path/to/quality-icon.png" alt="Quality" />
            <p style={{ fontSize: "25px" }}>High-Quality</p>
          </div>
        </div>
      </div>

      <div className="last-section">
        <div className="last-text">
          <h2>Ready to transform your space?</h2>
          <p>
            Your dream is just a click away.
          </p>
          <button 
            onClick={() => alert("Redirecting to contact page")}
            style={{
              width: "200px",
              padding: "12px 24px",
              fontSize: "1.2rem",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}


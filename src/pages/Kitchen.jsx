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

      <div style={{ 
  padding: "40px", 
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  justifyContent: "center", 
  textAlign: "center", 
  backgroundColor: "#f5f5f5",
}}>
  <div>
    <h2 style={{ fontSize: "40px", marginBottom: "20px", textAlign: "center" }}>Your Kitchen, Your Style</h2>
    <p>
      Be it end-to-end interiors, renovation, or modular solutions, we have it
      all for your home or office. With a wide range of furniture & decor, we
      have your back from start to finish.
    </p>
  </div>

  <div style={{ 
    display: "flex", 
    gap: "30px", 
    marginTop: "30px", 
    flexWrap: "wrap" 
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-utensils"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Kitchen Essentials</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Discover the essential tools and appliances for your kitchen.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-blender"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Appliances</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Explore top-quality appliances for a functional kitchen.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-cogs"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Custom Design</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Design your dream kitchen with tailored features.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-archive"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Storage Solutions</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Maximize space with innovative storage options.</p>
      </div>
    </div>
  </div>
  <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <span style={{ color: "#8491a3", fontSize: "20px" }}>and many more..</span>
  </div>
</div>

<>
  <style>
    {`
      .inspiration-card:hover {
        transform: scale(1.05);
      }
    `}
  </style>

  <div style={{ 
    padding: "60px 20px", 
    background: "linear-gradient(90deg, rgba(174, 255, 205, 0.8), rgba(159, 255, 195, 0.8), rgba(144, 250, 175, 0.8))", 
    textAlign: "center" 
  }}>
    <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>
      Get Inspired by Our Stunning Kitchen Designs
    </h2>
    <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
      Discover modern, elegant, and functional kitchen designs that elevate your space.
    </p>

    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "20px", 
      flexWrap: "wrap" 
    }}>
      {[
        { image: "/kitchen/kitchen4.jpg", title: "Minimalist Charm", gradient: "rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7)", desc: "Clean, sleek, and functional designs that focus on simplicity and style." },
        { image: "/kitchen/kitchen5.jpg", title: "Modern Luxury", gradient: "rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7)", desc: "Luxury meets functionality in our most elegant kitchen designs." },
        { image: "/kitchen/kitchen6.jpg", title: "Cozy & Inviting", gradient: "rgba(103, 255, 161, 0.7), rgba(159, 255, 195, 0.7)", desc: "Transform your kitchen into a welcoming space for family and friends." }
      ].map((card, index) => (
        <div key={index} className="inspiration-card" style={{ 
          position: "relative", 
          width: "30%", 
          height: "300px", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: "10px", 
          overflow: "hidden", 
          transition: "transform 0.3s ease", 
          backgroundImage: `url(${card.image})` 
        }}>
          <div style={{ 
            position: "absolute", 
            bottom: "20px", 
            left: "20px", 
            right: "20px", 
            backgroundColor: "rgba(0, 0, 0, 0.4)", 
            padding: "20px", 
            borderRadius: "10px" 
          }}>
            <h3 style={{ 
              fontSize: "1.8rem", 
              background: `linear-gradient(90deg, ${card.gradient})`, 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent" 
            }}>
              {card.title}
            </h3>
            <p style={{ fontSize: "1.1rem", color: "white", marginTop: "10px" }}>
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div style={{ marginTop: "40px" }}>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
        Get inspired and start creating your perfect kitchen today.
      </p>
      <button 
        onClick={() => navigate("/kitchen-form")} 
        style={{ fontSize: "1.2rem", padding: "12px 24px", color: "white", border: "none", cursor: "pointer" }}
      >
        Design Your Dream Kitchen
      </button>
    </div>
  </div>
</>


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


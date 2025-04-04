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
                    <button onClick={() => navigate("/contact")}>Book Free Consultation</button>
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
                    <button onClick={() => navigate("/vanities-form")}>Calculate Now</button>
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
                    <button onClick={() => navigate("/vanities-form")}>Get Started</button>
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
  backgroundColor: "#f5f5f5"
}}>
  <div>
    <h2 style={{ fontSize: "40px", marginBottom: "20px", textAlign: "center"}}>Transform Your Space with Elegant Vanities</h2>
    <p>
      Discover vanities that blend style and function, designed to enhance your bathroom space.
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-sink"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Custom Vanity Designs</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Create vanities that suit your space and style.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-draw-polygon"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Space Optimization</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Innovative solutions to maximize your bathroom space.</p>
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
        <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-pencil-ruler"></i>
      </div>
      <div>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Vanity Planner</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Design your perfect vanity with our intuitive planner.</p>
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
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Vanity Cost Calculator</h3>
        <p style={{ fontSize: "16px", color: "#666" }}>Quickly estimate the cost of your new vanity.</p>
      </div>
    </div>
  </div>
  <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <span style={{ color: "#8491a3", fontSize: "20px" }}>and many more..</span>
  </div>
</div>
  <style>
    {`
      .inspiration-card:hover {
        transform: scale(1.02);
      }

      @media (max-width: 768px) {
        .inspiration-grid {
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .inspiration-card {
          width: 80%;
          height: 250px;
        }
      }
    `}
  </style>

  <div style={{ 
    padding: "60px 20px", 
    background: "linear-gradient(90deg, rgba(174, 255, 205, 0.8), rgba(159, 255, 195, 0.8), rgba(144, 250, 175, 0.8))", 
    textAlign: "center" 
  }}>
    <h2 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>
      Get Inspired by Our Stunning Vanity Designs
    </h2>
    <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
      Discover modern, elegant, and functional vanity designs that elevate your bathroom space.
    </p>

    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      gap: "40px", 
      flexWrap: "wrap", 
      maxWidth: "1200px", 
      margin: "0 auto" 
    }}>
      {[ 
        { image: "/others/vanity1.jpg", title: "Floating Vanity", gradient: "rgba(103, 255, 161, 0.7), rgba(159, 255, 195, 0.7)", desc: "Modern and sleek floating vanities that create a sense of openness." },
        { image: "/others/vanity2.jpg", title: "Modular Vanity", gradient: "rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7)", desc: "Modular vanity designs that offer flexibility and customization options." },
        { image: "/others/vanity3.jpg", title: "Wall-mounted Vanity", gradient: "rgba(103, 255, 161, 0.7), rgba(159, 255, 195, 0.7)", desc: "Wall-mounted vanities that create a clean and minimalist look." }
      ].map((card, index) => (
        <div key={index} style={{ 
          position: "relative", 
          width: "100%",  
          maxWidth: "350px",  
          height: "300px", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          borderRadius: "10px", 
          overflow: "hidden", 
          transition: "transform 0.3s ease, box-shadow 0.3s ease", 
          backgroundImage: `url(${card.image})`,
          cursor: "pointer"
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
        
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
</div>


      <div className="last-section">
        <div className="last-text">
          <h2>Ready to Upgrade?</h2>
          <p>Start designing your custom vanity today.</p>
          <button
            onClick={() => navigate("/vanities-form")}
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


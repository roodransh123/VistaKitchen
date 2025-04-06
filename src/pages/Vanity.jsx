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
                      Elegant Home Solutions: Vanities, Closets & More
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
                    <button
                      onClick={() => {
                        const targetElement = document.getElementById("secondslideshowimagejumpbutton");
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Explore Premium Solutions
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
                      Customize Your Home Solutions Today
                    </p>
                    <button
                    onClick={() => {
                      const targetElement = document.getElementById("thirdimagejumpfromslideshow");
                      if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
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
        backgroundColor: "#f5f5f5"
      }}>
        <div>
          <h2 style={{ fontSize: "40px", marginBottom: "20px", textAlign: "center"}}>Complete Home Solutions</h2>
          <p>
            Discover elegant designs for every space in your home, from bathrooms to bedrooms and beyond.
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
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Custom Vanities</h3>
              <p style={{ fontSize: "16px", color: "#666" }}>Elegant bathroom vanities tailored to your style.</p>
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
              <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-door-open"></i>
            </div>
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Custom Closets</h3>
              <p style={{ fontSize: "16px", color: "#666" }}>Organized storage solutions for any space.</p>
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
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>Dressing Units</h3>
              <p style={{ fontSize: "16px", color: "#666" }}>Elegant dressing spaces for your daily routine.</p>
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
              <i style={{ fontSize: "50px", color: "#3dff95", display: "block" }} className="fas fa-th-large"></i>
            </div>
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>LED Panels</h3>
              <p style={{ fontSize: "16px", color: "#666" }}>Modern wall solutions for a designer touch.</p>
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
          Get Inspired By Our Stunning Designs
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
          Discover elegant and functional solutions for every room in your home.
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
            { image: "/others/vanity2.jpg", title: "Luxury Vanities", gradient: "rgba(103, 255, 161, 0.7), rgba(159, 255, 195, 0.7)", desc: "Modern and sleek bathroom vanities for any space." },
            { image: "/others/closet2.jpg", title: "Custom Closets", gradient: "rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7)", desc: "Organized storage solutions that maximize space." },
            { image: "/others/dressing1.jpg", title: "Dressing Units", gradient: "rgba(103, 255, 161, 0.7), rgba(159, 255, 195, 0.7)", desc: "Elegant dressing spaces for your daily routine." },
            { image: "/others/ledpanels.jpg", title: "LED Panels", gradient: "rgba(174, 255, 205, 0.7), rgba(159, 255, 195, 0.7)", desc: "Modern wall treatments for any room." }
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

      <div style={{ 
        padding: "80px 20px", 
        backgroundColor: "#ffffff", 
        textAlign: "center" 
      }}>
        <h2 id ="secondslideshowimagejumpbutton" style={{ fontSize: "2.5rem", color: "#333", marginBottom: "40px" }}>
          Our Premium Solutions
        </h2>
        
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "60px", 
          maxWidth: "1200px", 
          margin: "0 auto" 
        }}>
          {/* Vanities Section */}
          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center", 
            gap: "40px", 
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <div style={{ 
              flex: "1", 
              minWidth: "300px", 
              backgroundImage: "url('/others/vanity3.jpg')", 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              borderRadius: "10px", 
              height: "400px" 
            }}></div>
            
            <div style={{ 
              flex: "1", 
              minWidth: "300px",
              textAlign: "left",
              padding: "20px"
            }}>
              <h3 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
                Stunning Bathroom Vanities
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
                Transform your bathroom with our custom vanity solutions. From floating designs to full storage systems, our vanities combine style and functionality.
              </p>
              <ul style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px", textAlign: "left", listStyleType: "none" }}>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Custom sizes to fit any space
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Premium materials and finishes
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Integrated storage solutions
                </li>
              </ul>
              <button 
                onClick={() => navigate("/vanities-form")} 
                style={{ 
                  padding: "12px 24px", 
                  backgroundColor: "#3dff95", 
                  border: "none", 
                  borderRadius: "30px", 
                  fontWeight: "bold", 
                  fontSize: "1.1rem", 
                  cursor: "pointer" 
                }}
              >
                Design Your Vanity
              </button>
            </div>
          </div>
          
          {/* Closets Section */}
          <div style={{ 
            display: "flex", 
            flexDirection: "row-reverse", 
            alignItems: "center", 
            gap: "40px", 
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <div style={{ 
              flex: "1", 
              minWidth: "300px", 
              backgroundImage: "url('/others/closet1.jpg')", 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              borderRadius: "10px", 
              height: "400px" 
            }}></div>
            
            <div style={{ 
              flex: "1", 
              minWidth: "300px",
              textAlign: "left",
              padding: "20px"
            }}>
              <h3 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
                Organized Closet Solutions
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
                Maximize your storage with custom closet designs. Our solutions help organize your space while adding elegance to your home.
              </p>
              <ul style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px", textAlign: "left", listStyleType: "none" }}>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Walk-in and reach-in closet designs
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Custom organization systems
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Premium hardware and accessories
                </li>
              </ul>
              <button 
                onClick={() => navigate("/closets-form")} 
                style={{ 
                  padding: "12px 24px", 
                  backgroundColor: "#3dff95", 
                  border: "none", 
                  borderRadius: "30px", 
                  fontWeight: "bold", 
                  fontSize: "1.1rem", 
                  cursor: "pointer" 
                }}
              >
                Design Your Closet
              </button>
            </div>
          </div>
          
          {/* Dressing Units Section */}
          <div style={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center", 
            gap: "40px", 
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <div style={{ 
              flex: "1", 
              minWidth: "300px", 
              backgroundImage: "url('/others/dressing2.jpg')", 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              borderRadius: "10px", 
              height: "400px" 
            }}></div>
            
            <div style={{ 
              flex: "1", 
              minWidth: "300px",
              textAlign: "left",
              padding: "20px"
            }}>
              <h3 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
                Elegant Dressing Units
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
                Create the perfect space for your daily routine with our custom dressing units. Combining style and functionality for an elevated experience.
              </p>
              <ul style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px", textAlign: "left", listStyleType: "none" }}>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Custom vanity tables and seating
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Premium lighting solutions
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Integrated storage for accessories
                </li>
              </ul>
              <button 
                onClick={() => navigate("/dressing-units-form")} 
                style={{ 
                  padding: "12px 24px", 
                  backgroundColor: "#3dff95", 
                  border: "none", 
                  borderRadius: "30px", 
                  fontWeight: "bold", 
                  fontSize: "1.1rem", 
                  cursor: "pointer" 
                }}
              >
                Design Your Dressing Unit
              </button>
            </div>
          </div>
          
          {/* led Panels Section */}
          <div style={{ 
            display: "flex", 
            flexDirection: "row-reverse", 
            alignItems: "center", 
            gap: "40px", 
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            <div style={{ 
              flex: "1", 
              minWidth: "300px", 
              backgroundImage: "url('/others/ledpanels2.jpg')", 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              borderRadius: "10px", 
              height: "400px" 
            }}></div>
            
            <div style={{ 
              flex: "1", 
              minWidth: "300px",
              textAlign: "left",
              padding: "20px"
            }}>
              <h3 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px" }}>
                Modern LED Panels
              </h3>
              <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "20px", lineHeight: "1.6" }}>
                Add dimension and texture to your walls with our custom LED panels. A modern touch that transforms any room into a designer space.
              </p>
              <ul style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px", textAlign: "left", listStyleType: "none" }}>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Premium materials and finishes
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Custom designs for any space
                </li>
                <li style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                  <i className="fas fa-check" style={{ color: "#3dff95", marginRight: "10px" }}></i>
                  Expert installation services
                </li>
              </ul>
              <button 
                onClick={() => navigate("/LED-panels-form")} 
                style={{ 
                  padding: "12px 24px", 
                  backgroundColor: "#3dff95", 
                  border: "none", 
                  borderRadius: "30px", 
                  fontWeight: "bold", 
                  fontSize: "1.1rem", 
                  cursor: "pointer" 
                }}
              >
                Design Your LED Panel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="last-section" style={{ background: "linear-gradient(90deg, rgba(174, 255, 205, 0.8), rgba(159, 255, 195, 0.8), rgba(144, 250, 175, 0.8))" }}>
        <div className="last-text">
          <h2 id="thirdimagejumpfromslideshow">Ready to Transform Your Home?</h2>
          <p>Start designing your custom solutions today.</p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/vanities-form")}
              style={{
                width: "200px",
                padding: "12px 24px",
                fontSize: "1.1rem",
                backgroundColor: "#3dff95",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                margin: "10px",
                cursor: "pointer"
              }}
            >
              Design Vanity
            </button>
            <button
              onClick={() => navigate("/closets-form")}
              style={{
                width: "200px",
                padding: "12px 24px",
                fontSize: "1.1rem",
                backgroundColor: "#3dff95",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                margin: "10px",
                cursor: "pointer"
              }}
            >
              Design Closet
            </button>
            <button
              onClick={() => navigate("/dressing-units-form")}
              style={{
                width: "200px",
                padding: "12px 24px",
                fontSize: "1.1rem",
                backgroundColor: "#3dff95",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                margin: "10px",
                cursor: "pointer"
              }}
            >
              Design Dressing
            </button>
            <button
              onClick={() => navigate("/LED-panels-form")}
              style={{
                width: "200px",
                padding: "12px 24px",
                fontSize: "1.1rem",
                backgroundColor: "#3dff95",
                border: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                margin: "10px",
                cursor: "pointer"
              }}
            >
              Design LED Panel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
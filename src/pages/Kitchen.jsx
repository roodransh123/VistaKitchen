import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Kitchen.css";  // Assuming you have a Kitchen-specific CSS file

const carouselImages = [
  "/carousel_images/Kitchen1.jpg",
  "/carousel_images/Kitchen2.jpg",
  "/carousel_images/Kitchen3.jpg",
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

      <div className="kitchen-types">
        <h2>Since One Style Doesn't Fit All</h2>
        <p>Whether you prefer a modern or classic look, we have the right kitchen solution for you.</p>

        <div className="kitchen-images">
          <div className="kitchen-type">
            <img src="/others/island_kitchen.jpg" alt="Island Kitchen" />
            <h3>Island Kitchen</h3>
            <p>Perfect for open spaces with a functional and stylish central island.</p>
          </div>

          <div className="kitchen-type">
            <img src="/others/gally_kitchen.jpg" alt="Galley Kitchen" />
            <h3>Galley Kitchen</h3>
            <p>Efficient design ideal for smaller spaces with great functionality.</p>
          </div>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={() => alert("Redirecting to form")}>
          Calculate Now
        </button>
      </div>

      <div className="last-section">
        <div className="last-text">
          <h2>Let's Create Your Perfect Kitchen!</h2>
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


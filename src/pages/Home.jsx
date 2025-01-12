import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FlipWords } from "../components/ui/flip-words";

const carouselImages = [
  "/carousel_images/1.jpg",
  "/carousel_images/2.jpg",
  "/carousel_images/3.jpg",
];

const synonyms = [
  "Building",
  "Shaping",
  "Designing",
  "Weaving",
  "Coding",
  "Deploying",
];

export default function Home() {
  // Create a new array with duplicates for infinite scrolling
  const imagesWithDuplicates = [
    carouselImages[carouselImages.length - 1], // Duplicate last image
    ...carouselImages,
    carouselImages[0], // Duplicate first image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at the first image (original first image)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Reset to the first original image when reaching the last duplicate
    if (currentImageIndex === imagesWithDuplicates.length - 1) {
      setTimeout(() => {
        setCurrentImageIndex(1); // Jump back to the first original image
      }, 1000); // Wait for the transition to finish
    }
  }, [currentImageIndex]);

  return (
    <div className="home">
      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`, // Move one slide at a time
            transition: currentImageIndex === 1 ? "none" : "transform 0.5s ease-in-out", // Disable transition when jumping back
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
                    <h1>Home to Beautiful Interiors</h1>
                    <button onClick={() => alert("Redirecting to contact page")}>
                      Book Free Consultation
                    </button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <h1>Want to know how much your Kitchen will cost?</h1>
                    <button onClick={() => alert("Redirecting to calculator page")}>
                      Calculate Now
                    </button>
                  </>
                )}
                {index === 3 && (
                  <>
                    <h1>Come say hi to a new life</h1>
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

      {/* Sticky WhatsApp Icon */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          borderRadius: "40%",
          backgroundColor: "white",
          padding: "10px",
          fontSize: "30px",
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

      {/* Custom Layout Grid Section */}
      <div className="layout-container">
  <div className="grid-heading">
    <h2>One-stop shop for all things interiors</h2>
    <p>
      Be it end-to-end interiors, renovation, or modular solutions, we have it
      all for your home or office. With a wide range of furniture & decor, we
      have your back from start to finish.
    </p>
  </div>
  <div className="layout-grid">
    {gridData.map((card) => (
      <div
        key={card.id}
        className="grid-card"
        style={{
          backgroundImage: `url(${card.thumbnail})`,
        }}
      >
        <div className="card-overlay">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    ))}
  </div>
  </div>

  <div className="estimate-div">
  <div className="estimate-text">
    <h2>Get the estimate for your <FlipWords words={synonyms} duration={3000}></FlipWords></h2>
    <p>Calculate the approximate cost of your interiors</p>
  </div>

  <div className="card-container">
    <div className="estimate-card">
      <img src="/path/to/icon1.png" alt="Icon 1" className="card-icon" />
      <h3>Basic Kitchen</h3>
      <p>A simple kitchen setup with essential items.</p>
      <button onClick={() => alert("Redirecting to calculator page")}>Calculate</button>
    </div>

    <div className="estimate-card">
      <img src="/path/to/icon2.png" alt="Icon 2" className="card-icon" />
      <h3>Luxury Kitchen</h3>
      <p>A premium kitchen setup with advanced features.</p>
      <button onClick={() => alert("Redirecting to calculator page")}>Calculate</button>
    </div>

    <div className="estimate-card">
      <img src="/path/to/icon3.png" alt="Icon 3" className="card-icon" />
      <h3>Custom Kitchen</h3>
      <p>Design your dream kitchen with custom options.</p>
      <button onClick={() => alert("Redirecting to calculator page")}>Calculate</button>
    </div>
  </div>
</div>

    </div>
  );
}

const gridData = [
  {
    id: 1,
    title: "House in the Woods",
    description: "A serene retreat surrounded by nature.",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Above the Clouds",
    description: "Live above the world with breathtaking views.",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Greens All Around",
    description: "A home surrounded by lush greenery.",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "By the River",
    description: "Find peace and serenity by the river.",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop",
  },
];

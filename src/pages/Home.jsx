import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const carouselImages = [
  "/carousel_images/1.jpg",
  "/carousel_images/2.jpg",
  "/carousel_images/3.jpg",
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
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`, // Move one slide at a time
            transition: currentImageIndex === 1 ? 'none' : 'transform 1s ease-in-out', // Disable transition when jumping back
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

      <div style={{ position: 'fixed', right: 0, top: '50%', transform: 'translateY(-50%)',borderRadius: '40%', backgroundColor: 'white', paddingTop: '10px', paddingLeft: '10px',paddingRight: '10px', fontSize: '30px' }}>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <img src="/whatsapp.png" alt="whatsapp" style={{ width: '60px', height: '60px', borderRadius: '40%' }} />
        </a>
      </div>
    </div>
  );
}
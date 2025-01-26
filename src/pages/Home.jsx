import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { FlipWords } from "../components/ui/flip-words";
import { redirect, useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();

  const redirectToWardrobeForm = () => {
    navigate("/wardrobe-form");
  };

  const redirectToVanitiesForm = () => {
    navigate("/vanities-form");
  };

  const redirectToFlooringForm = () => {
    navigate("/flooring-form");
  }

  const redirectToKitchenForm = () => {
    navigate("/kitchen-form");
  }

  const redirectToCeilingForm = () => {
    navigate("/ceiling-form");
  }

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
              <span className="carousel-text">
                {index === 1 && (
                  <>
                    <p style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "20px", color: "white" }}>Home to Beautiful Interiors</p>
                    <button
                    >
                      Book Free Consultation
                    </button>
                  </>
                )}
                {index === 2 && (
                  <>
                    <p style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "20px", color: "white"}}>Estimate the cost hassle-free</p>
                    <button
                      onClick={() => {
                      document.querySelector('.estimate-div').scrollIntoView({
                       behavior: 'smooth',
                      block: 'start',
    });
  }}
>
  Calculate Now
</button>
                  </>
                )}
                {index === 3 && (
                  <>
                    <p style={{ backgroundColor: "rgba(0, 0, 0, 0.3)",borderRadius: "20px"}}>Come say hi to a new life</p>
                    <button onClick={() => alert("Redirecting to contact page")}>
                      Visit Us
                    </button>
                  </>
                )}
              </span>
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
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingRight: "10px",
          fontSize: "30px",
          zIndex: 100,
          backgroundColor: null,
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
      <div className="brands-we-work-with">
  <h2 style={{ fontSize: "40px" }}>Brands We Work With</h2>
  <div className="brand-container">
    <div className="brand-card">
      <a href="https://www.merinolaminates.com/en/" target="_blank" rel="noopener noreferrer">
      <img src="/brands/merino.jpg" alt="Merino Brand" />
      </a>
    </div>
    <div className="brand-card">
    <a href="https://virgolam.com/" target="_blank" rel="noopener noreferrer">
      <img src="/brands/virgo.jpg" alt="Wergo Brand" />
      </a>
    </div>
    <div className="brand-card">
    <a href="https://europratik.com/" target="_blank" rel="noopener noreferrer">
      <img src="/brands/europratik.jpg" alt="Euro Pratik Brand" height={"210px"}/>
      </a>
    </div>
    <div className="brand-card">
    <a href="https://www.neff-home.com/" target="_blank" rel="noopener noreferrer">
      <img src="/brands/neff.jpg" alt="Neff Brand" />
      </a>
    </div>
    <div className="brand-card">
    <a href="https://kaff.in/?srsltid=AfmBOoq23yQul4bOyUOY4HR4n5lU8e0zIUsAAGk_kFVBqv-n8YDFxpg- " target="_blank" rel="noopener noreferrer">
      <img src="/brands/kaff.jpg" alt="Kaff Brand" />
      </a>
    </div>
    <div className="brand-card">
    <a href="https://web.hettich.com/en-in/home" target="_blank" rel="noopener noreferrer">
      <img src="/brands/hecttic.jpg" alt="Hatic Brand" />
      </a>
    </div>
  </div>
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
    <img src="/calculate-section/kitchen.jpg" alt="Kitchen Icon" className="card-icon" style={{objectFit:"cover"}} />
    <h3>Kitchen</h3>
    <p>Design your dream kitchen with us.</p>
    <button onClick={redirectToKitchenForm}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/calculate-section/vanity.jpg" alt="Vanities Icon" className="card-icon" style={{objectFit:"cover",objectPosition:"center"}} />
    <h3>Vanities</h3>
    <p>Custom vanities designed for your personal style.</p>
    <button onClick={redirectToVanitiesForm}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/calculate-section/flooring.jpg" alt="Flooring Icon" className="card-icon" style={{objectFit:"cover",objectPosition:"center"}} />
    <h3>Flooring</h3>
    <p>Experience the comfort of modern and stylish floors.</p>
    <button onClick={redirectToFlooringForm}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/calculate-section/ceiling.jpg" alt="Ceiling Icon" className="card-icon" style={{objectFit:"cover"}} />
    <h3>Ceiling</h3>
    <p>Add elegance and style with premium ceilings.</p>
    <button onClick={redirectToCeilingForm}>Calculate</button>
  </div>

  <div className="estimate-card">
    <img src="/calculate-section/wardrobe.jpg" alt="Wardrobe Icon" className="card-icon" style={{objectFit:"cover",objectPosition:"center"}} />
    <h3>Wardrobe</h3>
    <p>Choose the perfect wardrobe for your space.</p>
    <button onClick={redirectToWardrobeForm}>Calculate</button>
  </div>
</div>

  </div>
  </div>

      <div className="why-choose-us">
        <h2 style={{ fontSize: "40px" }}>Why Choose Us?</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <img src="/others/2_y_service.jpg" alt="Warranty" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>2 year free service warranty</p>
          </div>
          <div className="testimonial-card">
            <img src="/others/after_sales.jpg" alt="after_sales" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Good after-sale services</p>
          </div>
          <div className="testimonial-card">
            <img src="/others/amc.jpg" alt="Support" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Annual maintainance contract</p>
          </div>
          <div className="testimonial-card">
          <img src="/others/custom_design.jpg" alt="cd" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>CustomIzed Designs</p>
          </div>
          <div className="testimonial-card">
          <img src="/others/best_quality.jpg" alt="Quality" />
          <p style={{ fontSize: "20px" , fontWeight: "bold"}}>High-Quality material</p>
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



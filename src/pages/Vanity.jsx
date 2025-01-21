import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Vanity.css";

export default function Vanities() {
  const navigate = useNavigate();

  return (
    <div className="vanities">
      <div className="carousel-wrapper">
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url("/others/Vanity.jpg")`,
          }}
        >
          <div className="carousel-text">
            <p style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "20px", color: "white"}}>Vanities Price Calculator</p>
            <button onClick={() => alert("Redirecting to vanities form")}>Get Started</button>
          </div>
        </div>
      </div>

      <div className="what-is-vanity-calculator">
        <h2 style={{ fontSize: "40px" }}>What is Vanity Price Calculator?</h2>
        <p>
          The Vanity Price Calculator is designed to help you estimate the cost of crafting a personalized vanity. It's simple, efficient, and provides accurate pricing tailored to your preferences.
        </p>
      </div>

      <div className="steps-to-get-quote">
        <h2>5 Steps to Get a Quote</h2>
        <p>It's easy, seamless, and hassle-free.</p>

        <div className="steps">
          <div className="step">
            <img src="/others/vanity_icons/size_icon.avif" alt="Step 1" className="step-icon" />
            <h3>Select Vanity Size</h3>
            <p>Start by defining the size of your vanity. Dimensions are key to creating the perfect fit.</p>
          </div>

          <div className="step">
            <img src="/others/vanity_icons/style_icon.avif" alt="Step 2" className="step-icon" />
            <h3>Choose Your Style</h3>
            <p>Pick a design style that resonates with your aesthetic – from classic to contemporary.</p>
          </div>

          <div className="step">
            <img src="/others/vanity_icons/material_icon.avif" alt="Step 3" className="step-icon" />
            <h3>Select Material</h3>
            <p>Choose the right material for your vanity to ensure durability and elegance.</p>
          </div>

          <div className="step">
            <img src="/others/vanity_icons/finish_icon.avif" alt="Step 4" className="step-icon" />
            <h3>Pick a Finish</h3>
            <p>The finishing touch matters. Select the finish that complements your space.</p>
          </div>

          <div className="step">
            <img src="/others/vanity_icons/accessories_icon.avif" alt="Step 5" className="step-icon" />
            <h3>Add Accessories</h3>
            <p>Enhance functionality with smart accessories that fit your lifestyle needs.</p>
          </div>
        </div>
      </div>

      <div className="vanity-types">
        <h2>Explore Different Vanity Types</h2>
        <p>Whatever your preference, we've got you covered.</p>

        <div className="vanity-images">
          <div className="vanity-type">
            <img src="/others/wall_mounted_vanity.jpg" alt="Wall-Mounted Vanity" />
            <h3>Wall-Mounted Vanity</h3>
            <p>Sleek and modern designs that create an illusion of more space.</p>
          </div>

          <div className="vanity-type">
            <img src="/others/freestanding_vanity.jpg" alt="Freestanding Vanity" />
            <h3>Freestanding Vanity</h3>
            <p>Classic styles with ample storage, perfect for a timeless look.</p>
          </div>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={() => alert("Redirecting to form")}>Calculate Now</button>
      </div>

      <div className="how-it-works">
        <h2>How the VistaKitchen Vanity Price Calculator Works</h2>
        <p>
          The calculator considers dimensions, style, material, finish, and accessories to generate your vanity's price estimate. Answer a few simple questions and get real-time calculations.
        </p>

        <div className="how-it-works-steps">
          <div className="how-it-works-step">
            <span>1</span>
            <p>
              Size: The size of the vanity is essential for calculating its price. Input your preferred dimensions to get started.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>2</span>
            <p>
              Style: The style of the vanity influences both its aesthetic and pricing. Choose between options like wall-mounted or freestanding designs.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>3</span>
            <p>
              Material: Material selection affects both durability and cost. Explore popular materials and their features to make an informed choice.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>4</span>
            <p>
              Finish: Add a finishing touch that matches your vision. Your choice will impact the overall appeal and pricing.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>5</span>
            <p>
              Accessories: Personalize your vanity with add-ons to enhance its utility and style.
            </p>
          </div>
        </div>
      </div>
      
      <div className="last-section">
        <div className="last-text">
          <h2>Ready to Get Started?</h2>
          <p>Design your dream vanity with us today!</p>
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

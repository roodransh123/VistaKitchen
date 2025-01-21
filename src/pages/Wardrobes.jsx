import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Wardrobe.css";

export default function Wardrobe() {
  const navigate = useNavigate();

  return (
    <div className="wardrobe">
      <div className="carousel-wrapper">
        <div
          className="carousel-image"
          style={{
            backgroundImage: `url(/others/Wardrobe.jpg)`,
          }}
        >
          <div className="carousel-text">
            <p style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", borderRadius: "20px", color: "white"}}>Wardrobe Price Calculator</p>
            <button onClick={() => alert("Redirecting to wardrobe form")}>Get Started</button>
          </div>
        </div>
      </div>

      <div className="what-is-wardrobe-calculator">
        <h2 style={{ fontSize: "40px" }}>What is Wardrobe Price Calculator?</h2>
        <p>
          The Wardrobe Price Calculator helps you estimate the cost of building the perfect wardrobe. It's easy and quick – simply follow the steps and get an accurate price estimate for your project.
        </p>
      </div>

      <div className="steps-to-get-quote">
        <h2>5 Steps to Get a Quote</h2>
        <p>It's simple, it's quick, it's convenient.</p>

        <div className="steps">
          <div className="step">
            <img src="/others/step_icons/length_icon.avif" alt="Step 1" className="step-icon" />
            <h3>Select Wardrobe Length</h3>
            <p>Let's start with the basics. The dimension helps us understand the scope of work better.</p>
          </div>

          <div className="step">
            <img src="/others/step_icons/wardrobe_type_icon.avif" alt="Step 2" className="step-icon" />
            <h3>Choose the Wardrobe Type</h3>
            <p>What's your type? Tell us if you like a sliding or swing door wardrobe to get the quote right.</p>
          </div>

          <div className="step">
            <img src="/others/step_icons/preference_icon.avif" alt="Step 3" className="step-icon" />
            <h3>Pick Your Preferred Finish</h3>
            <p>Finishing matters, especially when it comes to calculating the wardrobe price.</p>
          </div>

          <div className="step">
            <img src="/others/step_icons/core_icon.avif" alt="Step 4" className="step-icon" />
            <h3>Pick a Core Material</h3>
            <p>The material you choose becomes a core factor for us to calculate an accurate price estimate.</p>
          </div>

          <div className="step">
            <img src="/others/step_icons/accessories_icon.avif" alt="Step 5" className="step-icon" />
            <h3>Select Smart Accessories</h3>
            <p>Have some add-ons on your mind? Tell us now and we'll include them in our final estimate.</p>
          </div>
        </div>
      </div>

      <div className="wardrobe-types">
        <h2>Since One Type Doesn't Fit All</h2>
        <p>No matter your style, our wardrobe price calculator has got you covered.</p>

        <div className="wardrobe-images">
          <div className="wardrobe-type">
            <img src="/others/swing_wardrobe.jpg" alt="Swing Wardrobe" />
            <h3>Swing Wardrobe</h3>
            <p>Built with hinged doors to offer more space for storage and visibility.</p>
          </div>

          <div className="wardrobe-type">
            <img src="/others/sliding_wardrobe.jpg" alt="Sliding Wardrobe" />
            <h3>Sliding Wardrobe</h3>
            <p>Modern designs with horizontally movable doors to save floor space.</p>
          </div>
        </div>
        <button style={{ padding: "10px 20px", fontSize: "20px" }} onClick={() => alert("Redirecting to form")}>Calculate Now</button>
      </div>

      <div className="how-it-works">
        <h2>Here's how the VistaKitchen Wardrobe Price Calculator Works</h2>
        <p>
          It considers factors like dimension, type, material, finish, and accessories to generate the price estimate. By answering a few simple questions, the estimate for your wardrobe with price is calculated in real-time.
        </p>

        <div className="how-it-works-steps">
          <div className="how-it-works-step">
            <span>1</span>
            <p>
              Length of the wardrobe: The dimension of a wardrobe is a significant factor in calculating its price. The modular wardrobe cost calculator will make a few assumptions based on your input and will give an accurate wardrobe price.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>2</span>
            <p>
              Type of the wardrobe: The make of a wardrobe is another contributing factor towards wardrobe price estimation. Based on your selection, the wardrobe price calculator will give you a wardrobe price. Depending on your need, you can choose between a sliding door wardrobe, which is suitable for small spaces, or a swing door wardrobe, which provides more storage space.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>3</span>
            <p>
              Material and finishes: The kind of material and the finish you pick determines not only the cost of a modular wardrobe but also the quality of your wardrobe. Our wardrobe price calculator will highlight popular materials and their features to ease the process of decision-making for you.
            </p>
          </div>

          <div className="how-it-works-step">
            <span>4</span>
            <p>
              Accessories: There's always scope for accessories, especially when you get to choose from our trendy options. Select accessories that suit your lifestyle and our wardrobe price calculator will add them while calculating the final wardrobe price.
            </p>
          </div>
        </div>
      </div>
      
      <div className="last-section">
        <div className="last-text">
          <h2>Let's get you the perfect wardrobe?</h2>
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

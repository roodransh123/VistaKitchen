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

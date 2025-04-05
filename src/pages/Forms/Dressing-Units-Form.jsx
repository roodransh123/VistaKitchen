import React, { useState } from 'react';

import "../../style.css";

const DressingUnitsForm = () => {
  const [formData, setFormData] = useState({
    style: '',
    length: 4,
    width: 2,
    height: 6,
    material: '',
    name: '',
    email: '',
    phone: '',
    propertyName: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = (stepData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...stepData,
    }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      "entry.1423154573": formData.style,
      "entry.2345678901": formData.length,
      "entry.1148288126": formData.width,
      "entry.144670188": formData.height,
      "entry.923742742": formData.material,
      "entry.1797394805": formData.name,
      "entry.590795316": formData.email,
      "entry.34484213": formData.phone,
      "entry.934286388": formData.propertyName
    };

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfUJuBtbUG1IjBiPrH7ThdO77cPCOo9G5fg6aYumXDArn1fdg/formResponse";

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      alert("Form submitted successfully!");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form.");
    }
  };
  

  return (
    <div>
      {currentStep === 0 && <Step0 onNext={handleNext} />}
      {currentStep === 1 && <Step1 currentData={formData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 2 && <Step2 currentData={formData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <Step3 currentData={formData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <Step4 onSubmit={handleSubmit} />}
    </div>
  );
};

const Step0 = ({ onNext }) => {
  const [style, setStyle] = useState('');

  return (
    <div className="step-container">
      <h2>Select Your Dressing Unit Style</h2>
      <div className="options">
        {["Modern Dressing", "Classic Dressing", "Luxury Dressing", "Minimalist Dressing"].map((option) => (
          <button
            key={option}
            onClick={() => {
              setStyle(option);
              onNext({ style: option });
            }}
            className={`option-btn ${style === option ? "selected" : ""}`}
          >
            <img src={`/others/${option}.jpg`} alt={option} />
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};


const Step1 = ({ currentData, onNext, onBack }) => {
  const [length, setLength] = useState(currentData.length);
  const [width, setWidth] = useState(currentData.width);
  const [height, setHeight] = useState(currentData.height);

  return (
    <div style={{
      margin: "20px auto",
      marginTop: "100px",
      width: "800px",
      height: "700px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
    }}>
      <h2>Specify Dimensions (in feet)</h2>
      <label>Length</label>
      <select value={length} onChange={(e) => setLength(e.target.value)} style={{
        width: "220px",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}>
        {[...Array(10).keys()].map(i => <option key={i} value={i + 3}>{i + 3}</option>)}
      </select>

      <label>Width</label>
      <select value={width} onChange={(e) => setWidth(e.target.value)} style={{
        width: "220px",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}>
        {[...Array(6).keys()].map(i => <option key={i} value={i + 2}>{i + 2}</option>)}
      </select>

      <label>Height</label>
      <select value={height} onChange={(e) => setHeight(e.target.value)} style={{
        width: "220px",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}>
        {[...Array(8).keys()].map(i => <option key={i} value={i + 5}>{i + 5}</option>)}
      </select>

      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ length, width, height })}>Next</button>
    </div>
  );
};


const Step2 = ({ currentData, onNext, onBack }) => {
  const [material, setMaterial] = useState(currentData.material || '');

  return (
    <div style={{
      margin: "20px auto",
      marginTop: "100px",
      width: "800px",
      height: "700px",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
    }}>
      <h2>Select Material</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}>
        {["Wood", "Metal", "Glass"].map(option => (
          <button
            key={option}
            onClick={() => { setMaterial(option); onNext({ material: option }); }}
            style={{
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
              border: material === option ? "3px solid #007bff" : "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              width: "180px",
              color: "black",
              transition: "transform 0.3s ease",
              backgroundColor: material === option ? "#e6f0ff" : "#fff",
              boxShadow: material === option ? "0px 0px 10px rgba(0, 123, 255, 0.5)" : "none",
            }}
          >
            <img src={`/others/${option}.jpg`} alt={option} style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              marginBottom: "8px",
              borderRadius: "8px",
            }}/>
            {option}
          </button>
        ))}
      </div>

      <button onClick={onBack}>Back</button>
    </div>
  );
};


const Step3 = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyName, setPropertyName] = useState('');

  return (
    <div className="step-container">
      <h2>Provide Your Details</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Property Name" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ name, email, phone, propertyName })} disabled={!name || !email || !phone || !propertyName}>Next</button>
    </div>
  );
};

const Step4 = ({ onSubmit }) => (
  <div className="step-container">
    <h2>Thank You!</h2>
    <p>Your dressing unit request has been submitted. We will contact you soon.</p>
    <form onSubmit={onSubmit}>
      <button type="submit">Finish</button>
    </form>
  </div>
);

export default DressingUnitsForm;

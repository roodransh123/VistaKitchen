import React, { useState } from 'react';
import '../../styles/LED_Panels_Form.css';
import "../../style.css";

const LEDCabinetForm = () => {
  const [formData, setFormData] = useState({
    panelMaterial: '',
    length: 4,
    width: 2,
    height: 6,
    finishType: '',
    name: '',
    email: '',
    phone: '',
    projectName: '',
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
      "entry.1423154573": formData.panelMaterial,
      "entry.440456193": formData.length,
      "entry.1148288126": formData.width,
      "entry.144670188": formData.height,
      "entry.923742742": formData.finishType,
      "entry.1797394805": formData.name,
      "entry.590795316": formData.email,
      "entry.34484213": formData.phone,
      "entry.934286388": formData.projectName
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

      alert("Submitted successfully!");
    } catch (error) {
      console.error("Submit error:", error);
      alert("Submission failed.");
    }
  };

  return (
    <div>
      {currentStep === 0 && <Step0 onNext={handleNext} />}
      {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <Step3 onSubmit={handleSubmit} onBack={handleBack} />}
    </div>
  );
};

// Step 0 – Panel Material
const Step0 = ({ onNext }) => {
  const [panelMaterial, setPanelMaterial] = useState('');

  return (
    <div className="step-container">
      <h2>Select Material</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {["Acrylic", "PolyCarbonate", "Glass", "Wood"].map(option => (
          <button
            key={option}
            onClick={() => { setPanelMaterial(option); onNext({ panelMaterial: option }); }}
            style={{
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
              border: panelMaterial === option ? "3px solid #007bff" : "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              width: "180px",
              color: "black",
              backgroundColor: panelMaterial === option ? "#e6f0ff" : "#fff",
              boxShadow: panelMaterial === option ? "0px 0px 10px rgba(0, 123, 255, 0.5)" : "none",
            }}
          >
            <img src={`/others/${option}.jpg`} alt={option} style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              marginBottom: "8px",
              borderRadius: "8px",
            }} />
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// Step 1 – Dimensions & Finish
const Step1 = ({ formData, setFormData, onNext, onBack }) => {
  const { length, width, height, finishType } = formData;

  return (
    <div className="step-container">
      <h2>Panel Details</h2>
      <div>
        <label>Length (ft)</label>
        <input type="number" value={length} onChange={(e) => setFormData({ ...formData, length: e.target.value })} />
      </div>
      <div>
        <label>Width (ft)</label>
        <input type="number" value={width} onChange={(e) => setFormData({ ...formData, width: e.target.value })} />
      </div>
      <div>
        <label>Height (ft)</label>
        <input type="number" value={height} onChange={(e) => setFormData({ ...formData, height: e.target.value })} />
      </div>
      <div>
        <label>Finish</label>
        <select
          value={finishType}
          onChange={(e) => setFormData({ ...formData, finishType: e.target.value })}
          style={{
            width: "220px",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        >
          <option value="">Select Finish</option>
          <option value="Matte">Matte</option>
          <option value="Glossy">Glossy</option>
          <option value="Textured">Textured</option>
        </select>
      </div>
      <div className="btn-group">
        <button onClick={onBack}>Back</button>
        <button onClick={() => onNext({})} disabled={!length || !width || !height || !finishType}>Next</button>
      </div>
    </div>
  );
};

// Step 2 – Project Info
const Step2 = ({ formData, setFormData, onNext, onBack }) => {
  const { name, email, phone, projectName } = formData;

  return (
    <div className="step-container">
      <h2>Provide Your Details</h2>
      <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setFormData({ ...formData, projectName: e.target.value })} />
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <div className="btn-group">
        <button onClick={onBack}>Back</button>
        <button onClick={() => onNext({})} disabled={!projectName || !name || !email || !phone}>Next</button>
      </div>
    </div>
  );
};

// Step 3 – Final Submit
const Step3 = ({ onSubmit, onBack }) => {
  return (
    <div className="step-container">
      <h2>Review & Submit</h2>
      <p>Please confirm your details and click Submit.</p>
      <form onSubmit={onSubmit}>
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LEDCabinetForm;

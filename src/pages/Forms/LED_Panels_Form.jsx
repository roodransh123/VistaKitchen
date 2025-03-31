import React, { useState } from 'react';
import '../../styles/LED_Panels_Form.css';
import "../../style.css";

const LEDPanelsForm = () => {
  const [formData, setFormData] = useState({
    panelType: '',
    length: 2,
    width: 2,
    brightness: '',
    colorTemperature: '',
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
      "entry.1423154573": formData.panelType,
      "entry.440456193": formData.length,
      "entry.1148288126": formData.width,
      "entry.144670188": formData.brightness,
      "entry.923742742": formData.colorTemperature,
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
  const [panelType, setPanelType] = useState('');

  return (
    <div className="step-container">
      <h2>Select LED Panel Type</h2>
      <div className="options">
        {['EdgeLit LED', 'Backlit LED', 'Surface Mounted LED', 'Recesssed LED'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setPanelType(option);
              onNext({ panelType: option });
            }}
            className={`option-btn ${panelType === option ? 'selected' : ''}`}
          >
            <img
              src={`/others/${option}.jpg`}
              alt={option}
            />
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
      <h2>Set Dimensions (in feet)</h2>

      <label style={{ fontWeight: "bold", marginBottom: "8px", color: "#555" }}>Length</label>
      <select value={length} onChange={(e) => setLength(e.target.value)} style={{
        width: "220px",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}>
        {[...Array(6).keys()].map((i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>

      <label style={{ fontWeight: "bold", marginBottom: "8px", color: "#555" }}>Width</label>
      <select value={width} onChange={(e) => setWidth(e.target.value)} style={{
        width: "220px",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}>
        {[...Array(6).keys()].map((i) => (
          <option key={i} value={i + 1}>{i + 1}</option>
        ))}
      </select>

      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ length, width })}>Next</button>
    </div>
  );
};


const Step2 = ({ currentData, onNext, onBack }) => {
  const [brightness, setBrightness] = useState(currentData.brightness);
  const [colorTemperature, setColorTemperature] = useState(currentData.colorTemperature);

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
      <h2>Lighting Preferences</h2>

      <label style={{ fontWeight: "bold", marginBottom: "8px", color: "#555" }}>Brightness (Lumens)</label>
      <input type="number" value={brightness} onChange={(e) => setBrightness(e.target.value)} style={{
        width: "220px",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}/>

      <label style={{ fontWeight: "bold", marginBottom: "8px", color: "#555" }}>Color Temperature (K)</label>
      <input type="number" value={colorTemperature} onChange={(e) => setColorTemperature(e.target.value)} style={{
        width: "220px",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
      }}/>

      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ brightness, colorTemperature })}>Next</button>
    </div>
  );
};


const Step3 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectName, setProjectName] = useState('');

  return (
    <div className="step-container">
      <h2>Contact Information</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="text" placeholder="Property Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ name, email, phone, projectName })} disabled={!name || !email || !phone || !projectName}>Next</button>
    </div>
  );
};

const Step4 = ({ onSubmit }) => {
  return (
    <div className="step-container">
      <h2>Thank You!</h2>
      <p>Your LED panel selection has been submitted. We will contact you soon.</p>
      <form onSubmit={onSubmit}>
        <button type="submit">Finish</button>
      </form>
    </div>
  );
};

export default LEDPanelsForm;

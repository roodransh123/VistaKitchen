import React, { useState } from 'react';
import '../../styles/Vanity_Form.css';
import "../../style.css";

const VanitiesForm = () => {
  const [formData, setFormData] = useState({
    style: '',
    length: 4,
    width: 2,
    height: 3,
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
      "entry.440456193": formData.length,
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
    <div style={{ 
      marginTop: '200px', 
      textAlign: 'center',
      width: '100%',
      maxWidth: '800px',
      margin: '200px auto 0',
      padding: '0 15px',
      boxSizing: 'border-box'
    }}>
      {currentStep === 0 && <Step0 onNext={handleNext} />}
      {currentStep === 1 && <Step1 currentData={formData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 2 && <Step2 currentData={formData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 3 && <Step3 currentData={formData} onNext={handleNext} onBack={handleBack} />}
      {currentStep === 4 && <Step4 onSubmit={handleSubmit} />}
    </div>
  );
};

// Step 0: Choose Vanity Style
const Step0 = ({ onNext }) => {
  const [style, setStyle] = useState('');

  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Select Your Vanity Style</h2>
      <p style={{ color: 'grey' }}>Choose from our range of vanity styles:</p>
      <div className="options">
        {['Modern Vanity', 'Traditional Vanity', 'Rustic Vanity', 'Minimalist Vanity'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setStyle(option);
              onNext({ style: option });
            }}
            className={`option-btn ${style === option ? 'selected' : ''}`}
          >
            <img
              src={`/others/${option}.webp`}
              alt={option}
            />
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// Step 1: Select Dimensions
const Step1 = ({ currentData, onNext, onBack }) => {
  const [length, setLength] = useState(currentData.length);
  const [width, setWidth] = useState(currentData.width);
  const [height, setHeight] = useState(currentData.height);

  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Specify Vanity Dimensions (in feet)</h2>
      <p style={{ color: 'grey' }}>Set the dimensions for your vanity:</p>
      <div>
        <label>Length</label>
        <select value={length} onChange={(e) => setLength(e.target.value)}>
          {[...Array(10).keys()].map((i) => (
            <option key={i} value={i + 3}>{i + 3}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Width</label>
        <select value={width} onChange={(e) => setWidth(e.target.value)}>
          {[...Array(6).keys()].map((i) => (
            <option key={i} value={i + 2}>{i + 2}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Height</label>
        <select value={height} onChange={(e) => setHeight(e.target.value)}>
          {[...Array(6).keys()].map((i) => (
            <option key={i} value={i + 3}>{i + 3}</option>
          ))}
        </select>
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ length, width, height })}>Next</button>
    </div>
  );
};

// Step 2: Choose Material
const Step2 = ({ currentData, onNext, onBack }) => {
  const [material, setMaterial] = useState(currentData.material || '');

  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Select Material</h2>
      <p style={{ color: 'grey' }}>Pick the material for your vanity:</p>
      <div className="options">
        {['marblev', 'woodv' , 'granitev'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setMaterial(option);
              onNext({ material: option });
            }}
            className={`option-btn ${material === option ? 'selected' : ''}`}
          >
            <img
              src={`others/${option}.webp`}
              alt={option}
            />
            {option}
          </button>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

// Step 3: Customer Details
const Step3 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyName, setPropertyName] = useState('');

  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Provide Your Details</h2>
      <p style={{ color: 'grey' }}>Fill out your contact information:</p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Property Name"
        value={propertyName}
        onChange={(e) => setPropertyName(e.target.value)}
      />
      <button onClick={onBack}>Back</button>
      <button
        onClick={() => onNext({ name, email, phone, propertyName })}
        disabled={!name || !email || !phone || !propertyName}
      >
        Next
      </button>
    </div>
  );
};

// Step 4: Final Step
const Step4 = ({ onSubmit }) => {
  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Thank You!</h2>
      <p style={{ color: 'black' }}>Your vanity design is almost ready. We will contact you soon with the details.</p>
      <form onSubmit={onSubmit}>
        <button type="submit">Finish</button>
      </form>
    </div>
  );
};


export default VanitiesForm;

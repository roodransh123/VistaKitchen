import React, { useState } from 'react';
import '../../styles/Vanity_Form.css';

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

  const handleSubmit = async () => {
    console.log('Final Data:', formData);
    alert('Form submitted successfully!');
    // Send formData to backend or external service here
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

// Step 0: Choose Vanity Style
const Step0 = ({ onNext }) => {
  const [style, setStyle] = useState('');

  return (
    <div className="step-container">
      <h2>Select Your Vanity Style</h2>
      <p>Choose from our range of vanity styles:</p>
      <div className="options">
        {['Modern', 'Traditional', 'Rustic', 'Minimalist'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setStyle(option);
              onNext({ style: option });
            }}
            className={`option-btn ${style === option ? 'selected' : ''}`}
          >
            <img
              src={`https://via.placeholder.com/150?text=${option}`}
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
      <h2>Specify Vanity Dimensions (in feet)</h2>
      <p>Set the dimensions for your vanity:</p>
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
      <h2>Select Material</h2>
      <p>Pick the material for your vanity:</p>
      <div className="options">
        {['Marble', 'Granite', 'Wood', 'Laminate'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setMaterial(option);
              onNext({ material: option });
            }}
            className={`option-btn ${material === option ? 'selected' : ''}`}
          >
            <img
              src={`https://via.placeholder.com/150?text=${option}`}
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
      <h2>Provide Your Details</h2>
      <p>Fill out your contact information:</p>
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
      <h2>Thank You!</h2>
      <p>Your vanity design is almost ready. We will contact you soon with the details.</p>
      <button onClick={onSubmit}>Finish</button>
    </div>
  );
};

export default VanitiesForm;

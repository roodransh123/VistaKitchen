import React, { useState } from 'react';
import '../../styles/Wardrobe_Form.css';
const WardrobeForm = () => {
  const [formData, setFormData] = useState({
    length: '',
    type: '',
    finish: '',
    material: '',
    accessories: [],
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = (stepData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...stepData,
    }));
    setCurrentStep((prev) => prev + 1);
  };

  /**
   * Handles the "Back" button click. Decrements the current step by 1.
   * @function
   * @returns {void}
   */
  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    console.log('Final Data:', formData);
    alert('Form submitted successfully!');
    // Send formData to Google Apps Script or backend here
  };

  return (
    <div style={{ marginTop: '200px', textAlign: 'center' }}>
      {currentStep === 1 && (
        <WardrobeStep1 currentData={formData} onNext={handleNext} />
      )}
      {currentStep === 2 && (
        <WardrobeStep2 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 3 && (
        <WardrobeStep3 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 4 && (
        <WardrobeStep4 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 5 && (
        <WardrobeStep5 currentData={formData} onBack={handleBack} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

const WardrobeStep1 = ({ currentData, onNext }) => {
  const [length, setLength] = useState(currentData.length || '');

  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
    <div className="wardrobe-step1-container">
      <h2>Select Wardrobe Length</h2>
      <p>Choose the length that best fits your space:</p>
      <div className="wardrobe-step1-options">
        {['4 ft', '6 ft', '7 ft', '8 ft'].map((option) => (
          <button
            key={option}
            onClick={() => onNext({ length: option })}
            className={`wardrobe-step1-option-btn ${length === option ? 'selected' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};


const WardrobeStep2 = ({ currentData, onNext, onBack }) => {
  const [type, setType] = useState(currentData.type || '');

  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
    <div className="wardrobe-step2-container">
      <h2>Select Type</h2>
      <p>Choose the type of wardrobe door you prefer:</p>
      <div className="wardrobe-step2-card-container">
        {['Sliding', 'Swing'].map((option) => (
          <div
            key={option}
            className={`wardrobe-step2-card ${type === option ? 'selected' : ''}`}
            onClick={() => setType(option)}
          >
            <img src="https://via.placeholder.com/150" alt={option} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ type })} disabled={!type}>Next</button>
    </div>
    </div>
  );
};

const WardrobeStep3 = ({ onNext, onBack }) => {
  const [finish, setFinish] = useState('');

  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
    <div className="wardrobe-step3-container">
      <h2>Preferred Finish</h2>
      <p>Choose your preferred finish for the wardrobe doors:</p>
      <div className="wardrobe-step3-card-container">
        {['Laminate', 'Membrane', 'Acrylic'].map((option) => (
          <div key={option} className="wardrobe-step3-card" onClick={() => setFinish(option)}>
            <img src="https://via.placeholder.com/150" alt={option} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ finish })} disabled={!finish}>Next</button>
    </div>
    </div>
  );
};

const WardrobeStep4 = ({ onNext, onBack }) => {
  const [material, setMaterial] = useState('');

  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
    <div className="wardrobe-step4-container">
      <h2>Select Material</h2>
      <p>Choose the material for the wardrobe structure:</p>
      <div className="wardrobe-step4-card-container">
        {['MDF', 'HMR'].map((option) => (
          <div key={option} className="wardrobe-step4-card" onClick={() => setMaterial(option)}>
            <img src="https://via.placeholder.com/150" alt={option} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ material })} disabled={!material}>Next</button>
    </div>
    </div>
  );
};

const WardrobeStep5 = ({ onBack, onSubmit }) => {
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  
  const accessoriesList = [
    { name: 'Drawer organizers', image: 'https://via.placeholder.com/150' },
    { name: 'Hangers', image: 'https://via.placeholder.com/150' },
    { name: 'Shoe racks', image: 'https://via.placeholder.com/150' },
    { name: 'LED lights', image: 'https://via.placeholder.com/150' },
    { name: 'Storage baskets', image: 'https://via.placeholder.com/150' },
  ];
  
  const handleAccessoryChange = (accessory) => {
    setSelectedAccessories((prev) =>
      prev.includes(accessory)
        ? prev.filter((item) => item !== accessory)
        : [...prev, accessory]
    );
  };
  
  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
    <div className="wardrobe-step5-container">
      <h2>Select Accessories (Optional)</h2>
      <p>Choose up to 5 optional accessories for your wardrobe:</p>
      <div className="wardrobe-step5-card-container">
        {accessoriesList.map((accessory) => (
          <div
            key={accessory.name}
            className={`wardrobe-step5-card ${selectedAccessories.includes(accessory.name) ? 'selected' : ''}`}
            onClick={() => handleAccessoryChange(accessory.name)}
          >
            <img src={accessory.image} alt={accessory.name} />
            <h3>{accessory.name}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onSubmit({ accessories: selectedAccessories })}>
        Submit
      </button>
    </div>
    </div>
  );
};

export default WardrobeForm;



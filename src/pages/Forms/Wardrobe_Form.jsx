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
        <Step1 onNext={(data) => handleNext(data)} />
      )}
      {currentStep === 2 && (
        <Step2 onNext={(data) => handleNext(data)} onBack={handleBack} />
      )}
      {currentStep === 3 && (
        <Step3 onNext={(data) => handleNext(data)} onBack={handleBack} />
      )}
      {currentStep === 4 && (
        <Step4 onNext={(data) => handleNext(data)} onBack={handleBack} />
      )}
      {currentStep === 5 && (
        <Step5 onBack={handleBack} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

const Step1 = ({ onNext }) => {
  const [length, setLength] = useState('');

  return (
    <div className="step-container">
      <h2>Select Wardrobe Length</h2>
      <p>Choose the length that best fits your space:</p>
      <div className="options">
        {['4 ft', '6 ft', '7 ft', '8 ft'].map((option) => (
          <button
            key={option}
            onClick={() => onNext({ length: option })}
            className="option-btn"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const Step2 = ({ onNext, onBack }) => {
  const [type, setType] = useState('');

  return (
    <div className="step-container">
      <h2>Select Type</h2>
      <p>Choose the type of wardrobe door you prefer:</p>
      <div className="card-container">
        {['Sliding', 'Swing'].map((option) => (
          <div key={option} className="card" onClick={() => setType(option)}>
            <img src="https://via.placeholder.com/150" alt={option} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ type })} disabled={!type}>Next</button>
    </div>
  );
};

const Step3 = ({ onNext, onBack }) => {
  const [finish, setFinish] = useState('');

  return (
    <div className="step-container">
      <h2>Preferred Finish</h2>
      <p>Choose your preferred finish for the wardrobe doors:</p>
      <div className="card-container">
        {['Laminate', 'Membrane', 'Acrylic'].map((option) => (
          <div key={option} className="card" onClick={() => setFinish(option)}>
            <img src="https://via.placeholder.com/150" alt={option} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ finish })} disabled={!finish}>Next</button>
    </div>
  );
};

const Step4 = ({ onNext, onBack }) => {
  const [material, setMaterial] = useState('');

  return (
    <div className="step-container">
      <h2>Select Material</h2>
      <p>Choose the material for the wardrobe structure:</p>
      <div className="card-container">
        {['MDF', 'HMR'].map((option) => (
          <div key={option} className="card" onClick={() => setMaterial(option)}>
            <img src="https://via.placeholder.com/150" alt={option} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ material })} disabled={!material}>Next</button>
    </div>
  );
};

const Step5 = ({ onBack, onSubmit }) => {
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
      <div className="step-container">
        <h2>Select Accessories (Optional)</h2>
        <p>Choose up to 5 optional accessories for your wardrobe:</p>
        <div className="card-container">
          {accessoriesList.map((accessory) => (
            <div
              key={accessory.name}
              className={`card ${selectedAccessories.includes(accessory.name) ? 'selected' : ''}`}
              onClick={() => handleAccessoryChange(accessory.name)}
            >
              <img src={accessory.image} alt={accessory.name} />
              <h3>{accessory.name}</h3>
            </div>
          ))}
        </div>
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onSubmit({ accessories: selectedAccessories })}
          disabled={selectedAccessories.length === 0}
        >
          Submit
        </button>
      </div>
    );
  };

export default WardrobeForm;

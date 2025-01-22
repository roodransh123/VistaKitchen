import React, { useState } from 'react';
import '../../styles/Kitchen_Form.css';
const KitchenForm = () => {
  const [formData, setFormData] = useState({
    layout: '',
    length: 8,
    width: 8,
    height: 8,
    package: '',
    name: '',
    email: '',
    phone: '',
    propertyName: '',
  });

  const [currentStep, setCurrentStep] = useState(0); // Start at Step 0

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

  const handlePackageChoice = (choice) => {
    if (choice === 'catalogue') {
      setCurrentStep(1); // Proceed with regular form flow
    } else if (choice === 'build-your-own') {
      window.location.href = '/Build-Your-Own-Package'; // Navigate to Build Your Own Package form
    }
  };

  return (
    <div>
      {currentStep === 0 && (
        <Step0 onChoice={handlePackageChoice} />
      )}
      {currentStep === 1 && (
        <Step1 currentData={formData} onNext={handleNext} />
      )}
      {currentStep === 2 && (
        <Step2 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 3 && (
        <Step3 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 4 && (
        <Step4 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 5 && (
        <Step5 onSubmit={handleSubmit} />
      )}
    </div>
  );
};

// Step 0: Choose Catalogue or Build Your Own Kitchen
const Step0 = ({ onChoice }) => {
  return (
    <div className="step-container">
      <h2>Do you want to choose from our catalogue or build your own kitchen?</h2>
      <button onClick={() => onChoice('catalogue')}>Choose from our catalogue</button>
      <button onClick={() => onChoice('build-your-own')}>Build Your Own Kitchen</button>
    </div>
  );
};

const Step1 = ({ currentData, onNext }) => {
  const [layout, setLayout] = useState(currentData.layout || '');

  return (
    <div className="step-container">
      <h2>Select Kitchen Layout</h2>
      <p>Choose the layout for your kitchen:</p>
      <div className="options">
        {['L-Shaped', 'Straight', 'U-Shaped', 'Parallel'].map((option) => (
          <button
            key={option}
            onClick={() => {
              setLayout(option);
              onNext({ layout: option });
            }}
            className={`option-btn ${layout === option ? 'selected' : ''}`}
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

const Step2 = ({ currentData, onNext, onBack }) => {
  const [length, setLength] = useState(currentData.layout === 'U-Shaped' ? 10 : 8);
  const [width, setWidth] = useState(currentData.layout === 'U-Shaped' ? 10 : 8);
  const [height, setHeight] = useState(currentData.layout === 'U-Shaped' ? 10 : 8);

  const getDropdowns = () => {
    if (currentData.layout === 'U-Shaped') {
      return (
        <>
          <div>
            <label>Length (ft)</label>
            <select value={length} onChange={(e) => setLength(e.target.value)}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Width (ft)</label>
            <select value={width} onChange={(e) => setWidth(e.target.value)}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Height (ft)</label>
            <select value={height} onChange={(e) => setHeight(e.target.value)}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
        </>
      );
    } else if (currentData.layout === 'Straight') {
      return (
        <div>
          <label>Length (ft)</label>
          <select value={length} onChange={(e) => setLength(e.target.value)}>
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 3}>{i + 3}</option>
            ))}
          </select>
        </div>
      );
    } else if (['L-Shaped', 'Parallel'].includes(currentData.layout)) {
      return (
        <>
          <div>
            <label>Length (ft)</label>
            <select value={length} onChange={(e) => setLength(e.target.value)}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Width (ft)</label>
            <select value={width} onChange={(e) => setWidth(e.target.value)}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
        </>
      );
    }
  };

  return (
    <div className="step-container">
      <h2>Review Measurements for Accuracy (in feet)</h2>
      <p>Please review and update your kitchen dimensions:</p>
      {getDropdowns()}
      <button onClick={onBack}>Back</button>
      <button
        onClick={() => onNext({ length, width, height })}
        disabled={!length || !width || (currentData.layout === 'U-Shaped' && !height)}
      >
        Next
      </button>
    </div>
  );
};

const Step3 = ({ currentData, onNext, onBack }) => {
  const [selectedPackage, setSelectedPackage] = useState(currentData.package || '');

  return (
    <div className="step-container">
      <h2>Pick Your Package</h2>
      <p>Select a package for your kitchen:</p>
      <div className="card-container">
        {['Essential', 'Premium', 'Luxe'].map((option) => (
          <div
            key={option}
            className={`card ${selectedPackage === option ? 'selected' : ''}`}
            onClick={() => {
              setSelectedPackage(option);
              onNext({ package: option });
            }}
          >
            <img src={`https://via.placeholder.com/150?text=${option}`} alt={option} />
            <h3>{option}</h3>
            <p>{option === 'Build Your Own' ? 'Customize your kitchen' : `The ${option} package`}</p>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button
        onClick={() => {
          onNext({ package: selectedPackage });
        }}
        disabled={!selectedPackage}
      >
        Next
      </button>
    </div>
  );
};

const Step4 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyName, setPropertyName] = useState('');

  return (
    <div className="step-container">
      <h2>Your Kitchen is Almost Ready!</h2>
      <p>Fill in your details to get an estimate:</p>
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
        Get Estimate
      </button>
    </div>
  );
};

const Step5 = ({ onSubmit }) => {
  return (
    <div className="step-container">
      <h2>Thank You!</h2>
      <p>Your kitchen design is almost ready. We will get back to you soon.</p>
      <button onClick={onSubmit}>Finish</button>
    </div>
  );
};

export default KitchenForm;

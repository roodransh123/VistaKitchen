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

const Step0 = ({ onChoice }) => {
  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Do you want to choose from our catalogue or build your own kitchen?</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          width: '100%'
        }}
      >
        {[{ key: 'catalogue', img: 'PremiumKitchen.webp', text: 'Our catalogue' },
          { key: 'build-your-own', img: 'LuxuryKitchen.webp', text: 'Build Your Own Kitchen' }].map(({ key, img, text }) => (
          <div
            key={key}
            onClick={() => onChoice(key)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '300px',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            <img 
              src={`/forms_images/${img}`} 
              alt={text} 
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px'
              }} 
            />
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'black', margin: '10px 0' }}>
              {text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const Step1 = ({ currentData, onNext }) => {
  const [layout, setLayout] = useState(currentData.layout || '');

  return (
    <div className="step-container" style={{ backgroundColor: 'white' }}>
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Select Kitchen Layout</h2>
      <p style={{ fontSize: '16px', color: 'black', textAlign: 'center' }}>Choose the layout for your kitchen:</p>
      <div className="options" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {['L-Shaped', 'Straight', 'U-Shaped', 'Parallel'].map((option) => (
          <div
            key={option}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
              width: '90%',
              maxWidth: '300px',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: layout === option ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none'
            }}
            onClick={() => {
              setLayout(option);
              onNext({ layout: option });
            }}
          >
            <img
              src={`/forms_images/${option}.webp`}
              alt={option}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px',
                filter: layout === option ? 'brightness(0.6)' : 'brightness(1)'
              }}
            />
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'black', margin: '10px 0' }}>
              {option}
            </h3>
          </div>
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
    <div className="step-container" style={{ backgroundColor: 'white' }}>
      <h2 style={{ color: 'black' }}>Review Measurements for Accuracy (in feet)</h2>
      <p style={{ color: 'black' }}>Please review and update your kitchen dimensions:</p>
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
    <div 
      style={{
        margin: '20px auto',
        marginTop: '100px',
        width: '500px',
        height: '700px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white'
      }}
    >
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Pick Your Package</h2>
      <p style={{ fontSize: '16px', color: 'black' }}>Select a package for your kitchen:</p>
      
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          width: '100%'
        }}
      >
        {['EssentialKitchen', 'PremiumKitchen', 'LuxuryKitchen'].map((option) => (
          <div
            key={option}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'white',
              border: '1px solid #ddd',
              borderRadius: '8px',
             
              width: '90%',
              maxWidth: '600px',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: selectedPackage === option ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none'
            }}
            onClick={() => {
              setSelectedPackage(option);
              onNext({ package: option });
            }}
          >
            <img 
              src={`/forms_images/${option}.webp`} 
              alt={option} 
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px'
              }} 
            />
            
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'black', margin: '10px 0' }}>
              {option.replace('Kitchen', ' Kitchen')}
            </h3>
            
            <p style={{ fontSize: '16px', color: 'black', padding: '0 15px', textAlign: 'center' }}>
              {option === 'EssentialKitchen' && 'Budget-friendly kitchen with essential features.'}
              {option === 'PremiumKitchen' && 'Balanced kitchen with high-quality finishes and durability.'}
              {option === 'LuxuryKitchen' && 'High-end kitchen with premium materials and advanced features.'}
            </p>
          </div>
        ))}
      </div>

      <button 
        onClick={onBack}
        
      >
        Back
      </button>

      <button 
        onClick={() => onNext({ package: selectedPackage })}
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
    <div className="step-container" style={{ backgroundColor: 'white' }}>
      <h2 style={{color: 'black'}}>Your Kitchen is Almost Ready!</h2>
      <p style={{color: 'grey'}}>Fill in your details to get an estimate:</p>
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
      <h2 style={{color: 'black'}}>Thank You!</h2>
      <p  style={{color: 'black'}}>Your kitchen design is almost ready. We will get back to you soon.</p>
      <button onClick={onSubmit}>Finish</button>
    </div>
  );
};

export default KitchenForm;



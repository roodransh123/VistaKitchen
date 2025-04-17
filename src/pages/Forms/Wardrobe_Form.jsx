import React, { useState } from 'react';
import '../../styles/Wardrobe_Form.css';
import "../../style.css";

const WardrobeForm = () => {
  const [formData, setFormData] = useState({
    length: '',
    type: '',
    material: '',
    name: '',
    email: '',
    phone: '',
    propertyName: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
        "entry.362866878": formData.length,
        "entry.922557057": formData.type,
        "entry.935091605": formData.material,
        "entry.1222525993": formData.name,
        "entry.1567207954": formData.email,  
        "entry.469889829": formData.phone,
        "entry.1464337213": formData.propertyName
    };

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScrfq2xZyZ1nGJDiX41hhjcPcYZvFw_nVA0wGjiYXa90r0KGQ/formResponse";

    try {
        await fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(data).toString()
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
      <WardrobeStep5 onSubmit={handleSubmit} />
    )}
  </div>
);
};

const WardrobeStep1 = ({ currentData, onNext }) => {
  const [length, setLength] = useState(currentData.length || '');

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white', 
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div className="wardrobe-step1-container">
        <h2 style={{ color: 'black' }}>Select Wardrobe Length</h2>
        <p style={{ color: 'grey' }}>Choose the length that best fits your space:</p>
        <div className="wardrobe-step1-options" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center' 
        }}>
          {['4 ft', '6 ft', '7 ft', '8 ft'].map((option, index) => (
            <button
              key={option}
              onClick={() => onNext({ length: option })}
              className={`wardrobe-step1-option-btn ${length === option ? 'selected' : ''}`}
              style={{ 
                width: 'calc(50% - 10px)', 
                margin: index % 2 === 0 ? '0 10px 10px 0' : '0 0 10px 10px',
                '@media (max-width: 480px)': {
                  width: '100%',
                  margin: '0 0 10px 0'
                }
              }}
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
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div className="wardrobe-step2-container">
        <h2 style={{ color: 'black' }}>Select Type</h2>
        <p style={{ color: 'grey' }}>Choose the type of wardrobe door you prefer:</p>
        <div className="wardrobe-step2-card-container" style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          marginTop: '20px',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          alignItems: window.innerWidth <= 768 ? 'center' : 'stretch'
        }}>
          {['swing_wardrobe', 'sliding_wardrobe'].map((option) => (
            <div
              key={option}
              className={`wardrobe-step2-card ${type === option ? 'selected' : ''}`}
              onClick={() => setType(option)}
              style={{ 
                flex: '1 1 45%', 
                marginRight: '10px',
                maxWidth: window.innerWidth <= 768 ? '100%' : 'unset',
                marginBottom: window.innerWidth <= 768 ? '20px' : '0'
              }}
            >
              <img 
                src={`/others/${option.toLowerCase()}.jpg`} 
                alt={option} 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '300px',
                  objectFit: 'cover'
                }} 
              />
              <h3 style={{ textAlign: 'center', color: 'black', fontSize: '20px' }}>
                {option.replace(/[_]/g, ' ').replace(/^./, match => match.toUpperCase())}
              </h3>
            </div>
          ))}
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
          gap: window.innerWidth <= 480 ? '10px' : '0'
        }}>
          <button onClick={onBack} style={{
            marginRight: window.innerWidth <= 480 ? '0' : '10px'
          }}>Back</button>
          <button onClick={() => onNext({ type })} disabled={!type}>Next</button>
        </div>
      </div>
    </div>
  );
};

const WardrobeStep3 = ({ currentData, onNext, onBack }) => {
  const [material, setMaterial] = useState(currentData.finish || '');

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div className="wardrobe-step3-container">
        <h2 style={{ color: 'black' }}>Preferred Finish</h2>
        <p style={{ color: 'grey' }}>Choose your preferred finish for the wardrobe doors:</p>
        <div className="wardrobe-step3-card-container" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: '20px' 
        }}>
          <div
            className={`wardrobe-step3-card ${material === 'HDHMR' ? 'selected' : ''}`}
            onClick={() => setMaterial('HDHMR')}
            style={{ 
              width: window.innerWidth <= 768 ? '100%' : '80%', 
              marginBottom: '20px' 
            }}
          >
            <img 
              src="/others/mdffinish.webp" 
              alt="HDHMR" 
              style={{ 
                width: '100%', 
                height: 'auto',
                maxHeight: '300px',
                borderRadius: '10px',
                objectFit: 'cover'
              }} 
            />
            <h3 style={{ textAlign: 'center', color: 'black', fontSize: '24px' }}>MDF</h3>
          </div>
          <div
            className={`wardrobe-step3-card ${material === 'HGFinish' ? 'selected' : ''}`}
            onClick={() => setMaterial('HGFinish')}
            style={{ 
              width: window.innerWidth <= 768 ? '100%' : '80%'
            }}
          >
            <img 
              src="/others/HMR.webp" 
              alt="HGFinish" 
              style={{ 
                width: '100%', 
                height: 'auto',
                maxHeight: '300px',
                borderRadius: '10px',
                objectFit: 'cover' 
              }} 
            />
            <h3 style={{ textAlign: 'center', color: 'black', fontSize: '24px' }}>HMR</h3>
          </div>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          width: window.innerWidth <= 768 ? '100%' : '80%',
          margin: window.innerWidth <= 768 ? '20px auto 0' : '20px auto 0',
          flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
          gap: window.innerWidth <= 480 ? '10px' : '0'
        }}>
          <button onClick={onBack}>Back</button>
          <button onClick={() => onNext({ material })} disabled={!material}>Next</button>
        </div>
      </div>
    </div>
  );
};

const WardrobeStep4 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState(currentData.name || '');
  const [email, setEmail] = useState(currentData.email || '');
  const [phone, setPhone] = useState(currentData.phone || '');
  const [propertyName, setPropertyName] = useState(currentData.propertyName || '');

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{color: 'black'}}>Your Wardrobe is Almost Ready!</h2>
      <p style={{color: 'grey'}}>Fill in your details to get an estimate:</p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      <input
        type="text"
        placeholder="Property Name"
        value={propertyName}
        onChange={(e) => setPropertyName(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
        gap: window.innerWidth <= 480 ? '10px' : '0'
      }}>
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ name, email, phone, propertyName })}
          disabled={!name || !email || !phone || !propertyName}
        >
          Get Estimate
        </button>
      </div>
    </div>
  );
};

const WardrobeStep5 = ({ onSubmit }) => {
  return (
    <div className="step-container" style={{
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2>Thank You!</h2>
      <p>We will get back to you soon.</p>
      <form onSubmit={onSubmit}>
        <button type="submit">Finish</button>
      </form>
    </div>
  );
};


export default WardrobeForm;



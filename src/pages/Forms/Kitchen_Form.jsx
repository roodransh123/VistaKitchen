import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Kitchen_Form.css';
import "../../style.css";

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

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  
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
      "entry.2063857810": formData.layout,
      "entry.1491872240": formData.length,
      "entry.622765093": formData.width,
      "entry.1561618339": formData.height,
      "entry.2145306408": formData.package,
      "entry.1517116296": formData.name,
      "entry.275462525": formData.email,
      "entry.678316538": formData.phone,
      "entry.1150015661": formData.propertyName
    };

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfDlVNEIFnShpj4ejIU8YOEkE2sCSWuDH2mv8FVpA5F9qhb7w/formResponse";

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

  const handlePackageChoice = (choice) => {
    if (choice === 'catalogue') {
      setCurrentStep(1);
    } else if (choice === 'build-your-own') {
      navigate('/Build-Your-Own-Package');
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
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box',
      padding: '15px'
    }}>
      <h2 style={{ 
        fontSize: '30px', 
        color: 'black', 
        textAlign: 'center',
        fontSize: window.innerWidth <= 480 ? '24px' : '30px'
      }}>Do you want to choose from our catalogue or build your own kitchen?</h2>
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
              width: window.innerWidth <= 768 ? '100%' : '90%',
              maxWidth: '300px',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              margin: window.innerWidth <= 480 ? '10px 0' : '0'
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
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box',
      padding: '15px'
    }}>
      <h2 style={{ 
        fontSize: window.innerWidth <= 480 ? '24px' : '30px', 
        color: 'black', 
        textAlign: 'center' 
      }}>Select Kitchen Layout</h2>
      <p style={{ fontSize: '16px', color: 'black', textAlign: 'center' }}>Choose the layout for your kitchen:</p>
      <div className="options" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px',
        width: '100%'
      }}>
      {['L-Shaped', 'Straight', 'U-Shaped', 'Parallel', 'Island', 'G-Shaped', 'J-Shaped'].map((option) => (
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
              width: window.innerWidth <= 768 ? '100%' : '90%',
              maxWidth: '300px',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: layout === option ? '0px 4px 10px rgb(70, 255, 73)' : 'none',
              margin: window.innerWidth <= 480 ? '10px 0' : '0'
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
    const dropdownContainerStyle = {
      display: 'flex',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
      gap: '15px',
      width: '100%',
      marginBottom: '20px'
    };

    const dropdownStyle = {
      display: 'flex',
      flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
      alignItems: window.innerWidth <= 480 ? 'flex-start' : 'center',
      gap: window.innerWidth <= 480 ? '5px' : '10px',
      width: window.innerWidth <= 768 ? '100%' : 'auto'
    };

    const selectStyle = {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      width: window.innerWidth <= 480 ? '100%' : 'auto'
    };

    if (['U-Shaped', 'G-Shaped'].includes(currentData.layout)) {
      return (
        <div style={dropdownContainerStyle}>
          <div style={dropdownStyle}>
            <label>Length (ft)</label>
            <select value={length} onChange={(e) => setLength(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div style={dropdownStyle}>
            <label>Width (ft)</label>
            <select value={width} onChange={(e) => setWidth(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div style={dropdownStyle}>
            <label>Height (ft)</label>
            <select value={height} onChange={(e) => setHeight(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
        </div>
      );
    } else if (currentData.layout === 'Straight') {
      return (
        <div style={dropdownContainerStyle}>
          <div style={dropdownStyle}>
            <label>Length (ft)</label>
            <select value={length} onChange={(e) => setLength(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
        </div>
      );
    } else if (['L-Shaped', 'Parallel', 'J-Shaped'].includes(currentData.layout)) {
      return (
        <div style={dropdownContainerStyle}>
          <div style={dropdownStyle}>
            <label>Length (ft)</label>
            <select value={length} onChange={(e) => setLength(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div style={dropdownStyle}>
            <label>Width (ft)</label>
            <select value={width} onChange={(e) => setWidth(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
        </div>
      );
    } else if (currentData.layout === 'Island') {
      return (
        <div style={dropdownContainerStyle}>
          <div style={dropdownStyle}>
            <label>Island Length (ft)</label>
            <select value={length} onChange={(e) => setLength(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
          <div style={dropdownStyle}>
            <label>Island Width (ft)</label>
            <select value={width} onChange={(e) => setWidth(e.target.value)} style={selectStyle}>
              {[...Array(10).keys()].map((i) => (
                <option key={i} value={i + 3}>{i + 3}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box',
      padding: '15px'
    }}>
      <h2 style={{ 
        color: 'black',
        fontSize: window.innerWidth <= 480 ? '24px' : '30px',
        textAlign: 'center'
      }}>Review Measurements for Accuracy (in feet)</h2>
      <p style={{ 
        color: 'black',
        textAlign: 'center',
        marginBottom: '20px' 
      }}>Please review and update your kitchen dimensions:</p>
      
      {getDropdowns()}
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
        gap: window.innerWidth <= 480 ? '10px' : '0'
      }}>
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ length, width, height })}
          disabled={!length || !width || (['U-Shaped', 'G-Shaped'].includes(currentData.layout) && !height)}
        >
          Next
        </button>
      </div>
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
        width: window.innerWidth <= 768 ? '90%' : '500px',
        maxWidth: '500px',
        height: 'auto',
        maxHeight: '700px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        boxSizing: 'border-box'
      }}
    >
      <h2 style={{ 
        fontSize: window.innerWidth <= 480 ? '24px' : '30px', 
        color: 'black', 
        textAlign: 'center' 
      }}>Pick Your Package</h2>
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
              width: '100%',
              maxWidth: '600px',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'black',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: selectedPackage === option ? '0px 4px 10px rgb(70, 255, 73)' : 'none'
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
                height: 'auto',
                maxHeight: '250px',
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

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        width: '100%',
        flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
        gap: window.innerWidth <= 480 ? '10px' : '0'
      }}>
        <button onClick={onBack}>Back</button>
        <button 
          onClick={() => onNext({ package: selectedPackage })}
          disabled={!selectedPackage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step4 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertyName, setPropertyName] = useState('');

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      maxWidth: window.innerWidth <= 768 ? '90%' : '600px',
      margin: '0 auto',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{
        color: 'black',
        fontSize: window.innerWidth <= 480 ? '24px' : '30px',
        textAlign: 'center'
      }}>Your Kitchen is Almost Ready!</h2>
      <p style={{
        color: 'grey',
        textAlign: 'center',
        marginBottom: '20px'
      }}>Fill in your details to get an estimate:</p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #ddd',
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
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #ddd',
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
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #ddd',
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
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          boxSizing: 'border-box'
        }}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
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

const Step5 = ({ onSubmit }) => {
  return (
    <div className="step-container" style={{
      width: '100%',
      maxWidth: window.innerWidth <= 768 ? '90%' : '600px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }}>
      <h2 style={{
        color: 'black',
        fontSize: window.innerWidth <= 480 ? '24px' : '30px'
      }}>Thank You!</h2>
      <p style={{
        color: 'black',
        marginBottom: '20px'
      }}>Your kitchen design is almost ready. We will get back to you soon.</p>
      <form onSubmit={onSubmit}>
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer'
          }}
        >Finish</button>
      </form>
    </div>
  );
};

export default KitchenForm;
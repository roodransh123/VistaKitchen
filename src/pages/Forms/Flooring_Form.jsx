import React, { useState } from 'react';
import '../../styles/Flooring_Form.css';

const FlooringForm = () => {
  const [formData, setFormData] = useState({
    roomType: '',
    length: 10,
    width: 10,
    flooringType: '',
    name: '',
    email: '',
    phone: '',
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
    alert('Flooring form submitted successfully!');
  };

  return (
    <div>
      {currentStep === 0 && <Step0 onNext={handleNext} />}
      {currentStep === 1 && (
        <Step1 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 2 && (
        <Step2 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 3 && (
        <Step3 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 4 && <Step4 currentData={formData} onSubmit={handleSubmit} onBack={handleBack} />}
    </div>
  );
};

const Step0 = ({ onNext }) => {
  const [roomType, setRoomType] = useState('');

  return (
  <div className="step-container">
      <h2 style={{ color: 'black' }}>Select Room Type</h2>
      <p style={{ color: 'grey' }}>Choose the room where the ceiling will be installed:</p>
      <div className="options">
        {['livingroom', 'bedroom', 'kitchen', 'bathroom'].map((room) => (
          <button
            key={room}
            onClick={() => {
              setRoomType(room);
              onNext({ roomType: room });
            }}
            className={`option-btn ${roomType === room ? 'selected' : ''}`}
          >
            <img src={`/others/${room}.webp`} alt={room} className="option-img" />
            {room}
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
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Enter Room Dimensions</h2>
      <p style={{ color: 'grey' }}>Provide the length and width of the room (in feet):</p>
      <div>
        <label>Length (ft)</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>Width (ft)</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ length, width })} disabled={!length || !width}>
        Next
      </button>
    </div>
  );
};

const Step2 = ({ currentData, onNext, onBack }) => {
  const [flooringType, setFlooringType] = useState(currentData.flooringType || '');

  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Select Flooring Type</h2>
      <p style={{ color: 'grey' }}>Choose your preferred flooring type:</p>
      <div className="card-container">
        {['hardwood', 'laminate', 'vinyl', 'tiles', 'carpet'].map((type) => (
          <div
            key={type}
            className={`card ${flooringType === type ? 'selected' : ''}`}
            onClick={() => setFlooringType(type)}
          >
            <img
              src={`/others/${type}.webp`}
              alt={type}
            />
            <h3>{type}</h3>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({ flooringType })} disabled={!flooringType}>
        Next
      </button>
    </div>
  );
};

const Step3 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Your Flooring Details</h2>
      <p style={{ color: 'grey' }}>Fill in your contact information to receive a quote:</p>
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
      <button onClick={onBack}>Back</button>
      <button
        onClick={() => onNext({ name, email, phone })}
        disabled={!name || !email || !phone}
      >
        Next
      </button>
    </div>
  );
};

const Step4 = ({ currentData, onSubmit, onBack }) => {
  return (
    <div className="step-container">
      <h2 style={{ color: 'black' }}>Thank You!</h2>
      <p style={{ color: 'black' }}>Your flooring request has been submitted. We will get back to you shortly!</p>
      <button onClick={onBack}>Back</button>
      <button onClick={onSubmit}>Finish</button>
    </div>
  );
};

export default FlooringForm;

import React, { useState } from 'react';
import '../../styles/Flooring_Form.css';
import "../../style.css";

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      "entry.669313087": formData.roomType,
      "entry.1607149849": formData.length,
      "entry.1547604735": formData.width,
      "entry.230705502": formData.flooringType,
      "entry.2141720405": formData.name,
      "entry.1992257453": formData.email,
      "entry.1287005256": formData.phone
    };

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecfMxHRpyjtHf2KTv4nNOVFaljdprsFr4_mVUTa7jawaoV0w/formResponse";

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
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ color: 'black' }}>Select Room Type</h2>
      <p style={{ color: 'grey' }}>Choose the room where the ceiling will be installed:</p>
      <div className="options" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '15px'
      }}>
        {['livingroom', 'bedroom', 'kitchen', 'bathroom'].map((room) => (
          <button
            key={room}
            onClick={() => {
              setRoomType(room);
              onNext({ roomType: room });
            }}
            className={`option-btn ${roomType === room ? 'selected' : ''}`}
            style={{ 
              width: window.innerWidth <= 480 ? '100%' : 'calc(50% - 15px)',
              margin: '0',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img 
              src={`/others/${room}.webp`} 
              alt={room} 
              className="option-img" 
              style={{ 
                width: '100%', 
                height: '150px',
                objectFit: 'cover',
                marginBottom: '10px'
              }} 
            />
            {room.charAt(0).toUpperCase() + room.slice(1)}
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
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ color: 'black' }}>Enter Room Dimensions</h2>
      <p style={{ color: 'grey' }}>Provide the length and width of the room (in feet):</p>
      <div style={{
        marginBottom: '15px'
      }}>
        <label>Length (ft)</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '8px',
            marginTop: '5px'
          }}
        />
      </div>
      <div style={{
        marginBottom: '15px'
      }}>
        <label>Width (ft)</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '8px',
            marginTop: '5px'
          }}
        />
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
        <button onClick={() => onNext({ length, width })} disabled={!length || !width}>
          Next
        </button>
      </div>
    </div>
  );
};

const Step2 = ({ currentData, onNext, onBack }) => {
  const [flooringType, setFlooringType] = useState(currentData.flooringType || '');

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ color: 'black' }}>Select Flooring Type</h2>
      <p style={{ color: 'grey' }}>Choose your preferred flooring type:</p>
      <div className="card-container" style={{ 
        display: 'grid',
        gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
        gap: '15px',
        marginTop: '20px'
      }}>
        {['hardwood', 'laminate', 'vinyl', 'tiles', 'carpet'].map((type) => (
          <div
            key={type}
            className={`card ${flooringType === type ? 'selected' : ''}`}
            onClick={() => setFlooringType(type)}
            style={{ 
              border: flooringType === type ? '2px solid blue' : '1px solid #ddd',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <img
              src={`/others/${type}.webp`}
              alt={type}
              style={{ 
                width: '100%', 
                height: '180px',
                objectFit: 'cover'
              }}
            />
            <h3 style={{ 
              textAlign: 'center', 
              color: 'black', 
              fontSize: '18px',
              padding: '10px 0',
              margin: '0'
            }}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
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
        <button onClick={() => onNext({ flooringType })} disabled={!flooringType}>
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ currentData, onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ color: 'black' }}>Your Flooring Details</h2>
      <p style={{ color: 'grey' }}>Fill in your contact information to receive a quote:</p>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '15px',
          padding: '8px'
        }}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '15px',
          padding: '8px'
        }}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          marginBottom: '15px',
          padding: '8px'
        }}
      />
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
        <button
          onClick={() => onNext({ name, email, phone })}
          disabled={!name || !email || !phone}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step4 = ({ currentData, onSubmit, onBack }) => {
  return (
    <div className="step-container" style={{ 
      backgroundColor: 'white',
      width: '100%',
      boxSizing: 'border-box',
      padding: '20px'
    }}>
      <h2 style={{ color: 'black' }}>Thank You!</h2>
      <p style={{ color: 'black' }}>Your flooring request has been submitted. We will get back to you shortly!</p>
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
        <form onSubmit={onSubmit} style={{
          width: window.innerWidth <= 480 ? '100%' : 'auto'
        }}>
          <button type="submit" style={{
            width: window.innerWidth <= 480 ? '100%' : 'auto'
          }}>Finish</button>
        </form>
      </div>
    </div>
  );
};

export default FlooringForm;
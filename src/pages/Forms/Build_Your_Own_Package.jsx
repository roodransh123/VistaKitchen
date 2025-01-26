import React, { useState } from 'react';


const BuildYourOwnPackage = () => {
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

  const materialsData = [
    {
      name: 'HDFHMR',
      description: 'Has high strength and density, and a solid screw-holding capacity.',
      price: '₹₹₹',
      proTip: 'Makes for a good choice as it has load-bearing capacity at a lower cost.',
      imgSrc: 'https://via.placeholder.com/150?text=HDFHMR',
    },
    {
      name: 'MDF',
      description: 'Is seamless, free of knots, and has high resistance for wear & tear.',
      price: '₹₹',
      proTip: 'Ideal for cabinets because of their smooth, seamless surface.',
      imgSrc: 'https://via.placeholder.com/150?text=MDF',
    },
    {
      name: 'MR Plywood',
      description: 'Is moisture and termite resistant and does not wear off easily.',
      price: '₹₹',
      proTip: 'Works well if you’re on a budget and looking for a durable material.',
      imgSrc: 'https://via.placeholder.com/150?text=MR+Plywood',
    },
    {
      name: 'BWP Plywood',
      description: 'Is waterproof and withstands prolonged exposure to water and moisture.',
      price: '₹₹₹',
      proTip: 'Looking for a waterproof material? Then consider this one!',
      imgSrc: 'https://via.placeholder.com/150?text=BWP+Plywood',
    },
  ];
  
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
    alert('Build Your Own Package form submitted successfully!');
  };

  return (
    <div>
      {currentStep === 0 && (
      <Step0 currentData={formData} onNext={handleNext} />
      )}
      {currentStep === 1 && (
      <Step1 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 2 && (
      <Step2
        currentData={formData}
        materialsData={materialsData} // Add this
        onNext={handleNext}
        onBack={handleBack}
      />
      )}
      {currentStep === 3 && (
        <Step3 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 4 && (
        <Step4 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 5 && (
        <Step5 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 6 && (
        <Step6 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 7 && (
        <Step7 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 8 && (
        <Step8 currentData={formData} onNext={handleNext} onBack={handleBack} />
      )}
      {currentStep === 9 && (
        <Step9 onSubmit={handleSubmit} />
      )}
    </div>
  );
};

const Step0 = ({ currentData, onNext }) => {
  const [layout, setLayout] = useState(currentData?.layout || '');
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

const Step1 = ({ currentData, onNext, onBack }) => {
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

const Step2 = ({ currentData, materialsData, onNext, onBack }) => {
  const [selectedMaterial, setSelectedMaterial] = useState(currentData.material || '');
  return (
    <div className="step-container">
      <h2>Materials for Cabinets and Shutters</h2>
      <p>Take your pick.</p>
        <div className="material-cards">
        {materialsData.map((material) => (
          <div
            key={material.name}
            className={`card ${selectedMaterial === material.name ? 'selected' : ''}`}
            onClick={() => setSelectedMaterial(material.name)}
          >
            <img src={material.imgSrc} alt={material.name} />
            <h3>{material.name}</h3>
            <p>{material.description}</p>
            <p><strong>Price:</strong> {material.price}</p>
            <p><strong>Pro Tip:</strong> {material.proTip}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ material: selectedMaterial })}
          disabled={!selectedMaterial}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step3 = ({ currentData, onNext, onBack }) => {
  const [countertopChoice, setCountertopChoice] = useState(currentData.countertop || '');

  return (
    <div className="step-container">
      <h2>Would you like to add a granite countertop?</h2>
      <p>Choose your preference:</p>
      <div className="options">
        <button
          onClick={() => setCountertopChoice('Yes')}
          className={`option-btn ${countertopChoice === 'Yes' ? 'selected' : ''}`}
        >
          Yes
        </button>
        <button
          onClick={() => setCountertopChoice('No')}
          className={`option-btn ${countertopChoice === 'No' ? 'selected' : ''}`}
        >
          No
        </button>
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ countertop: countertopChoice })}
          disabled={!countertopChoice}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Step4 = ({ currentData, onNext, onBack }) => {
  const [loftChoice, setLoftChoice] = useState(currentData.loft || '');

  return (
    <div className="step-container">
      <h2>Do you want to add a loft?</h2>
      <p>Choose your preference:</p>
      <div className="options">
        <button
          onClick={() => setLoftChoice('Yes')}
          className={`option-btn ${loftChoice === 'Yes' ? 'selected' : ''}`}
        >
          Yes
        </button>
        <button
          onClick={() => setLoftChoice('No')}
          className={`option-btn ${loftChoice === 'No' ? 'selected' : ''}`}
        >
          No
        </button>
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ loft: loftChoice })}
          disabled={!loftChoice}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step5 = ({ currentData, onNext, onBack }) => {
  const finishes = [
    {
      name: 'Matte Laminate',
      description: 'Is a smooth, durable finish which gives a clean and rich look.',
      price: '₹₹',
      proTip: 'Going for that muted, smooth look for your kitchen? This one’s for you.',
    },
    {
      name: 'HGL Laminate',
      description: 'Is glossy with solid colours that uplifts a space with its shiny finish.',
      price: '₹₹',
      proTip: 'Always wanted magazine-like glossy kitchen cabinets? Choose this!',
    },
    {
      name: 'Matte Membrane',
      description: 'Comes with a smooth surface and has better grooving ability.',
      price: '₹₹₹',
      proTip: 'Go for this if you want a seamless finish that sits well in any kind of kitchen.',
    },
    {
      name: 'HGL Membrane',
      description: 'Has a lustrous surface that enhances your modular kitchen.',
      price: '₹₹₹',
      proTip: 'Want those strong, shiny cabinets with a pop of colour? Consider this!',
    },
    {
      name: 'Anti-scratch Acrylic',
      description: 'Is an elegant, reflective, glossy finish that is scratch resistant.',
      price: '₹₹₹',
      proTip: 'Dreaming of a chic kitchen with a touch of luxury? Go for this one.',
    },
    {
      name: 'Glossy PU',
      description: 'Comes with a slick look, high durability, and a polished finish.',
      price: '₹₹₹',
      proTip: 'Consider this if you want mirror-like cabinets that are easy to clean!',
    },
  ];

  const [selectedFinish, setSelectedFinish] = useState(currentData.finish || '');

  return (
    <div className="step-container">
      <h2>Pick a Finish for Base & Wall Cabinets</h2>
      <p>Select a finish that suits your kitchen style:</p>
      <div className="finish-cards">
        {finishes.map((finish) => (
          <div
            key={finish.name}
            className={`card ${selectedFinish === finish.name ? 'selected' : ''}`}
            onClick={() => setSelectedFinish(finish.name)}
          >
            <h3>{finish.name}</h3>
            <p>{finish.description}</p>
            <p><strong>Price:</strong> {finish.price}</p>
            <p><strong>Pro Tip:</strong> {finish.proTip}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ finish: selectedFinish })}
          disabled={!selectedFinish}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step6 = ({ currentData, onNext, onBack }) => {
  const accessories = [
    {
      name: "Basic",
      description: "A basic range of accessories usually required to get your ideal kitchen started.",
      price: "₹₹",
      proTip: "Consider this if you need basic units within a budget for a comfortable cooking experience.",
    },
    {
      name: "Intermediate",
      description: "A fine range of fittings, cabinets, and more for a smooth culinary experience.",
      price: "₹₹₹",
      proTip: "Pick this if you experiment with cooking and need more units to ease your time in the kitchen.",
    },
    {
      name: "Premium",
      description: "A showstopper kitchen with an exclusive range you were always looking for.",
      price: "₹₹₹₹",
      proTip: "If you're a passionate cook who needs an exclusive range of accessories, this one's for you.",
    },
  ];

  const [selectedAccessory, setSelectedAccessory] = useState(currentData.accessory || '');

  return (
    <div className="step-container">
      <h2>Now choose the accessories for your kitchen</h2>
      <p>Pick an accessory package that matches your needs:</p>
      <div className="accessory-cards">
        {accessories.map((accessory) => (
          <div
            key={accessory.name}
            className={`card ${selectedAccessory === accessory.name ? 'selected' : ''}`}
            onClick={() => setSelectedAccessory(accessory.name)}
          >
            <h3>{accessory.name}</h3>
            <p>{accessory.description}</p>
            <p><strong>Price:</strong> {accessory.price}</p>
            <p><strong>Pro Tip:</strong> {accessory.proTip}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ accessory: selectedAccessory })}
          disabled={!selectedAccessory}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Step7 = ({ currentData, onNext, onBack }) => {
  const services = [
    {
      name: "Painting",
      imgSrc: "path/to/painting-image.jpg", // Replace with actual image path
      description: "Professional painting for your kitchen walls and ceiling.",
    },
    {
      name: "Plumbing",
      imgSrc: "path/to/plumbing-image.jpg",
      description: "Efficient plumbing solutions to ensure proper water flow.",
    },
    {
      name: "Electrical",
      imgSrc: "path/to/electrical-image.jpg",
      description: "Expert electrical services for lighting and appliances.",
    },
    {
      name: "Platform",
      imgSrc: "path/to/platform-image.jpg",
      description: "Customizable platform design to match your kitchen layout.",
    },
    {
      name: "Dado",
      imgSrc: "path/to/dado-image.jpg",
      description: "Decorative dado work for a stylish and functional backsplash.",
    },
  ];

  const [selectedServices, setSelectedServices] = useState(currentData.services || []);

  const toggleService = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((service) => service !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  return (
    <div className="step-container">
      <h2>Select the on-site services you would require</h2>
      <p>Want to know more? Check here.</p>
      <div className="service-cards">
        {services.map((service) => (
          <div
            key={service.name}
            className={`card ${selectedServices.includes(service.name) ? "selected" : ""}`}
            onClick={() => toggleService(service.name)}
          >
            <img src={service.imgSrc} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ services: selectedServices })}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Step8 = ({ currentData, onNext, onBack }) => {
  const appliances = [
    {
      name: "Hob",
      imgSrc: "path/to/hob-image.jpg", // Replace with actual image path
      description: "Modern hobs for a seamless cooking experience.",
    },
    {
      name: "Chimney",
      imgSrc: "path/to/chimney-image.jpg",
      description: "Efficient chimneys to keep your kitchen smoke-free.",
    },
    {
      name: "Faucets & Sink",
      imgSrc: "path/to/faucets-sink-image.jpg",
      description: "Premium faucets and sinks for your modular kitchen.",
    },
    {
      name: "Built-in Microwave",
      imgSrc: "path/to/microwave-image.jpg",
      description: "Compact built-in microwaves for quick meal prep.",
    },
    {
      name: "Built-in Oven",
      imgSrc: "path/to/oven-image.jpg",
      description: "Stylish ovens for baking and grilling needs.",
    },
    {
      name: "Refrigerator",
      imgSrc: "path/to/refrigerator-image.jpg",
      description: "Spacious and energy-efficient refrigerators.",
    },
  ];

  const [selectedAppliances, setSelectedAppliances] = useState(currentData.appliances || []);

  const toggleAppliance = (applianceName) => {
    if (selectedAppliances.includes(applianceName)) {
      setSelectedAppliances(selectedAppliances.filter((appliance) => appliance !== applianceName));
    } else {
      setSelectedAppliances([...selectedAppliances, applianceName]);
    }
  };

  return (
    <div className="step-container">
      <h2>Here come the appliances. Your pick?</h2>
      <div className="appliance-cards">
        {appliances.map((appliance) => (
          <div
            key={appliance.name}
            className={`card ${selectedAppliances.includes(appliance.name) ? "selected" : ""}`}
            onClick={() => toggleAppliance(appliance.name)}
          >
            <img src={appliance.imgSrc} alt={appliance.name} />
            <h3>{appliance.name}</h3>
            <p>{appliance.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={onBack}>Back</button>
        <button
          onClick={() => onNext({ appliances: selectedAppliances })}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

const Step9 = ({ onSubmit }) => {
  return (
    <div className="step-container">
      <h2>Thank You!</h2>
      <p>Your kitchen design is almost ready. We will get back to you soon.</p>
      <button onClick={onSubmit}>Finish</button>
    </div>
  );
};

export default BuildYourOwnPackage;

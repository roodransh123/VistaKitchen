import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wardrobe from './pages/Wardrobes';
import Floorings from './pages/Floorings';
import WardrobeForm from './pages/Forms/Wardrobe_Form';
import VanitiesForm from './pages/Forms/Vanity_Form';
import KitchenForm from './pages/Forms/Kitchen_Form';
import FlooringForm from './pages/Forms/Flooring_Form';
import CeilingForm from './pages/Forms/Ceiling_Form';
import Ceilings from './pages/Ceilings';
import Contact from './pages/Contact';
import BuildYourOwnPackage from './pages/Forms/Build_Your_Own_Package';
import Vanities from './pages/Vanity';
import Kitchen from './pages/Kitchen';
import ClosetsForm from './pages/Forms/Closets-Form';
import DressingUnitsForm from './pages/Forms/Dressing-Units-Form';
import LEDPanelsForm from './pages/Forms/LED_Panels_Form';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/wardrobes" element={<Wardrobe />} />
          <Route path="/vanities" element={<Vanities />} />
          <Route path="/ceilings" element={<Ceilings />} />
          <Route path="/floorings" element={<Floorings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wardrobe-form" element={<WardrobeForm />} />
          <Route path="/kitchen-form" element={<KitchenForm />} />
          <Route path="/vanities-form" element={<VanitiesForm />} />
          <Route path="/flooring-form" element={<FlooringForm />} />
          <Route path="/ceiling-form" element={<CeilingForm />} />
          <Route path="/Build-Your-Own-Package" element={<BuildYourOwnPackage />} />
          <Route path="/closets-form" element={<ClosetsForm />} />
          <Route path="/dressing-units-form" element={<DressingUnitsForm />} />
          <Route path="/LED-panels-form" element={<LEDPanelsForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


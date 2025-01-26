import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wardrobe from './pages/Wardrobes';
import WardrobeForm from './pages/Forms/Wardrobe_Form';
import VanitiesForm from './pages/Forms/Vanity_Form';
import KitchenForm from './pages/Forms/Kitchen_Form';
import FlooringForm from './pages/Forms/Flooring_Form';
import CeilingForm from './pages/Forms/Ceiling_Form';
import BuildYourOwnPackage from './pages/Forms/Build_Your_Own_Package';
import Vanities from './pages/Vanity';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobes" element={<Wardrobe />} />
          <Route path="/vanities" element={<Vanities />} />
          <Route path="/wardrobe-form" element={<WardrobeForm />} />
          <Route path="/kitchen-form" element={<KitchenForm />} />
          <Route path="/vanities-form" element={<VanitiesForm />} />
          <Route path="/flooring-form" element={<FlooringForm />} />
          <Route path="/ceiling-form" element={<CeilingForm />} />
          <Route path="/Build-Your-Own-Package" element={<BuildYourOwnPackage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


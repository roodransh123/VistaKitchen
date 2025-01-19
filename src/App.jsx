import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wardrobe from './pages/Wardrobes';
import WardrobeForm from './pages/Forms/Wardrobe_Form';
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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


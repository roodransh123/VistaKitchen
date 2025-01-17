import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WardrobeForm from './pages/Forms/Wardrobe_Form';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe-form" element={<WardrobeForm />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


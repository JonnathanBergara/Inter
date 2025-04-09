import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Soluciones from './pages/Soluciones';
import ServicesBrands from './pages/ServicesBrands';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/soluciones" element={<Soluciones />} />
      <Route path="/services-brands" element={<ServicesBrands />} />
    </Routes>
  );
}

export default App;
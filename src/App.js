import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio.jsx'
import Navbar from './components/common/Navbar.jsx';
import { Portfolio } from './pages/Portfolio.jsx';
import { Footer } from './components/common/Footer.jsx';
import Nosotros  from './pages/Nosotros.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;

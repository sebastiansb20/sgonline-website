import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio.jsx'
import Navbar from './components/common/Navbar.jsx';
import { Portfolio } from './pages/Portfolio.jsx';
import { Footer } from './components/common/Footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

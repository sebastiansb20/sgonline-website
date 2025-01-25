import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Skills } from './components/Skills';
import Works from './components/Works';
  
function App() {
  return (
    <div className=''>
      
      <div className='top-0'>
        <Navbar />
      </div>
      <div className='hero'>
        <Hero className=''/>  
      </div>
      <div className='skills'>
        <Skills />
      </div>
      <div className='proyectos'>
        <Works />
      </div>
    </div>
  );
}

export default App;

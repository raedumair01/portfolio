import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header /> {/* This component will stay at the top on every route */}
      <Routes>
        {/* Define routes for each path */}
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />

        
      </Routes>
    </Router>
  );
}

export default App;

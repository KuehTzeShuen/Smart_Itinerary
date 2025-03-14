import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Preferences from './Preferences.jsx'; // Corrected import path
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
};

const LandingPage = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">Trippin</div>
        <div className="nav">
          <a href="/preferences">Plan my trip</a>
          <a href="#">Chat</a>
        </div>
        <a href="#" className="sign-in-btn">Sign In</a>
      </div>

      <div className="main-content">
        <h1>Craft Unforgettable Itineraries with <span style={{ color: '#FF99A0' }}>AI Trip Planner</span></h1>
        <p>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        <a href="/preferences" className="cta-btn">Get started—it's free</a>
      </div>
    </div>
  );
};

export default App;

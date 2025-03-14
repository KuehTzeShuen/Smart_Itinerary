import React from 'react';
import './Preferences.css';

const Preferences = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">Trippin</div>
        <div className="nav">
          <a href="/">Plan my trip</a>
          <a href="#">Chat</a>
        </div>
        <a href="#" className="sign-in-btn">Sign In</a>
      </div>

      <div className="main-content">
        <h1>Tell us your travel preferences</h1>
        <p>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>

        <div className="form-container">
          <form action="#">
            <div className="form-section">
              <label htmlFor="destination">What is your destination of choice?</label>
              <select name="destination" id="destination">
                <option value="new-york">New York</option>
                <option value="paris">Paris</option>
                <option value="tokyo">Tokyo</option>
                <option value="london">London</option>
              </select>
            </div>
            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="travel-date">When are you planning to travel?</label>
              <input type="date" id="travel-date" name="travel-date" className="date-picker" />
            </div>
            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="days">How many days are you planning to travel?</label>
              <input type="number" id="days" name="days" min="1" defaultValue="3" />
            </div>
            <div className="separator"></div>

            <div className="form-section">
              <label>What is Your Budget?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="low">Low (0 - 1000 USD)</button>
                <button type="button" className="btn-option" data-value="medium">Medium (1000 - 2500 USD)</button>
                <button type="button" className="btn-option" data-value="high">High (2500+ USD)</button>
              </div>
            </div>
            <div className="separator"></div>

            <div className="form-section">
              <label>Who do you plan on traveling with on your next adventure?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="solo">Solo</button>
                <button type="button" className="btn-option" data-value="couple">Couple</button>
                <button type="button" className="btn-option" data-value="family">Family</button>
                <button type="button" className="btn-option" data-value="friends">Friends</button>
              </div>
            </div>
            <div className="separator"></div>

            <div className="form-section">
              <label>Which activities are you interested in?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="beaches">Beaches</button>
                <button type="button" className="btn-option" data-value="city-sightseeing">City Sightseeing</button>
                <button type="button" className="btn-option" data-value="outdoor-adventures">Outdoor Adventures</button>
                <button type="button" className="btn-option" data-value="festivals">Festivals/Events</button>
                <button type="button" className="btn-option" data-value="food-exploration">Food Exploration</button>
                <button type="button" className="btn-option" data-value="nightlife">Nightlife</button>
                <button type="button" className="btn-option" data-value="shopping">Shopping</button>
                <button type="button" className="btn-option" data-value="spa-wellness">Spa Wellness</button>
              </div>
            </div>
            <div className="separator"></div>

            <div className="form-section">
              <label>Would you like to have these options?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="halal">Halal</button>
                <button type="button" className="btn-option" data-value="vegetarian">Vegetarian</button>
              </div>
            </div>
            <div className="separator"></div>

            <div>
              <button type="submit" className="cta-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
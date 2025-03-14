import React from 'react';
import './details.css'; // Optional: If you want to split out CSS

function Details() {
  return (
    <div className="details-wrapper">
      {/* Trip Heading Section */}
      <div className="trip-heading">
        <h1>3 Days Trip in Placeholder City, Placeholder Country</h1>
        <p className="date-range">1 Jan 2023 - 3 Jan 2023</p>
      </div>

      {/* Overview / General Information Section */}
      <div className="overview-section">
        <h2>Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          accumsan, ipsum et scelerisque finibus, massa ligula congue purus,
          eu fermentum nulla magna quis sapien.
        </p>
      </div>

      {/* Lodging Recommendation Section */}
      <div className="lodging-section">
        <h2>Lodging Recommendation</h2>
        <div className="lodging-cards">
          <div className="lodging-card">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Placeholder Lodging 1"
            />
            <h3>Placeholder Hotel 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="lodging-card">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Placeholder Lodging 2"
            />
            <h3>Placeholder Hotel 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="lodging-card">
            <img
              src="https://via.placeholder.com/200x150"
              alt="Placeholder Lodging 3"
            />
            <h3>Placeholder Hotel 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Day-by-Day Section */}
      <div className="day-by-day-section">
        <h2>Day 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          venenatis diam velit, vel ultricies sem lacinia in.
        </p>
        <button className="add-place-btn">+ Add a place to stay</button>

        <h2>Day 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
          ultrices libero, quis iaculis massa. Sed sollicitudin dui sed
          tellus tristique imperdiet.
        </p>
        <button className="add-place-btn">+ Add a place to stay</button>

        <h2>Day 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          finibus ligula et velit pretium, quis viverra justo euismod.
        </p>
        <button className="add-place-btn">+ Add a place to stay</button>
      </div>

      {/* Estimated Cost Section */}
      <div className="estimated-cost-section">
        <h2>Estimated Cost (USD)</h2>
        <div className="cost-category">
          <h3>Accommodation</h3>
          <p>Lorem ipsum: 15 - 50 (Low, Medium, High tiers)</p>
        </div>
        <div className="cost-category">
          <h3>Transportation</h3>
          <p>Lorem ipsum: 2 - 15 (Local transit, ride-shares, etc.)</p>
        </div>
        <div className="cost-category">
          <h3>Food</h3>
          <p>Lorem ipsum: 2 - 15 (Street food, mid-range restaurants, etc.)</p>
        </div>
        <div className="cost-category">
          <h3>Activities</h3>
          <p>Lorem ipsum: 10 - 50 (Tours, attractions, nightlife, etc.)</p>
        </div>
      </div>

      {/* "Pretend" Form Container */}
      <div className="form-wrapper">
        <h2>Plan Your Next Adventure</h2>
        {/* We pretend these inputs are imported from elsewhere */}
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
              {/* date input replaced with text input for a date picker plugin */}
              <input
                type="text"
                id="travel-date"
                className="date-picker"
                placeholder="Select Date.."
                readOnly
              />
            </div>

            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="days">How many days are you planning to travel?</label>
              <input type="number" id="days" name="days" min="1" value="20" />
            </div>

            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="budget">What is Your Budget?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="low">
                  Low <br />
                  <span className="sub-text">0 - 1000 USD</span>
                </button>
                <button type="button" className="btn-option" data-value="medium">
                  Medium <br />
                  <span className="sub-text">1000 - 2500 USD</span>
                </button>
                <button type="button" className="btn-option" data-value="high">
                  High <br />
                  <span className="sub-text">2500+ USD</span>
                </button>
              </div>
            </div>

            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="travel-with">
                Who do you plan on traveling with on your next adventure?
              </label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="solo">
                  🚶 Solo
                </button>
                <button type="button" className="btn-option" data-value="couple">
                  👫 Couple
                </button>
                <button type="button" className="btn-option" data-value="family">
                  👪🏻 Family
                </button>
                <button type="button" className="btn-option" data-value="friends">
                  🧑‍🤝‍🧑 Friends
                </button>
              </div>
            </div>

            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="activities">Which activities are you interested in?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="beaches">
                  Beaches
                </button>
                <button type="button" className="btn-option" data-value="city-sightseeing">
                  City Sightseeing
                </button>
                <button type="button" className="btn-option" data-value="outdoor-adventures">
                  Outdoor Adventures
                </button>
                <button type="button" className="btn-option" data-value="festivals">
                  Festivals/Events
                </button>
                <button type="button" className="btn-option" data-value="food-exploration">
                  Food Exploration
                </button>
                <button type="button" className="btn-option" data-value="nightlife">
                  Nightlife
                </button>
                <button type="button" className="btn-option" data-value="shopping">
                  Shopping
                </button>
                <button type="button" className="btn-option" data-value="spa-wellness">
                  Spa Wellness
                </button>
              </div>
            </div>

            <div className="separator"></div>

            <div className="form-section">
              <label htmlFor="food-options">Would you like to have these options?</label>
              <div className="option-group">
                <button type="button" className="btn-option" data-value="halal">
                  Halal
                </button>
                <button type="button" className="btn-option" data-value="vegetarian">
                  Vegetarian
                </button>
              </div>
            </div>

            <div className="separator"></div>

            <div className="form-section">
              <button type="submit" className="cta-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Details;

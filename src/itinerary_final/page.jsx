import React from 'react';
import Details from './components/details';
import Map from './components/map';
import './page.css';

function Page() {
  return (
    <div className="page-container">
      <div className="details-container">
        <Details />
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}

export default Page;

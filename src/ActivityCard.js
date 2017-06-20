import React, { Component } from 'react';

function SearchForm(props) {
  return (
    <div className="listing">
      <h2 className="list-title">"Title": "Seattle CityPASS: 5 Must-See Museums & Attractions"</h2>
      <p className="list-distance">20 ft</p>
      <div className="list-categories">
        <span className="list-cat-item">"categories": ["Attractions",</span>
        <span className="list-cat-item">"Sightseeing Passes"</span>
      </div>
    </div>
  );
}

export default SearchForm;

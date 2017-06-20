import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './SearchForm';
import ActivityCard from './ActivityCard';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
  }

  handleSearchChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSearchSubmit(event) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });

    $.ajax({
      url: "http://localhost:8081/v1/activity/searchV2?geocode=178307&&startDate=2017-06-19&endDate=2017-06-27&idsOnly=false&returnGT=false",
      type: "GET",
      headers: {merchantId: 162443, locale: 'en-US'},
    })
      .then((success) => {
        console.log('success', success)
    })
      .catch((error) => console.log ('error', error));
    event.preventDefault();
  }

  render() {
    const searchValue = this.state.searchValue;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <SearchForm
          searchValue={searchValue}
          onSearchSubmit={(event) => this.handleSearchSubmit(event)}
          onSearchChange={(event) => this.handleSearchChange(event)}
        />
        <div class="listing">
          <h2 class="list-title">Title</h2>
          <h3 class="list-distance">miles</h3>
        <ActivityCard />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


export default App;

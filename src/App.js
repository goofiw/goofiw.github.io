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
        <h2 className="section-header">Within 100 feet</h2>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />

        <h2 className="section-header">Within 1,000 feet</h2>
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />

      </div>
    );
  }
}


export default App;

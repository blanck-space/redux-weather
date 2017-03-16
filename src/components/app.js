import React, { Component } from 'react';
import SearchBar from '../containers/search-bar.js';
import Table from '../containers/weather-table.js';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="headerText">
        <h1>Weather Data &#39;murrica</h1>
        <p>A web app to get a glance at the average temperature over the next 5 days of any American city.
          It's actually not really meant to be useful in any way except to be an example for the things that
          are acheivable using ReactJS and Redux!
        </p>
      </div>
      <SearchBar />
      <Table />
      </div>
    );
  }
}

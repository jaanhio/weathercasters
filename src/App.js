import React, { Component } from 'react';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import Footer from './components/footer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <h1>5-day Weather Forecast</h1>
          <SearchBar className="searchBar"/>
          <WeatherList />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

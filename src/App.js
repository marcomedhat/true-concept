import React, { Component } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Help from './components/help/Help';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hero></Hero>
        <Help></Help>
      </div>
    );
  }

}

export default App;

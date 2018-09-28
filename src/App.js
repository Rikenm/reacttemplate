import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navigation from "./containers/navigation"

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
         
          <Navigation/>
      </Router>
    );
  }
}

export default App;

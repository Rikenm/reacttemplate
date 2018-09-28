import React, { Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navigation from "./containers/navigation"
import NavBar from "./containers/navbar"

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Navigation/>

          </div>
      </Router>
    );
  }
}

export default App;

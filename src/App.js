import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import List from './components/List';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={List}/>
          <Route path="/details" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;

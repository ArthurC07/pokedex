import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <List/>
    );
  }
}

export default App;

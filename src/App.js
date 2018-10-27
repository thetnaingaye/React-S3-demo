import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>Naing React App</p>
        </header>

        <Form></Form>
      </div>
    );
  }
}

export default App;

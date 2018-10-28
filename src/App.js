import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Welcome from './Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Quote from './Quote';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/form" component={Form} exact/>
            <Route path="/Quotes" component={Quote} exact/>
            <Route path="/" component={Welcome} exact/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

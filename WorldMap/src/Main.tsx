import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
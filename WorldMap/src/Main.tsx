import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

class App extends Component {
  public render() {
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

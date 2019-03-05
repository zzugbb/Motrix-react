import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;

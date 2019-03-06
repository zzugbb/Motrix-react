import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from "./pages/Home";
import Setting from "./pages/Setting"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/setting" component={Setting}/>
        </Switch>
      </div>
    );
  }
}

export default App;

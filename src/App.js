import {Component} from 'react';

import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Login from "./components/Login"

import './App.css';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login}/>
    </Switch>
   </BrowserRouter>
  );
}
}

export default App;

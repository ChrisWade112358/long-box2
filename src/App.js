import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import UserForm from './Component/Auth/Registration';
import LoginForm from './Component/Auth/Login';
import searchComics from './Component/Search/SearchComics'


export default class App extends Component {
  render(){
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={"/registration"} component={UserForm} />
            <Route exact path={"/login"} component={LoginForm} />
            <Route exact path={"/search"} component={searchComics} />
          </Switch>
        </Router>
      </div>
    )
  }
}
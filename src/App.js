import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import UserForm from './Component/Auth/Registration';
import LoginForm from './Component/Auth/Login';
import searchComics from './Container/SearchComics'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'
import About from './Component/About'




export default class App extends Component {
  render(){
    return(
      <div className="App">
        
        <Router>
        <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/registration"} component={UserForm} />
            <Route exact path={"/login"} component={LoginForm} />
            <Route exact path={"/search"} component={searchComics} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
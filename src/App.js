import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './Style/App.css';
import Registration from './Component/Auth/Registration';
import LoginForm from './Component/Auth/Login';
import searchComics from './Container/SearchComics'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'
import About from './Component/About'




export default class App extends Component {
  constructor (){
    super();
    this.state = {
      loggedInStatus: "Not logged in.",
      user: {}
    }
  }
  render(){
    return(
      <div className="App">
        
        <Router>
        <Navbar />
          <Switch>
            <Route exact path={"/"} 
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )} 
            />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/registration"} 
              render={props => (
                <Registration {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route exact path={"/login"} component={LoginForm} />
            <Route exact path={"/search"} component={searchComics} />
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style/navbar.css'

export default class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <nav className="navbar-nav">
                    <Link to='/' id="home">Home</Link>
                    <Link to='/about' id="about">About</Link>
                    <Link to='/registration' id="registration">Register</Link>
                    <Link to='/login' id="login">Login</Link>
                </nav>
            </div>
        )
    }
}
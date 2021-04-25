import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userLogin} from '../../Redux/Actions/Users';
import '../../Style/Login.css';

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.email !== "" && this.state.password !== ""){
            this.props.userLogin(this.state)
        }
        else{
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        }
    }

    render(){
        return (
            <div className="wrapper">
                <div className="login-form-wrapper">
                    <form className="login-form" onSubmit={this.handleSubmit} >
                        <h1>Login</h1>
                        <label id="email-label">email:</label>
                        <input
                            id="logIn-form-email" 
                            type="text" 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange}  
                            placeholder="email" /><br/> 
                        <label id="password-label">password:</label>
                        <input 
                            id="logIn-form-password"
                            type="password" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange}  
                            placeholder="password" />      
                        <button type="submit" className="btn-default" id="btn-logIn-form">LogIn</button>
                        <small id="logIn-form-small">Register new user</small>
                    </form>
                </div>
            </div>    
        )
    }

}

export default connect(null, {userLogin})(LoginForm)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddUser } from '../../Redux/Actions/Users';
import '../../Style/Registration.css';


const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;



const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    //Validate form errors are empty
    Object.values(formErrors).forEach(val => {val.length > 0 && (valid = false)}); // the () around "valid = false" changes value of valid to "false" if val.length > 0 and valid still equals "true"

    //validate the form was filled out
    Object.values(rest).forEach(value => {
        value === "" && (valid = false)
    })

    return valid;
}

class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        }


        
    }

    handleChange = event => {
        const { name, value } =  event.target;
        let formErrors = {...this.state.formErrors}
        
        switch (name) {
            case "firstName":
                    formErrors.firstName = value.length < 2 
                    ? "minimum 2 Characters required"
                    : "";
                break;
            case "lastName":
                    formErrors.lastName = value.length < 2 
                    ? "minimum 2 characters required"
                    : "";
                break;
            case "email":
                    formErrors.email =
                    emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "address":
                    formErrors.address = value.length < 6 
                    ? "minimum 6 characters required"
                    : "";
                break;
            case "city":
                    formErrors.city = value.length < 3 
                    ? "minimum 3 characters required"
                    : "";
                break;
            case "state":
                    formErrors.state = value.length !== 2 
                    ? "minimum 2 characters required"
                    : "";
                break;
            case "zip":
                    formErrors.zip =
                    zipRegex.test(value) && value.length !== 6
                    ? ""
                    : "Zip codes contain 5 positive integers";
                break;
            case "password":
                    formErrors.password = value.length < 8 
                    ? "minimum 8 characters required"
                    : "";
                break;
            case "confirmPassword":
                    formErrors.confirmPassword = this.state.password !== value
                    ? "Confirm Password and Password must match"
                    : "";
                break;
            default:
                break;
        }

        this.setState({formErrors, [name]: value })
        
    };

    handleOnSubmit = event => {
        
        event.preventDefault();
        const user = {
            firstname: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            password: this.state.password
        };
        if(formValid(this.state)){
            this.props.AddUser(user);
            
            
        }
        else{
            console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
        };
        
        
        
        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: {
                firstName: "",
                lastName: "",
                address: '',
                city: '',
                state: '',
                zip: '',
                email: '',
                password: '',
                confirmPassword: '',
            } 
        });
        
    };

    render(){
        const { formErrors } = this.state;
        return(
            <div className="wrapper">
                <div className="user-form-wrapper">
                    <form className="user-form" onSubmit={this.handleOnSubmit}>
                        <div className="firstName">
                            <label id="first-name-label">First Name:</label>
                            <input 
                                className={formErrors.firstName.length > 0 ? "error" : null}
                                id="first-name-input" 
                                type="text"  
                                name="firstName" 
                                value={this.state.firstName} 
                                onChange={this.handleChange} 
                                placeholder="First Name" 
                                formNoValidate /> 
                            {formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}
                            <br/>
                        </div>
                        <div className="lastName">
                            <label id="last-name-label">Last Name:</label>
                            <input
                                className={formErrors.lastName.length > 0 ? "error" : null} 
                                id="last-name-input" 
                                type="text" 
                                name="lastName" 
                                value={this.state.lastName} 
                                onChange={this.handleChange} 
                                placeholder="Last Name" 
                                formNoValidate />
                            {formErrors.lastName.length > 0 && (
                                    <span className="errorMessage">{formErrors.lastName}</span>
                                )}
                            <br/>
                        </div>
                        <div className="email">
                            <label id="email-label">Email:</label>
                            <input
                                className={formErrors.email.length > 0 ? "error" : null}
                                id="email-input" 
                                type="email" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChange} 
                                placeholder="email@email.com" 
                                formNoValidate />
                            {formErrors.email.length > 0 && (
                                    <span className="errorMessage">{formErrors.email}</span>
                                )}
                            <br/>
                        </div>
                        <div className="address">
                            <label id="address-label">Address:</label>
                            <input 
                                className={formErrors.address.length > 0 ? "error" : null}
                                id="address-input" 
                                type="text" 
                                name="address" 
                                value={this.state.address} 
                                onChange={this.handleChange} 
                                placeholder="Address" 
                                formNoValidate />
                            {formErrors.address.length > 0 && (
                                    <span className="errorMessage">{formErrors.address}</span>
                                )}
                            <br/>
                        </div>
                        <div className="city">
                            <label id="city-label">City:</label>
                            <input
                                className={formErrors.city.length > 0 ? "error" : null} 
                                id="city-input" 
                                type="text" 
                                name="city" 
                                placeholder="city"
                                value={this.state.city} 
                                onChange={this.handleChange} 
                                formNoValidate />
                            {formErrors.city.length > 0 && (
                                    <span className="errorMessage">{formErrors.city}</span>
                                )}
                            <br/>
                        </div>
                        <div className="state">
                            <label id="state-label">State:</label>
                            <input 
                                className={formErrors.state.length > 0 ? "error" : null}
                                id="state-input" 
                                type="text" 
                                name="state" 
                                value={this.state.state} 
                                onChange={this.handleChange} 
                                formNoValidate />
                            {formErrors.state.length > 0 && (
                                    <span className="errorMessage">{formErrors.state}</span>
                                )}
                            <br/>
                        </div>
                        <div className="zip">
                            <label id="zip-label">Zip Code:</label>
                            <input 
                                className={formErrors.zip.length > 0 ? "error" : null}
                                id="zip-input" 
                                type="text" 
                                name="zip" 
                                value={this.state.zip} 
                                onChange={this.handleChange}
                                placeholder="Zip" 
                                formNoValidate />
                            {formErrors.zip.length > 0 && (
                                    <span className="errorMessage">{formErrors.zip}</span>
                                )}
                            <br/>
                        </div>
                        <div className="password">
                            <label id="password-label">Password:</label>
                            <input
                                className={formErrors.password.length > 0 ? "error" : null} 
                                id="password-input" 
                                type="password" 
                                name="password" 
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                placeholder="Password" 
                                formNoValidate />
                            {formErrors.password.length > 0 && (
                                    <span className="errorMessage">{formErrors.password}</span>
                                )}
                            <br/>
                        </div>
                        <div className="confirmPassword">
                            <label id="verify-password-label">Confirm Password:</label>
                            <input
                                className={formErrors.confirmPassword.length > 0 ? "error" : null} 
                                id="verify-password-input" 
                                type="password" 
                                name="confirmPassword" 
                                value={this.state.confirmPassword} 
                                onChange={this.handleChange} 
                                placeholder="Confirm Password" 
                                formNoValidate />
                            {formErrors.confirmPassword.length > 0 && (
                                    <span className="errorMessage">{formErrors.confirmPassword}</span>
                                )}
                            <br/>
                        </div>
                        <div className="userFormSubmit">
                            <button 
                                type="submit"  
                                className="btn-default" 
                                id="btn-user-form">
                                    Add User
                                </button>
                                <br/>
                            <small id="userFormSmall">Already have an account?</small>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};




export default connect(null, { AddUser })(Registration)
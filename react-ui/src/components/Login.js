import React, { Component } from "react";
import SimpleReactValidator from 'simple-react-validator';
import EmployeeService from "../service/EmployeeService";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            email: "",
            password: "",
        };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = ({ target }) => {
      this.setState({ 
          [target.name]: target.value });
  }

  onSubmit(event) {
      event.preventDefault();
      if( this.validator.allValid() && this.state.email === "andrew.reyes@ibm.com" && this.state.password === "password" ){
          EmployeeService.authenticated = true;
          this.props.history.push('/employees');
      } else {
          this.validator.showMessages();
          this.forceUpdate();
          alert('Login Failed!');
      }
  }

  render() {
      let { email, password} = this.state
      return (
          <div className="container">
              <div className="Login">
                  <form>
                      <label>Email</label>
                          <input
                              autoFocus={true}
                              type="email" 
                              name="email" 
                              value={email}
                              onChange ={this.handleChange}
                          />
                          <div className = "valid">{this.validator.message('email', this.state.email, 'required|email|min:8|max:35')}</div>
                      <label>Password</label>
                          <input
                              autoFocus={true}
                              type="password" 
                              name="password" 
                              value={password}
                              onChange ={this.handleChange}
                          />
                          <div className = "valid">{this.validator.message('password', this.state.password, 'required|alpha_num|min:8|max:35')}</div>
                    <button
                        type="submit"
                        onClick={this.onSubmit}
                    >Login
                    </button>
                  </form>
              </div>
        </div>
    )}
}

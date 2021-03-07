import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./login.css";
import Loginbutton from "./loginbutton";
import Input from "./validation";
import axios from "axios";

export class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pwd: "",
      unme: "",
    };
  }

  //event for any change in input;
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //event for Submit button;
  submitHandler = (event) => {
    event.preventDefault();
    let usernamePattern = /^[a-zA-Z0-9]{3,32}/;
    let passwordPattern = /^(?=.*?[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,32}$/;
    //check for username error;
    if (!usernamePattern.test(this.state.unme)) {
      console.log("error");
    }
    //check for password error;
    else if (!passwordPattern.test(this.state.pwd)) {
      console.log("error");
    }
    //validating the user input;
    else
      axios
        .post("https://minimumque.herokuapp.com/login", this.state)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  render() {
    const { unme, pwd } = this.state;
    return (
      <Router>
        <form onSubmit={this.submitHandler} className="container">
          <div className="form-group">
            <div className="left">
              <label>Username</label>
            </div>

            <div className="right">
              <label>
                <NavLink to="/empty">Retrieve</NavLink>
              </label>
            </div>
          </div>
          <Input
            type="text"
            name="unme"
            value={unme}
            onChange={this.handleChange}
          />
          <div className="form-group">
            <div className="left">
              <label>Password</label>
            </div>
            <div className="right">
              <label>
                <NavLink to="/empty">Reset</NavLink>
              </label>
            </div>
          </div>

          <Input
            type="password"
            name="pwd"
            value={pwd}
            onChange={this.handleChange}
          />

          <Loginbutton
            type="submit"
            text="Login"
            onClick={this.submitHandler}
          />

          <footer className="footer">
            <div className="left">New User?</div>
            <div className="right">
              <NavLink to="/empty">Sign Up</NavLink>
            </div>
          </footer>
        </form>
      </Router>
    );
  }
}

export default login;

import React, { Component } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./login.css";
import Loginbutton from "./loginbutton";
import axios from "axios";
//import { Form, Container, Row, Col } from "react-bootstrap";

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

    //validating the user input;
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
          <div>
            <input
              type="text"
              name="unme"
              value={unme}
              onChange={this.handleChange}
              maxLength="32"
              minLength="3"
              pattern="[a-zA-Z0-9]+"
            />
          </div>
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
          <div>
            <input
              type="pwd"
              name="pwd"
              value={pwd}
              onChange={this.handleChange}
              maxLength="32"
              minLength="8"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,32}"
            />
          </div>

          <Loginbutton type="submit" text="Login" />

          <footer className="footer">
            <div className="left">New User?</div>
            <div className="right">Sign Up</div>
          </footer>
        </form>
      </Router>
    );
  }
}

export default login;

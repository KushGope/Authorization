import React, { Component } from "react";
import Input from "./validation";

export default class empty extends Component {
  //event for any change in input;
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <Input
          type="text"
          name="unme"
          value="dfdfgdf"
          onChange={this.handleChange}
        />
        <Input
          type="password"
          name="pwd"
          value="srrgdfgd"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

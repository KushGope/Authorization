import React, { Component } from "react";
import "./loginbutton.css";
export default class loginbutton extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "", value: "" };
  }

  render() {
    const { type, value } = this.state;
    return (
      <div>
        <button type={type} className="button" text={value}>
          Login
        </button>
      </div>
    );
  }
}

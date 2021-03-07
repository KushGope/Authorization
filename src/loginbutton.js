import React from "react";
import "./loginbutton.css";

function loginbutton(props) {
  return (
    <div>
      <button type={props.type} className="button" text={props.value}>
        Login
      </button>
    </div>
  );
}
export default loginbutton;

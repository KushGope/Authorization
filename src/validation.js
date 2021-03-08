import React from "react";
import "./validation.css";

function validation(props) {
  return (
    <div>
      <input
        name={props.name}
        className={props.className}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
      <span className="error">
        <p id={props.error} />
      </span>
    </div>
  );
}

export default validation;

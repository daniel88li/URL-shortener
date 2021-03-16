import React from "react";
import "./Button.css";

// const STYLES = ["btn--round", "btn--regular"];
// const SIZES = ["btn--mobile", "btn--small", "btn--medium"];
// const COLOUR = ["cyan", "violet"];

function Button(props) {
  return (
    <button
      className={`btn ${props.btnStyle} ${props.btnSize} ${props.btnColour}`}
    >
      {props.text}
    </button>
  );
}

export default Button;

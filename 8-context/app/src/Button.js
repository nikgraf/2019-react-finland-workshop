import React from "react";

function Button(props) {
  return (
    <button
      style={{
        background: "#eee",
        color: "#222"
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

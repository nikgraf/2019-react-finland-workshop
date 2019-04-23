import React from "react";
// import calculateNodeHeight from "./calculateNodeHeight";

function TextArea(props) {
  return (
    <textarea
      value={props.value}
      onChange={event => {
        props.onChange(event.target.value);
      }}
    />
  );
}

export default TextArea;

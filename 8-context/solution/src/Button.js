import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

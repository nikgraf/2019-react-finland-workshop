import React from "react";

export const themes = {
  dark: {
    foreground: "#fff",
    background: "#666"
  },
  light: {
    foreground: "#222",
    background: "#eee"
  }
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export default ThemeContext;

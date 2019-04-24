import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import ThemeContext, { themes } from "./ThemeContext";
import UserContext from "./UserContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const [user, setUser] = useState({ firstName: "Jane", lastName: "Doe" });

  const toggleTheme = () => {
    setTheme(currentTheme =>
      currentTheme === themes.dark ? themes.light : themes.dark
    );
  };

  useEffect(() => {
    const id = window.setTimeout(() => {
      setUser({ firstName: "Moritz", lastName: "Muller" });
    }, 2000);
    return () => {
      window.clearTimeout(id);
    };
  });

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Toolbar />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

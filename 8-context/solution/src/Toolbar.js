import React, { useContext } from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";

function Toolbar() {
  const user = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Button>Do Something</Button>
      <Button>Do Something Else</Button>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <div>
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}
export default Toolbar;

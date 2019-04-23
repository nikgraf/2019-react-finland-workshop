import React, { useContext } from "react";
import Button from "./Button";
import UserContext from "./UserContext";

function Toolbar() {
  const user = useContext(UserContext);

  return (
    <div>
      <Button>Do Something</Button>
      <Button>Do Something Else</Button>
      <Button>Toggle Theme</Button>
      <div>
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}
export default Toolbar;

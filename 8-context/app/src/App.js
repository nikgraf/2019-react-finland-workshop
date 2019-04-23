import React, { useState } from "react";
import Toolbar from "./Toolbar";
import UserContext from "./UserContext";

function App() {
  const [user] = useState({ firstName: "Jane", lastName: "Doe" });

  return (
    <UserContext.Provider value={user}>
      <Toolbar />
    </UserContext.Provider>
  );
}

export default App;

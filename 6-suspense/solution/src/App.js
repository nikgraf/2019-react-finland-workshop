import React from "react";
import Profile from "./Profile";
import Repositories from "./Repositories";

function App() {
  return (
    <div>
      <React.Suspense fallback={"loading..."}>
        <Profile />
        <React.Suspense fallback={"loading..."}>
          <Repositories />
        </React.Suspense>
      </React.Suspense>
    </div>
  );
}

export default App;

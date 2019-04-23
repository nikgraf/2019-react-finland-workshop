import React from "react";
import Profile from "./Profile";
import Repositories from "./Repositories";
const Footer = React.lazy(() => import("./Footer"));

function App() {
  return (
    <div>
      <Profile />
      <Repositories />
      <React.Suspense fallback={<div>Loading the footer …</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;

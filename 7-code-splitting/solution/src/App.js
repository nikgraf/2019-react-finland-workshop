import React from "react";
import Profile from "./Profile";
import Repositories from "./Repositories";
const Footer = React.lazy(() => import("./Footer"));
const Chart = React.lazy(() => import("./Chart"));

function App() {
  return (
    <div>
      <Profile />
      <Repositories />
      <React.Suspense fallback={<div>Loading the chart …</div>}>
        <Chart />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading the footer …</div>}>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;

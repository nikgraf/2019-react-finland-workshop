import React from "react";
import Img from "./Img";

function App() {
  return (
    <div>
      <React.Suspense maxDuration={300} fallback={"loading..."}>
        <Img src="https://source.unsplash.com/random/2000x1000" />
      </React.Suspense>
    </div>
  );
}

export default App;

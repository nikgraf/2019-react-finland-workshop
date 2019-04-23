import React from "react";
import Timer from "./Timer";

function App() {
  return (
    <div>
      {/* great feature to stress people … or let them relax */}
      <Timer interval={500} />
    </div>
  );
}

export default App;

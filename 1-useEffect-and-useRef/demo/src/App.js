import React from "react";
import Input from "./Input";
import Timer from "./Timer";

function App() {
  return (
    <div>
      <Input />
      {/* <Timer /> */}
      <Timer interval={500} />
    </div>
  );
}

export default App;

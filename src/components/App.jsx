import React from "react";
import Login from "./Login.jsx";

let authentication = true;

function App() {
  return (
    <div className="container">
      {authentication === false ? <Login /> : <h1>Hello</h1>}
    </div>
  );
}

export default App;

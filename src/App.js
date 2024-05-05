import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="text-center">
        This website was coded by <span>Dulce Figueredo</span>, the code is <span>open-source</span> on <a href="#">GitHub</a>
      </footer>
    </div>
  );
}

export default App;

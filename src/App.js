import React from "react";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer className="">
        This website was coded by <span>Dulce Figueredo</span>, the code is
        open-source on <a href="#">GitHub</a>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Top from "./components/Top/Top"
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Top />
      <About />
    </div>
  );
}

export default App;

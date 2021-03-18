import React from "react";
import Nav from "./components/Nav";
import "./App.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/Content";

function App() {
  return (
    <div className="container">
      <Nav />
      <Content />
    </div>
  );
}

export default App;

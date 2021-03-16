import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //const [query, setQuery] = useState("");
  return (
    <Router>
      <div className="container">
        <Nav />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./menu-bar/App.css";
import Navigation from "./menu-bar/pages/Navigation";
import Home from "./menu-bar/pages/Home";
import About from "./menu-bar/pages/About";
import Contact from "./menu-bar/pages/Contact";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route path="/" conponent={Home}/>
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Router>
    </div>
  );
};

export default App;

import React from "react";
import "./menu-bar/App.css";
import Navigation from "./menu-bar/pages/Navigation";
import About from "./menu-bar/pages/About";
import Contact from "./menu-bar/pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return(
    <div><h1>Home</h1></div>
  )
};

export default App;

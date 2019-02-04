import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
/**
 * ALL PAGES
 */
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experiences";
import Projects from "./pages/projects";
import Educations from "./pages/educations";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Educations} />
        <Route path="/projects" component={Projects} />
        <Route path="/experiences" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  }
}

export default App;

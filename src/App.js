import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Project/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

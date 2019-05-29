import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import FxForm from "./form.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./about.js";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="">EULER Simulation</Navbar.Brand>
            <Nav.Link href="calculate">Calculate</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Navbar>
          <Route exact path="/" component={FxForm} />
          <Route path="/calculate" component={FxForm} />
          <Route path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

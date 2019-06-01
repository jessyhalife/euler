import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import FxForm from "./form.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./about.js";
export default class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="">Numerical methods - Comparision</Navbar.Brand>
            {/* <Nav.Link href="calculate">Calculate</Nav.Link>
            <Nav.Link href="about">About</Nav.Link> */}
          </Navbar>
          <Route exact path={process.env.PUBLIC_URL + "/"} component={FxForm} />
          <Route
            path={process.env.PUBLIC_URL + "/calculate"}
            component={FxForm}
          />
          <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
          <footer>Made with  <span
        className="emoji"
        role="img"
        aria-label="love"
        >❤️
          </span> by @jessyhalife. </footer>
        </Router>
      </div>
    );
  }
}

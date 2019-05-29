import React, { Component } from "react";
import {
  Navbar
} from "react-bootstrap";
export default class Main extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">EULER Simulation</Navbar.Brand>
      </Navbar>
    );
  }
}

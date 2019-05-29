import React, { Component } from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  NavDropdown,
  FormControl
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

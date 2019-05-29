import React, { Component } from "react";
import { euler } from "../calculate/calculus";
import * as Math from "mathjs";
import {
  Form,
  Container,
  Button,
  Row,
  Col,
  Badge,
  Jumbotron
} from "react-bootstrap";
import Body from "./body";
Math.import(require("mathjs-simple-integral"));
class FxForm extends Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.state = {
      showGraph: false,
      f: "x",
      h: 0.1, //default
      k: 1,
      dataPoints: undefined,
      error: false,
      integral: "",
      parsed: "",
      y0: 0,
      x0: 0
    };
  }
  calculate() {
    try {
      var { f, h, k, x0, y0 } = this.state;
      this.setState({
        dataPoints: euler(f, h, k, x0, y0),
        parsed: Math.simplify(Math.parse(this.state.f)).toTex(),
        integral: Math.simplify(Math.integral(this.state.f, "x")).toTex()
      });
      this.setState({ error: false });
    } catch (error) {
      console.log(error);
      this.setState({ error: true });
    }
  }
  render() {
    return (
      <div>
        <Container style={{ marginTop: 20 }}>
          <Jumbotron>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="1">
                  dx/dt:
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    isInvalid={this.state.error}
                    placeholder="dy/dx"
                    size="sm"
                    value={this.state.f}
                    onChange={e => this.setState({ f: e.target.value })}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="1">
                  Initial values:
                </Form.Label>
                <Col sm="1">(</Col>
                <Col sm="2">
                  <Form.Control
                    placeholder="x0"
                    size="sm"
                    value={this.state.x0}
                    onChange={e => this.setState({ x0: e.target.value })}
                  />
                </Col>
                <Col sm="1">,</Col>
                <Col sm="2">
                  <Form.Control
                    placeholder="y0"
                    size="sm"
                    value={this.state.y0}
                    onChange={e => this.setState({ y0: e.target.value })}
                  />
                </Col>
                <Col sm="1">)</Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="1">
                  h:
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    placeholder="h"
                    size="sm"
                    value={this.state.h}
                    onChange={e => this.setState({ h: e.target.value })}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="1">
                  K:
                </Form.Label>
                <Col sm="1">
                  <input
                    id="typeinp"
                    type="range"
                    min="-5"
                    max="5"
                    value={this.state.k}
                    onChange={e => {
                      this.setState({ k: e.target.value });
                    }}
                    step="1"
                  />
                </Col>
                <Col sm="2">
                  <Badge variant="secondary">K = {this.state.k}</Badge>
                </Col>
              </Form.Group>
              <Button variant="primary" onClick={this.calculate}>
                Graph!
              </Button>
            </Form>
          </Jumbotron>
          <Body
            dataPoints={this.state.dataPoints}
            function={this.state.parsed}
            integral={this.state.integral}
          />
        </Container>
      </div>
    );
  }
}
export default FxForm;

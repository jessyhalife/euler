import React, { Component } from "react";
import {
  euler,
  euler_improved,
  runge_kutta,
  fn,
  integral
} from "../calculate/calculus";
import * as Math from "mathjs";
import {
  Form,
  Container,
  Button,
  Row,
  Col,
  Badge,
  Jumbotron,
  Alert
} from "react-bootstrap";
import Body from "./body";
Math.import(require("mathjs-simple-integral"));
const initialState = {
  showGraph: false,
  f: "x",
  h: 0.1, //default
  k: 1,
  euler: undefined,
  error: false,
  errorMsg: "",
  integral: "",
  parsed: "",
  y0: 0,
  x0: 0,
  improved: undefined,
  runge_kutta: undefined,
  chkEuler: true,
  chkEulerImproved: true,
  chkRK: true,
  data: {},
  btnDisabled: false
};
class FxForm extends Component {
  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
    this.state = initialState;
  }

  reset() {
    this.setState(initialState);
  }

  calculate() {
    try {
      var { f, h, k, x0, y0, chkEuler, chkEulerImproved, chkRK } = this.state;
      if (isNaN(h) || isNaN(k) || isNaN(x0) || isNaN(y0)) {
        this.setState({ error: true, errorMsg: "check values please!" });
        return;
      }

      var parsed = Math.simplify(Math.parse(f));
      console.log(parsed.toTex());
      this.setState({ parsed }, () => {
        console.log(this.state.parsed);
      });

      this.setState(
        {
          data: {}
        },
        () =>
          this.setState({
            parsed: Math.simplify(Math.parse(f)).toTex(),
            integral: Math.simplify(Math.integral(f, "x")).toTex(),
            data: {
              euler: chkEuler ? euler(f, h, k, x0, y0) : [],
              fn: fn(f, k),
              i: integral(f, k),
              improved: chkEulerImproved ? euler_improved(f, h, k, x0, y0) : [],
              runge_kutta: chkRK ? runge_kutta(f, h, k, x0, y0) : []
            }
          })
      );
      this.setState({ error: false });
    } catch (error) {
      this.setState({ error: true, errorMsg: error.toString() });
    }
  }
  _handleChange(_event) {
    this.setState({ btnDisabled: true });
    this.setState({ [_event.target.name]: _event.target.value }, () =>
      this.setState({ btnDisabled: false })
    );
  }
  _handleCheck(_event) {
    this.setState({ btnDisabled: true });
    this.setState(
      { [_event.target.name]: !this.state[[_event.target.name]] },
      () => this.setState({ btnDisabled: false })
    );
  }
  render() {
    return (
      <div>
        {this.state.error ? (
          <Alert dismissible variant="danger">
            <Alert.Heading>Oops! :(</Alert.Heading>
            <p>{this.state.errorMsg}</p>
          </Alert>
        ) : (
          ""
        )}
        <Container style={{ marginTop: 20 }}>
          <Jumbotron>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="1">
                  dy/dx:
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    isInvalid={this.state.error}
                    placeholder="dy/dx"
                    name="f"
                    size="sm"
                    value={this.state.f}
                    onChange={e => this._handleChange(e)}
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
                    name="x0"
                    value={this.state.x0}
                    onChange={e => this._handleChange(e)}
                  />
                </Col>
                <Col sm="1">,</Col>
                <Col sm="2">
                  <Form.Control
                    placeholder="y0"
                    size="sm"
                    name="y0"
                    value={this.state.y0}
                    onChange={e => this._handleChange(e)}
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
                    name="h"
                    value={this.state.h}
                    onChange={e => this._handleChange(e)}
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
                    name="k"
                    value={this.state.k}
                    onChange={e => this._handleChange(e)}
                    step="1"
                  />
                </Col>
                <Col sm="2">
                  <Badge variant="secondary">K = {this.state.k}</Badge>
                </Col>
              </Form.Group>
              <Row>
                <Col sm="2">
                  <Form.Check
                    type="checkbox"
                    label="Euler"
                    name="chkEuler"
                    checked={this.state.chkEuler}
                    onChange={e => this._handleCheck(e)}
                  />
                </Col>
                <Col sm="2">
                  <Form.Check
                    type="checkbox"
                    label="Improved Euler"
                    name="chkEulerImproved"
                    checked={this.state.chkEulerImproved}
                    onChange={e => this._handleCheck(e)}
                  />
                </Col>
                <Col sm="2">
                  <Form.Check
                    type="checkbox"
                    label="Runge Kutta k4"
                    name="chkRK"
                    checked={this.state.chkRK}
                    onChange={e => this._handleCheck(e)}
                  />
                </Col>
              </Row>
              <hr />
              <Row>
                <Col lg="10">
                  <Button
                    disabled={this.state.btnDisabled}
                    variant="primary"
                    onClick={this.calculate}
                  >
                    Graph!
                  </Button>
                  &nbsp;
                  <Button
                    disabled={this.state.btnDisabled}
                    variant="danger"
                    onClick={this.reset}
                  >
                    RESET
                  </Button>
                </Col>
              </Row>
            </Form>
          </Jumbotron>
          <Body
            data={this.state.data}
            integral={this.state.integral}
            funcion={this.state.parsed}
          />
        </Container>
      </div>
    );
  }
}
export default FxForm;

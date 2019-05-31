import React, { Component } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import Graph from "./graph";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
export default class Body extends Component {
  render() {
    var { euler, improved, runge_kutta, fn, i } = this.props.data || [];
    var { integral, funcion } = this.props;

    return (
      <div>
        {euler || improved || runge_kutta || fn || i ? (
          <Container style={{ marginTop: 50 }}>
            <Row>
              <Col>
                <Graph
                  euler={euler}
                  integral={i}
                  funcion={fn}
                  improved={improved}
                  runge_kutta={runge_kutta}
                />
              </Col>
              <Col sm="4">
                <h6>Función: {funcion ? <InlineMath math={funcion} /> : ""}</h6>
                <h6>
                  Integral: {integral ? <InlineMath math={integral} /> : ""}
                </h6>
                <hr />
                <h6>Color References:</h6>
                <hr />
                <Badge style={{ backgroundColor: "#ddbbaa" }}>&nbsp;&nbsp;</Badge>
                <label>Función dy/dx</label>
                <br />
                <Badge style={{ backgroundColor: "#93cc93" }}>&nbsp;&nbsp;</Badge>
                <label>Integral Analitica</label>
                <br />
                <hr />
                <h6>Methods</h6>
                <hr />
                <Badge style={{ backgroundColor: "red" }}>&nbsp;&nbsp;</Badge>
                <label>EULER</label>
                <br />
                <Badge style={{ backgroundColor: "green" }}>&nbsp;&nbsp;</Badge>
                <label> Improved EULER</label>
                <br />
                <Badge style={{ backgroundColor: "blue" }}>&nbsp;&nbsp;</Badge>
                <label>RungeKutta K4</label>
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
      </div>
    );
  }
}

import React, { Component } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import Graph from "./graph";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
export default class Body extends Component {
  render() {
    var { dataPoints } = this.props;
    return (
      <div>
        {dataPoints ? (
          <Container style={{ marginTop: 50 }}>
            <Row>
              <Col>
                <Graph data={dataPoints.p} integral={dataPoints.i} funcion={dataPoints.f} />
              </Col>
              <Col sm="4">
                <h5>Color References:</h5>
                <Badge style={{ backgroundColor: "#ddbbaa" }}>Función</Badge>
                <br />
                <Badge style={{ backgroundColor: "#93cc93" }}>
                  Integral Analitica
                </Badge>
                <br />
                <Badge style={{ backgroundColor: "#f24f4f" }}>
                  Integral - aproximación EULER
                </Badge>
                <br />
                <h6>
                  Función: <InlineMath math={this.props.function} />
                </h6>
                <h6>
                  Integral: <InlineMath math={this.props.integral} />
                </h6>
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

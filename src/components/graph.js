import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
class Graph extends Component {
  render() {
    const { data, integral, funcion } = this.props;
    return (
      <div>
        {data ? (
          <div>
            <VictoryChart
              animate={{ duration: 1000 }}
              // domain={{ x: [-20, 20], y: [-20, 20] }}
              domain={{ x: [-5, 5], y: [-4, 4] }}
              // domainPadding={{ x: 1, y: 4 }}
              theme={VictoryTheme.material}
              style={{ parent: { maxWidth: "110%" } }}
            >
              <VictoryLine
                data={funcion}
                style={{
                  data: {
                    stroke: "#ddbbaa", // <-------
                    strokeWidth: 0.5
                  }
                }}
              />
              <VictoryLine
                data={data}
                style={{
                  data: {
                    stroke: "#f24f4f", // <-------
                    strokeWidth: 2
                  }
                }}
              />
              <VictoryLine
                data={integral}
                style={{
                  data: {
                    stroke: "#93cc93", // <-------
                    strokeWidth: 0.5
                  }
                }}
              />
            </VictoryChart>
          </div>
        ) : (
          "-"
        )}
      </div>
    );
  }
}

Graph.defaultProps = {
  data: [],
  color: "#ff4500",
  svgHeight: 200,
  svgWidth: 600
};
export default Graph;

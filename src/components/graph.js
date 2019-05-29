import React, { Component } from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryScatter,
  VictoryAxis
} from "victory";
class Graph extends Component {
  render() {
    const { data, integral, funcion } = this.props;
    return (
      <div>
        {data ? (
          <div>
            <VictoryChart
              animate={{ duration: 1000 }}
              domain={{x: [-20,20], y: [-20,20]}}

              theme={VictoryTheme.material}
              style={{ parent: { maxWidth: "110%" } }}
            >
                <VictoryScatter
                data={funcion}
                size={0}
                style={{ data: { fill: "#ddbbaa" } }}
              />
              <VictoryLine
                data={data}
                style={{
                  data: { 
                  stroke: "#f24f4f", // <-------
                  strokeWidth: 2}
                }}
              />
            
               <VictoryScatter
                data={integral}
                size={0}
                style={{ data: { fill: "#93cc93" } }}
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

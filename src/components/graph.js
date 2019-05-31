import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
class Graph extends Component {
  render() {
    const { euler, integral, funcion, improved, runge_kutta } = this.props;
    console.log(integral);
    console.log(funcion);
    return (
      <div>
        {euler || integral || funcion || improved || runge_kutta ? (
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
                data={euler}
                style={{
                  data: {
                    stroke: "red", // <-------
                    strokeWidth: 1
                  }
                }}
              />
               <VictoryLine
                data={improved}
                style={{
                  data: {
                    stroke: "green", // <-------
                    strokeWidth: 1
                  }
                }}
              />
              <VictoryLine
                data={runge_kutta}
                style={{
                  data: {
                    stroke: "blue", // <-------
                    strokeWidth: 1
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

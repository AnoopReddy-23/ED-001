import React, { Component } from "react";
import Plot from "react-plotly.js";
export default class PiePlot extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              values: [31, 10, 4, 45],
              labels: ["videos", "audio", "quiz", "presentation"],
              type: "pie",
            },
          ]}
          layout={{ width: 500, height: 500, title: "Pending %" }}
        />
      </div>
    );
  }
}

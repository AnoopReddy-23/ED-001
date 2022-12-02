import React, { Component } from "react";
import Plot from "react-plotly.js";
export default class PP2 extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              values: [69, 90, 96, 55],
              labels: ["videos", "audio", "quiz", "presentation"],
              type: "pie",
            },
          ]}
          layout={{ width: 500, height: 500, title: "Submission %" }}
        />
      </div>
    );
  }
}

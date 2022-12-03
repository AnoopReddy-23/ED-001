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
              labels: ["quiz", "audio", "videos", "presentation"],
              type: "pie",
              textinfo:"label+percent",
              insidetextorientation: "radial",
              sort:false,
            },
          ]}
          layout={{ width: 500, height: 500, title: "Pending %" }}
        />
      </div>
    );
  }
}

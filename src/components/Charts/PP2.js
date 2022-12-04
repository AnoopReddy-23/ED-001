import React, { Component } from "react";
import Plot from "react-plotly.js";
var ultimateColors = [
  ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)'],
  ['rgb(177, 127, 38)', 'rgb(205, 152, 36)', 'rgb(99, 79, 37)', 'rgb(129, 180, 179)', 'rgb(124, 103, 37)'],
  ['rgb(33, 75, 99)', 'rgb(79, 129, 102)', 'rgb(151, 179, 100)', 'rgb(175, 49, 35)', 'rgb(36, 73, 147)'],
  ['rgb(146, 123, 21)', 'rgb(177, 180, 34)', 'rgb(206, 206, 40)', 'rgb(175, 51, 21)', 'rgb(35, 36, 21)']
];
export default class PP2 extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[
            {
              values: [69, 90, 96, 55],
              labels: ["quiz", "audio", "videos", "presentation"],
              type: "pie",
              textinfo:"label+percent",
              insidetextorientation: "radial",
              sort:false,
              
            },
          ]}
          layout={{ width: 500, height: 500, title: "Submission %" }}
        />
      </div>
    );
  }
}

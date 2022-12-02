import React from "react";

// components
import TSidebar from "components/Sidebar/TSidebar";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import PiePlot from "components/Charts/PiePlot";
import PP2 from "components/Charts/PP2";

export default function TDashboard() {
  return (
    <>
      <TSidebar />
      <div className="flex flex-wrap">
        <div className="d-flex">
          <div className="w-full xl:w-12/12 mb-12 me-2 ">
            <PiePlot />
          </div>
          <div className="w-full xl:w-12/12 mb-12 me-2 ">
            <PP2 />
          </div>
        </div>

        <div className="w-full xl:w-12/12 ">
          <CardBarChart />
        </div>
      </div>
    </>
  );
}

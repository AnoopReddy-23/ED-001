import React from "react";

// components
import TSidebar from "components/Sidebar/TSidebar";
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import PiePlot from "components/Charts/PiePlot";
import PP2 from "components/Charts/PP2";
import HeaderStats from "components/Headers/HeaderStats.js";
export default function TDashboard() {
  return (
    <>
      <HeaderStats/>
      <TSidebar />
      <div className="flex flex-wrap d-block mx-auto">
        <div className="d-flex">
          <div className="w-full ms-4 xl:w-12/12 mb-12 ">
            <PiePlot />
          </div>
          <div className="w-full xl:w-12/12 mb-12">
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

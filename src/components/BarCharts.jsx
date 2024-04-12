import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarCharts = ({ data }) => {
  return (
    <div>
      {data?.x_label && data?.y_label && (
        <BarChart
          xAxis={[{ scaleType: "band", data: data?.x_label }]}
          series={[{ data: data?.y_label }]}
          width={500}
          height={300}
        />
      )}
    </div>
  );
};

export default BarCharts;

import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BarCharts from "../../components/BarCharts";
import BasicSelect from "../../components/BasicSelect";
import { apiCall } from "../../utils/httpClient";
import { GLOBAL_URL } from "../../utils/Constant";

const SiteViewChart = () => {
  const [chartData, setChartData] = useState({});
  const [siteViewData, setSiteViewData] = useState([]);
  const [noOfDays, setNoOfDays] = useState(15);

  useEffect(() => {
    getSiteViewData();
  }, [noOfDays]);

  useEffect(() => {
    if (siteViewData.length > 0) {
      const x_label = siteViewData
        ?.map((obj) => obj?._id)
        ?.filter((obj) => obj !== null);

      const y_label = siteViewData
        ?.filter((obj) => obj?._id !== null)
        ?.map((obj) => obj?.countEvent);
      setChartData({ ...chartData, x_label: x_label, y_label: y_label });
    }
  }, [siteViewData]);

  const getSiteViewData = async () => {
    const response = await apiCall(
      "POST",
      `${GLOBAL_URL}/api/user/getDashBoardData`,
      {
        daysToAdd: noOfDays,
      }
    );
    setSiteViewData(response.data);
    console.log("noOfDays: ", noOfDays);
  };

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>Site View Events</Box>
        <BasicSelect value={noOfDays} setValue={setNoOfDays} />
      </Box>
      <BarCharts data={chartData} />
    </div>
  );
};

export default SiteViewChart;

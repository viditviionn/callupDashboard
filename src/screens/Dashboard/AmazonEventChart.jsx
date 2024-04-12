import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BarCharts from "../../components/BarCharts";
import BasicSelect from "../../components/BasicSelect";
import { apiCall } from "../../utils/httpClient";
import { GLOBAL_URL } from "../../utils/Constant";

const AmazonEventChart = () => {
  const [chartData, setChartData] = useState({});
  const [amazonEventData, setAmazonEventData] = useState([]);
  const [noOfDays, setNoOfDays] = useState(15);

  useEffect(() => {
    getAmazonEventData();
  }, [noOfDays]);

  useEffect(() => {
    if (amazonEventData.length > 0) {
      const x_label = amazonEventData
        ?.map((obj) => obj?._id)
        ?.filter((obj) => obj !== null);
      const y_label = amazonEventData
        ?.filter((obj) => obj?._id !== null)
        ?.map((obj) => obj?.countEvent);
      setChartData({ ...chartData, x_label: x_label, y_label: y_label });
    }
  }, [amazonEventData]);

  const getAmazonEventData = async () => {
    const response = await apiCall(
      "POST",
      `${GLOBAL_URL}/api/user/getAmazonEventData`,
      {
        daysToAdd: 5,
      }
    );
    setAmazonEventData(response.data);
    console.log("response.data: ", response.data);
  };

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>Site Amazon Event</Box>
        <BasicSelect value={noOfDays} setValue={setNoOfDays} />
      </Box>
      <BarCharts data={chartData} />
    </div>
  );
};

export default AmazonEventChart;

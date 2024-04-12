import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BarCharts from "../../components/BarCharts";
import BasicSelect from "../../components/BasicSelect";
import { apiCall } from "../../utils/httpClient";
import { GLOBAL_URL } from "../../utils/Constant";

const BuyNowTicketChart = () => {
  const [chartData, setChartData] = useState({});
  const [buyNowEventData, setBuyNowEventData] = useState([]);
  const [noOfDays, setNoOfDays] = useState(15);

  useEffect(() => {
    getBuyNowEventData();
  }, [noOfDays]);

  useEffect(() => {
    if (buyNowEventData.length > 0) {
      const x_label = buyNowEventData
        ?.map((obj) => obj?._id)
        ?.filter((obj) => obj !== null);
      const y_label = buyNowEventData
        ?.filter((obj) => obj?._id !== null)
        ?.map((obj) => obj?.countEvent);
      setChartData({ ...chartData, x_label: x_label, y_label: y_label });
    }
  }, [buyNowEventData]);

  const getBuyNowEventData = async () => {
    const response = await apiCall(
      "POST",
      `${GLOBAL_URL}/api/user/getBuyNowEventData`,
      {
        daysToAdd: noOfDays,
      }
    );
    setBuyNowEventData(response.data);
  };

  return (
    <div>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>Site Buy Now Event</Box>
        <BasicSelect value={noOfDays} setValue={setNoOfDays} />
      </Box>
      <BarCharts data={chartData} />
    </div>
  );
};

export default BuyNowTicketChart;

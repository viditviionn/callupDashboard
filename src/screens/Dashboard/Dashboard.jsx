import React, { useEffect, useState } from "react";
import { apiCall } from "../../utils/httpClient";
import { Box } from "@mui/material";
import BarCharts from "../../components/BarCharts";
import SiteViewChart from "./SiteViewChart";
import BuyNowTicketChart from "./BuyNowTicketChart";
import AmazonEventChart from "./AmazonEventChart";
import { GLOBAL_URL } from "../../utils/Constant";

const Dashboard = () => {
  return (
    <Box>
      <SiteViewChart />
      <BuyNowTicketChart />
      <AmazonEventChart />
    </Box>
  );
};

export default Dashboard;

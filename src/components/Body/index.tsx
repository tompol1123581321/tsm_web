import { AppBar, Box, Drawer, List } from "@mui/material";
import * as React from "react";
import { ChartList } from "./ChartList";
import { CreateChartForm } from "./CreateChartForm";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
    },
  ],
  options: { responsive: true, maintainAspectRatio: false },
};

export const Body = () => {
  return (
    <Box
      sx={{
        position: "static",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ChartList />
      {/* <Doughnut
        style={{ maxWidth: "30rem", maxHeight: "30rem", fontSize: "3rem" }}
        data={data}
      /> */}
      <CreateChartForm />
    </Box>
  );
};

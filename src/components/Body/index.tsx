import { AppBar, Box, Drawer, Grid, List } from "@mui/material";
import * as React from "react";
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
  const hasChartSetUp: boolean = true;
  // when true user can edit chart and post data and export data
  // when false user must create new chart

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      {hasChartSetUp ? (
        <Grid minWidth="100vw" container>
          <Grid sm={12} md={6} lg={6} xs={12} item>
            <Doughnut
              style={{
                margin: "auto",
                maxWidth: "30rem",
                maxHeight: "30rem",
                fontSize: "3rem",
              }}
              data={data}
            />
          </Grid>
          <Grid sm={12} md={4} lg={4} xs={12} item>
            <CreateChartForm />
          </Grid>
        </Grid>
      ) : (
        // welcome page and create ypur chart page
        // animations and wizard
        "Welcome"
      )}
    </Box>
  );
};

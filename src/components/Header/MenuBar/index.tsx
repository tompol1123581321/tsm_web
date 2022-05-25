import { Box, Typography } from "@mui/material";
import React from "react";
import { LogInIcon } from "./LogInIcon";

export const MenuBar = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        paddingY: "0.3rem",
        minHeight: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ marginX: "1rem" }}>LOGO</Typography>
      <LogInIcon />
    </Box>
  );
};

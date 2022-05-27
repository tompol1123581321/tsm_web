import { Box, Typography } from "@mui/material";
import React from "react";
import { LogInIcon } from "./LogInIcon";
import SettingsIcon from "@mui/icons-material/Settings";

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
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SettingsIcon />
        <LogInIcon />
      </Box>
    </Box>
  );
};

import PersonIcon from "@mui/icons-material/Person";
import { Box, IconButton } from "@mui/material";
import * as React from "react";

export const LogInIcon = () => {
  return (
    <Box sx={{ marginX: "1rem" }}>
      <IconButton aria-label="Log in">
        <PersonIcon color="inherit" sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

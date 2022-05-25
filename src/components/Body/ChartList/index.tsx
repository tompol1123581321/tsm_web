import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const testData = [
  { name: "testData", id: "12" },
  { name: "testData", id: "12" },
  { name: "testData", id: "12" },
  { name: "testData", id: "12" },
  { name: "testData", id: "12" },
  { name: "testData", id: "12" },
];

export const ChartList = () => {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <List
        sx={{
          height: "100%",
          marginTop: "3.5rem",
          width: "10rem",
          borderRadius: "0.4rem",
          background: "linear-gradient(to bottom, #414345, #555657)",
        }}
      >
        {testData.map((t) => (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={t.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

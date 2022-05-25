import { AppBar } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <AppBar
      sx={{
        background: "linear-gradient(to right, #414345, #232526)",
      }}
    >
      {children}
    </AppBar>
  );
};

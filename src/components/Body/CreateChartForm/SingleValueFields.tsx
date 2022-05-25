import { Box, IconButton, TextField, Typography } from "@mui/material";
import * as React from "react";
import { GithubPicker } from "react-color";
import AddIcon from "@mui/icons-material/Add";
import { Controller, useForm } from "react-hook-form";
import { ChartSingleFieldData } from "../../../types";

type Props = {
  update: any;
  index: number;
  value: ChartSingleFieldData;
  control: any;
};

export const SingleValueFields: React.FC<Props> = ({
  update,
  index,
  value,
  control,
}) => {
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: value,
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "4rem",
      }}
    >
      <Controller
        render={({ field }) => <TextField {...field} />}
        name={`chartFields-${index}-label`}
        control={control}
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} type={"color"} sx={{ width: "5rem" }} />
        )}
        name={`chartFields-${index}-backgroundColor`}
        control={control}
      />
    </Box>
  );
};

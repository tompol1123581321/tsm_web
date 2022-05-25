import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { GithubPicker } from "react-color";
import AddIcon from "@mui/icons-material/Add";
import { SingleValueFields } from "./SingleValueFields";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { ChartSingleFieldData } from "../../../types";

export const CreateChartForm = () => {
  const [td, setTd] = React.useState([
    { backgroundColor: "#fccb00", label: "test1" },
    { backgroundColor: "#eb9694", label: "test2" },
  ]);
  const { control, handleSubmit } = useForm();
  const { fields, append, update } = useFieldArray({
    control,
    name: "settingUpChart",
  });

  const onSubmit = React.useCallback((data: any) => {
    console.log({ data });
  }, []);

  const addNewInputSet = React.useCallback(() => {
    setTd([...td, { backgroundColor: "", label: "" }]);
  }, [td]);

  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {td.map((fieldSet, index) => (
          <SingleValueFields
            key={`field-${index}-${fieldSet.label}`}
            update={update}
            control={control}
            index={index}
            value={fieldSet}
          />
        ))}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={addNewInputSet}>
            <AddIcon />
          </IconButton>
        </Box>
        <Button onClick={handleSubmit(onSubmit)}>SAFE</Button>
      </form>
    </Paper>
  );
};

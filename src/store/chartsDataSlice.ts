import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChartData } from "../types";

export interface ChartDataState {
  chartData: ChartData[];
}

const initialState: ChartDataState = {
  chartData: [],
};

export const ChartDataSlice = createSlice({
  name: "Charts",
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<ChartData[]>) => {
      state.chartData = action.payload;
    },
    editChart: (state, action: PayloadAction<ChartData>) => {
      state.chartData = state.chartData.map((chart) => {
        if (chart.id === action.payload.id) {
          return action.payload;
        }
        return chart;
      });
    },
    addChart: (state, action: PayloadAction<ChartData>) => {
      state.chartData = [...state.chartData, action.payload];
    },
    deleteChart: (state, action: PayloadAction<ChartData>) => {
      state.chartData = state.chartData.filter(
        (chart) => chart.id !== action.payload.id
      );
    },
  },
});

export const { actions, reducer } = ChartDataSlice;

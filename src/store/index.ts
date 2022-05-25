import { configureStore } from "@reduxjs/toolkit";
import { reducer as chartDataReducer } from "./chartsDataSlice";

export const store = configureStore({
  reducer: { chartDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

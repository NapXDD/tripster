import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface planSelectionInit {
  value: {
    planNumber: string;
  };
}

let initialState: planSelectionInit = {
  value: {
    planNumber: "1",
  },
};

export const planningSelection = createSlice({
  name: "planningSelection",
  initialState,
  reducers: {
    setPlanNumber: (state, action: PayloadAction<string>) => {
      state.value.planNumber = action.payload;
    },
  },
});

export const { setPlanNumber } = planningSelection.actions;

export const selectPlanningSelection = (state: RootState) =>
  state.planningSelection.value;
export default planningSelection.reducer;

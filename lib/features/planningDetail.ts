import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface planningInit {
  value: {
    transportation: string;
    startDate: string;
    endDate: string;
    budget: number;
  };
}

let initialState: planningInit = {
  value: {
    transportation: "",
    startDate: "",
    endDate: "",
    budget: 0,
  },
};

export const planning = createSlice({
  name: "planning",
  initialState,
  reducers: {
    setTransportation: (state, action: PayloadAction<string>) => {
      state.value.transportation = action.payload;
    },
    setDate: (state, action: PayloadAction<string[]>) => {
      state.value.startDate = action.payload[0];
      state.value.endDate = action.payload[1];
    },
    setBudget: (state, action: PayloadAction<number>) => {
      state.value.budget = action.payload;
    },
  },
});

export const {
  setTransportation,
  setDate,
  setBudget,
} = planning.actions;

export const selectPlanning = (state: RootState) => state.planning.value;
export default planning.reducer;

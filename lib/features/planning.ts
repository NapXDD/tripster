import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface init {
  value: {
    transportation: string;
    startDate: string;
    endDate: string;
    budget: number;
    activities: string[];
    amentities: string[];
  };
}

let initialState: init = {
  value: {
    transportation: "",
    startDate: "",
    endDate: "",
    budget: 0,
    activities: [],
    amentities: [],
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
    setActivities: (state, action: PayloadAction<string[]>) => {
      state.value.activities = action.payload;
    },
    setAmentities: (state, action: PayloadAction<string[]>) => {
      state.value.activities = action.payload;
    },
  },
});

export const {
  setTransportation,
  setDate,
  setBudget,
  setActivities,
  setAmentities,
} = planning.actions;

export const selectPlanning = (state: RootState) => state.planning.value;
export default planning.reducer;

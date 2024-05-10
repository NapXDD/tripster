import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PlanningInit {
  value: {
    transportation: string;
    startDate: string;
    endDate: string;
    budget: number;
    activities: string[];
    amentities: string[];
  };
}

let initialState: PlanningInit = {
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
    setActivities: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      if (state.value.activities.length < 5) {
        state.value.activities.push(value);
      }
    },
    removeActivities: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      const valueIndex = state.value.activities.indexOf(value);
      if (valueIndex !== -1) {
        state.value.activities.splice(valueIndex, 1);
      }
    },
    setAmentities: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      if (state.value.amentities.length < 5) {
        state.value.amentities.push(value);
      }
    },
    removeAmentities: (state, action: PayloadAction<string>) => {
      const value = action.payload;
      const valueIndex = state.value.amentities.indexOf(value);
      if (valueIndex !== -1) {
        state.value.amentities.splice(valueIndex, 1);
      }
    },
  },
});

export const {
  setTransportation,
  setDate,
  setBudget,
  setActivities,
  setAmentities,
  removeActivities,
  removeAmentities,
} = planning.actions;

export const selectPlanning = (state: RootState) => state.planning.value;
export default planning.reducer;

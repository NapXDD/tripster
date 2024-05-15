import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CreatePlanningInit {
  value: {
    transportation: string;
    startDate: string;
    endDate: string;
    budget: number;
    activities: string[];
    amentities: string[];
    listDate: string[];
  };
}

let initialState: CreatePlanningInit = {
  value: {
    transportation: "",
    startDate: "",
    endDate: "",
    budget: 0,
    activities: [],
    amentities: [],
    listDate: [],
  },
};

export const createPlanning = createSlice({
  name: "createPlanning",
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
    setListDate: (state, action: PayloadAction<string[]>) => {
      const value = action.payload;
      state.value.listDate = value;
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
  setListDate,
} = createPlanning.actions;

export const selectCreatePlanning = (state: RootState) =>
  state.createPlanning.value;
export default createPlanning.reducer;

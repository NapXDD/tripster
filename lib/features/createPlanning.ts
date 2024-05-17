import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import dayjs from "dayjs";

interface CreatePlanningInit {
  value: {
    destination: {
      idProvince: string;
      name: string;
    };
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
    destination: { name: "Thành phố Hà Nội", idProvince: "01" },
    transportation: "car",
    startDate: dayjs().format("DD/MM/YYYY"),
    endDate: dayjs().add(1, "day").format("DD/MM/YYYY"),
    budget: 1000000,
    activities: [],
    amentities: [],
    listDate: [],
  },
};

export const createPlanning = createSlice({
  name: "createPlanning",
  initialState,
  reducers: {
    setDestination: (
      state,
      action: PayloadAction<{
        idProvince: string;
        name: string;
      }>
    ) => {
      state.value.destination = action.payload;
    },
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
    resetCreatePlanning: (state) => {
      state.value = {
        destination: { name: "Thành phố Hà Nội", idProvince: "01" },
        transportation: "car",
        startDate: dayjs().format("DD/MM/YYYY"),
        endDate: dayjs().add(1, "day").format("DD/MM/YYYY"),
        budget: 1000000,
        activities: [],
        amentities: [],
        listDate: [],
      };
    },
  },
});

export const {
  setDestination,
  setTransportation,
  setDate,
  setBudget,
  setActivities,
  setAmentities,
  removeActivities,
  removeAmentities,
  setListDate,
  resetCreatePlanning,
} = createPlanning.actions;

export const selectCreatePlanning = (state: RootState) =>
  state.createPlanning.value;
export default createPlanning.reducer;

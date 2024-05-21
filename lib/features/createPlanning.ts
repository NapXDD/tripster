import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import dayjs from "dayjs";
import { destination } from "@/app/types/destination";
import { Tag } from "@/app/types/tag/tag";
import { transportation } from "@/app/types/transportation";

interface CreatePlanningInit {
  value: {
    destination: destination;
    startPoint: destination;
    transportation: transportation;
    startDate: string;
    endDate: string;
    budget: number;
    activities: Tag[];
    amentities: Tag[];
    listDate: string[];
  };
}

let initialState: CreatePlanningInit = {
  value: {
    destination: { name: "Thành phố Hà Nội", idProvince: "01" },
    startPoint: { name: "Thành phố Hồ Chí Minh", idProvince: "79" },
    transportation: "coach",
    startDate: dayjs().format("DD/MM/YYYY"),
    endDate: dayjs().add(1, "day").format("DD/MM/YYYY"),
    budget: 3000000,
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
    setStartPoint: (
      state,
      action: PayloadAction<{
        idProvince: string;
        name: string;
      }>
    ) => {
      state.value.startPoint = action.payload;
    },
    setTransportation: (state, action: PayloadAction<transportation>) => {
      state.value.transportation = action.payload;
    },
    setDate: (state, action: PayloadAction<string[]>) => {
      state.value.startDate = action.payload[0];
      state.value.endDate = action.payload[1];
    },
    setBudget: (state, action: PayloadAction<number>) => {
      state.value.budget = action.payload;
    },
    setActivities: (state, action: PayloadAction<Tag>) => {
      const value = action.payload;
      if (state.value.activities.length < 5) {
        state.value.activities.push(value);
      }
    },
    removeActivities: (state, action: PayloadAction<Tag>) => {
      const value = action.payload;
      let valueIndex = -1;
      state.value.activities.forEach((item, index) => {
        if (item.id === value.id) {
          valueIndex = index;
        }
      });
      if (valueIndex !== -1) {
        state.value.activities.splice(valueIndex, 1);
      }
    },
    setAmentities: (state, action: PayloadAction<Tag>) => {
      const value = action.payload;
      if (state.value.amentities.length < 5) {
        state.value.amentities.push(value);
      }
    },
    removeAmentities: (state, action: PayloadAction<Tag>) => {
      const value = action.payload;
      let valueIndex = -1;
      state.value.amentities.forEach((item, index) => {
        if (item.id === value.id) {
          valueIndex = index;
        }
      });
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
        startPoint: { name: "Thành phố Hồ Chí Minh", idProvince: "79" },
        transportation: "coach",
        startDate: dayjs().format("DD/MM/YYYY"),
        endDate: dayjs().add(1, "day").format("DD/MM/YYYY"),
        budget: 3000000,
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
  setStartPoint,
} = createPlanning.actions;

export const selectCreatePlanning = (state: RootState) =>
  state.createPlanning.value;
export default createPlanning.reducer;

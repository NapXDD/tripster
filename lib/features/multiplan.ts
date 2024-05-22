import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { plan } from "@/utils/function/setupPlan";

export type multiplan = plan[] | null;

interface InitialState {
  value: {
    multiplan: multiplan;
  };
}

let initialState: InitialState = {
  value: {
    multiplan: null,
  },
};

export const multiplanSelect = createSlice({
  name: "multiplanSelect",
  initialState,
  reducers: {
    setMultiplan: (state, action: PayloadAction<multiplan>) => {
      state.value.multiplan = action.payload;
    },
    resetMultiplan: (state) => {
      state.value.multiplan = null;
    },
  },
});

export const { setMultiplan, resetMultiplan } = multiplanSelect.actions;

export const selectMultiplanSelect = (state: RootState) =>
  state.multiplanSelect.value;
export default multiplanSelect.reducer;

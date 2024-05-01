import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface OverLayOpen {
  value: boolean;
}

let initialState: OverLayOpen = {
  value: false,
};

export const overlay = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    openOverLay: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { openOverLay } = overlay.actions;

export const selectOverlay = (state: RootState) => state.overlay.value;
export default overlay.reducer;

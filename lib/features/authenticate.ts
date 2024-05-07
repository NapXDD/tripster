import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

let initialState = {
  value: {
    accessToken: "",
    refreshToken: "",
  },
};

export const authenticate = createSlice({
  name: "authenticate",
  initialState,
  reducers: {},
});

export const {} = authenticate.actions;

export const selectAuthenticate = (state: RootState) =>
  state.authenticate.value;
export default authenticate.reducer;

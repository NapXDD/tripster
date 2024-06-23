import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

let initialState = {
  value: {
    email: "",
  },
};

export const authenticate = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
  },
});

export const { setEmail } = authenticate.actions;

export const selectAuthenticate = (state: RootState) =>
  state.authenticate.value;
export default authenticate.reducer;

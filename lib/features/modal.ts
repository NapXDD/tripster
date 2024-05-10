import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalOpen {
  value: Record<string, boolean>;
}

export type openModal = "signin" | "signup" | "editprofile" | "forgotpassword";

let initialState: ModalOpen = {
  value: {
    SignIn: false,
    SignUp: false,
    EditProfile: false,
    ForgotPassword: false,
  },
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<openModal>) => {
      for (let key in state.value) {
        if (key.toLocaleLowerCase() !== action.payload) {
          state.value[key] = false;
        } else {
          state.value[key] = true;
        }
      }
    },
  },
});

export const { openModal } = modal.actions;

export const selectModal = (state: RootState) => state.modal.value;
export default modal.reducer;

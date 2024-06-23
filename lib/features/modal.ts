import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalOpen {
  value: Record<openModal, boolean>;
}

export type openModal =
  | "signin"
  | "signup"
  | "editprofile"
  | "forgotpassword"
  | "changepassword"
  | "otp";

let initialState: ModalOpen = {
  value: {
    otp: false,
    signin: false,
    signup: false,
    editprofile: false,
    forgotpassword: false,
    changepassword: false,
  },
};

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<openModal>) => {
      for (let key in state.value) {
        const modelKey = key as openModal;
        if (modelKey.toLocaleLowerCase() !== action.payload) {
          state.value[modelKey] = false;
        } else {
          state.value[modelKey] = true;
        }
      }
    },
  },
});

export const { openModal } = modal.actions;

export const selectModal = (state: RootState) => state.modal.value;
export default modal.reducer;

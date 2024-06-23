import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "next-auth";

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  image: string;
  token: string;
  expires: string;
  active: number;
}

interface Init {
  value: {
    user: CurrentUser;
  };
}

let initialState: Init = {
  value: {
    user: {
      id: "",
      name: "",
      email: "",
      image: "",
      expires: "",
      token: "",
      active: 0,
    },
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      if (action.payload.email) {
        let currentUser: CurrentUser = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          image: action.payload.image,
          expires: action.payload.expires,
          token: action.payload.token,
          active: action.payload.active,
        };
        state.value.user = currentUser;
      }
    },
    removeUser: (state) => {
      let currentUser: CurrentUser = {
        id: "",
        name: "",
        email: "",
        image: "",
        expires: "",
        token: "",
        active: 0,
      };
      state.value.user = currentUser;
    },
  },
});

export const { setUser, removeUser } = user.actions;

export const selectUser = (state: RootState) => state.user.value;
export default user.reducer;

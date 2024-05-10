import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "next-auth";

export interface CurrentUser {
  id: string;
  username: string;
  email: string;
  image: string;
}

interface Init {
  value: {
    user: CurrentUser;
  };
}

let initialState: Init = {
  value: {
    user: {
      id: "1",
      username: "",
      email: "",
      image: "",
    },
  },
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      let username = action.payload.email?.split("@")[0];
      if (username && action.payload.email && action.payload.image) {
        let currentUser: CurrentUser = {
          id: "1",
          username: username,
          email: action.payload.email,
          image: action.payload.image,
        };
        state.value.user = currentUser;
      }
    },
    removeUser: (state) => {
      let currentUser: CurrentUser = {
        id: "1",
        username: "",
        email: "",
        image: "",
      };
      state.value.user = currentUser;
    },
  },
});

export const { setUser, removeUser } = user.actions;

export const selectUser = (state: RootState) => state.user.value;
export default user.reducer;

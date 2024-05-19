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
      id: "",
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
      if (action.payload.email) {
        let currentUser: CurrentUser = {
          id: action.payload.id,
          username: action.payload.name,
          email: action.payload.email,
          image: action.payload.image,
        };
        state.value.user = currentUser;
      }
    },
    removeUser: (state) => {
      let currentUser: CurrentUser = {
        id: "",
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

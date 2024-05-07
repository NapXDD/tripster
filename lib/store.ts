import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal";
import overlayReducer from "./features/overlay";
import authenticateReducer from "./features/authenticate";
import userReducer from "./features/user";
import planningReducer from "./features/planning";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      overlay: overlayReducer,
      authenticate: authenticateReducer,
      user: userReducer,
      planning: planningReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

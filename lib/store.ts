import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal";
import overlayReducer from "./features/overlay";
import authenticateReducer from "./features/authenticate";
import userReducer from "./features/user";
import createPlanningReducer from "./features/createPlanning";
import planningReducer from "./features/planningDetail";
import planningSelectionReducer from "./features/planningSelection";

export const makeStore = () => {
  return configureStore({
    reducer: {
      modal: modalReducer,
      overlay: overlayReducer,
      authenticate: authenticateReducer,
      user: userReducer,
      createPlanning: createPlanningReducer,
      planning: planningReducer,
      planningSelection: planningSelectionReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

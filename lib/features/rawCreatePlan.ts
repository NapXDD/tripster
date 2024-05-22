import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { responseAPI } from "@/utils/entities/response";
import { CreatePlanEntity } from "@/utils/entities/plan";

interface initialState {
  value: {
    rawPlanData: responseAPI<CreatePlanEntity> | null;
  };
}

let initialState: initialState = {
  value: {
    rawPlanData: null,
  },
};

export const rawPlanData = createSlice({
  name: "rawPlanData",
  initialState,
  reducers: {
    setRawPlan: (
      state,
      action: PayloadAction<responseAPI<CreatePlanEntity>>
    ) => {
      state.value.rawPlanData = action.payload;
    },
    resetRawPlan: (state) => {
      state.value.rawPlanData = null;
    },
  },
});

export const { setRawPlan, resetRawPlan } = rawPlanData.actions;

export const selectRawPlanData = (state: RootState) => state.rawPlanData.value;
export default rawPlanData.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanOption, PlanType } from "..";

export interface PlanState {
  type: PlanType;
  option: PlanOption;
  price: number;
}

const initialState: PlanState = {
  type: PlanType.ARCADE,
  option: PlanOption.MOUNTHLY,
  price: 9,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    planOne: (state) => {
      state.price =
        (state.option as PlanOption) === PlanOption.MOUNTHLY ? 9 : 90;
      state.type = PlanType.ARCADE;
    },
    planTow: (state) => {
      state.price =
        (state.option as PlanOption) === PlanOption.MOUNTHLY ? 12 : 120;
      state.type = PlanType.ADVANCE;
    },
    planThree: (state) => {
      state.price =
        (state.option as PlanOption) === PlanOption.MOUNTHLY ? 15 : 150;
      state.type = PlanType.PRO;
    },
    setOtion: (state, action: PayloadAction<boolean>) => {
      const { payload } = action;
      state.option = payload ? PlanOption.YEARLY : PlanOption.MOUNTHLY;
      if (payload) {
        if (state.type === "PRO") {
          state.price = 150;
        }
        if (state.type === "ADVANCE") {
          state.price = 120;
        }
        if (state.type === "ARCADE") {
          state.price = 90;
        }
      } else {
        if (state.type === "PRO") {
          state.price = 15;
        }
        if (state.type === "ADVANCE") {
          state.price = 12;
        }
        if (state.type === "ARCADE") {
          state.price = 9;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { planOne, planTow, planThree, setOtion } = planSlice.actions;

export default planSlice.reducer;

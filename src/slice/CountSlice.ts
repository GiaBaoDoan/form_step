import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlanType } from "..";

export interface PlanState {
  type: PlanType;
  option: boolean;
  price: number;
}

const initialState: PlanState = {
  type: PlanType.ARCADE,
  option: false,
  price: 9,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (
      state,
      action: PayloadAction<{
        price: number;
        type: PlanType;
      }>
    ) => {
      const { price, type } = action.payload;
      state.price = state.option ? price * 10 : price;
      state.type = type;
    },

    setOption: (state, action: PayloadAction<boolean>) => {
      const { payload: option } = action;
      state.option = option;

      switch (state.type) {
        case "PRO": {
          state.price = option ? 150 : 15;
          break;
        }
        case "ADVANCE": {
          state.price = option ? 120 : 12;
          break;
        }
        case "ARCADE": {
          state.price = option ? 90 : 9;
          break;
        }
        default:
          return;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPlan, setOption } = planSlice.actions;

export default planSlice.reducer;

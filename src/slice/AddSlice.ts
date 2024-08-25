import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Addtype {
  id: number;
  title: string;
  price: number;
}

const initialState: Addtype[] = [];

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addAction(state, action: PayloadAction<Addtype>) {
      const { payload } = action;
      const { id } = payload;
      const index = state.findIndex((item) => item.id === id);
      if (!state[index]) {
        state.push(payload);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAction } = addSlice.actions;

export default addSlice.reducer;

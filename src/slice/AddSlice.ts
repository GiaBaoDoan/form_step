import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import services from "../data/service.json";

export interface Service {
  id: number;
  title: string;
  extraPrice: number;
  content: string;
  active: boolean;
}

const initialState: Service[] = services;

export const addServiceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    addService(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const index = state?.findIndex((service) => service?.id === id);
      state[index].active = !state[index].active;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addService } = addServiceSlice.actions;

export default addServiceSlice.reducer;

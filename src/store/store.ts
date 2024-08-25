import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/PlanSlice";
import planReducer from "../slice/CountSlice";
import addReducer from "../slice/AddSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    plan: planReducer,
    add: addReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

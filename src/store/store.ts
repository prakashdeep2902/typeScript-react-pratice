import { configureStore } from "@reduxjs/toolkit";
import conunterReducer from "./counterSlice";
export const store = configureStore({
  reducer: {
    counter: conunterReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

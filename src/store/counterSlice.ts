import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      console.log(state);
      state.value -= 1;
    },
    incremmentByfive: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { incremment, decrement, incremmentByfive } = counterSlice.actions;

export default counterSlice.reducer;

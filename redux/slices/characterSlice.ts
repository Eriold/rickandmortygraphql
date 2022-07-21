import { createSlice } from "@reduxjs/toolkit";

const characterSlice = createSlice({
  name: "Character",
  initialState: {
    value: 0,
    name: "Redux toolkit",
  },
  reducers: {
    addId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addId } = characterSlice.actions;

export default characterSlice.reducer;

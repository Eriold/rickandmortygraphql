import { createSlice } from "@reduxjs/toolkit";

//Create Slice when can add new actions Character's reducers
const characterSlice = createSlice({
  name: "Character",
  initialState: {
    value: 0,
    name: "Redux toolkit",
  },
  reducers: {
    //Action add value
    addId: (state, action) => {
      state.value = action.payload;
    },
  },
});
//Export actions
export const { addId } = characterSlice.actions;
//Export reducer
export default characterSlice.reducer;

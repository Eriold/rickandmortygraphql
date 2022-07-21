import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { characterSlice } from "./slices";

// Combine reducers
const reducer = combineReducers({
  characterId: characterSlice,
});

// Create Store equivalent
const store = configureStore({
  reducer,
  // We don't use thunk
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
  ],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characters/reducer";

const store = configureStore({
  reducer: { characters: characterSlice },
});

export default store;

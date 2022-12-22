import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmark/reducer";
import characterSlice from "./characters/reducer";

const store = configureStore({
  reducer: {
    characters: characterSlice,
    bookmark: bookmarkSlice,
  },
});

export default store;

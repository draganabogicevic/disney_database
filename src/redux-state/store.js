import { configureStore } from "@reduxjs/toolkit";
import bookmarkedCharacterSlice from "./bookmark/reducer";
import characterSlice from "./characters/reducer";

const store = configureStore({
  reducer: {
    characters: characterSlice,
    bookmarkedCharacterIds: bookmarkedCharacterSlice,
  },
});

console.log(store.getState());

export default store;

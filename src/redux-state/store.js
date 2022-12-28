import { configureStore } from "@reduxjs/toolkit";
import bookmarkedCharacterSlice from "./bookmark/reducer";
import characterSlice from "./characters/reducer";
import searchedCharactersSlices from "./search/reducer";
// import singleCharacterSlice from "./character/reducer"

const store = configureStore({
  reducer: {
    characters: characterSlice,
    bookmarkedCharacterIds: bookmarkedCharacterSlice,
    searchedCharacters: searchedCharactersSlices,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

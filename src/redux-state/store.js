import { configureStore } from "@reduxjs/toolkit";
import bookmarkedCharacterSlice from "./bookmark/reducer";
import characterSlice from "./characters/reducer";
import searchedCharactersSlices from "./search/reducer";
import rateCharacterSlice from "./rate/reducer";
// import singleCharacterSlice from "./character/reducer"

const store = configureStore({
  reducer: {
    characters: characterSlice,
    bookmarkedCharacterIds: bookmarkedCharacterSlice,
    searchedCharacters: searchedCharactersSlices,
    ratedCharacters: rateCharacterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

console.log(store.getState());

export default store;

import { configureStore } from "@reduxjs/toolkit";
import bookmarkedCharacterSlice from "./bookmark/reducer";
import characterSlice from "./characters/reducer";
import searchedCharactersSlices from "./search/reducer";
import singleCharacterSlice from "./character/reducer"

const store = configureStore({
  reducer: {
    characters: characterSlice,
    bookmarkedCharacterIds: bookmarkedCharacterSlice,
    searchedCharacters: searchedCharactersSlices,
    characterToFetch: singleCharacterSlice
  },
});

console.log(store.getState());

export default store;

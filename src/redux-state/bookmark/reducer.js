import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedCharacterIds: [],
};

const bookmarkedCharacterSlice = createSlice({
  name: "bookmarkedCharacterIds",
  initialState,
  reducers: {
    setBookmarked(state, action) {
      state.bookmarkedCharacterIds.push(action.payload);
    },
    removeUnbookmarked(state, action) {
      console.log(action.payload.toString());
      state.bookmarkedCharacterIds = state.bookmarkedCharacterIds.filter(
        (item) => item !== action.payload.toString()
      );
    },
    saveBookmarkedToLs(state) {
      localStorage.setItem(
        "favoriteCharacters",
        JSON.stringify(state.bookmarkedCharacterIds)
      );
    },
  },
});

export const { setBookmarked, removeUnbookmarked, saveBookmarkedToLs } =
  bookmarkedCharacterSlice.actions;

export default bookmarkedCharacterSlice.reducer;

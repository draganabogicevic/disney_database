import { createSlice } from "@reduxjs/toolkit";

const getDataFromLs = () => {
  try {
    const dataFromLs = JSON.parse(localStorage.getItem("favoriteCharacters"));
    console.log(dataFromLs);
    const prevBookmarkedCharacterIds = dataFromLs ? dataFromLs : [];
    return prevBookmarkedCharacterIds;
  } catch (err) {
    console.log(err);
  }
};

const initialState = {
  bookmarkedCharacterIds: getDataFromLs() || [],
};

const bookmarkedCharacterSlice = createSlice({
  name: "bookmarkedCharacterIds",
  initialState,
  reducers: {
    setBookmarked(state, action) {
      state.bookmarkedCharacterIds.push(action.payload);
    },
    removeUnbookmarked(state, action) {
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedCharacterIds: [],
};

const bookmarkedCharacterSlice = createSlice({
  name: "bookmarkedCharacterIds",
  initialState,
  reducers: {
    setBookmarked(state, action) {
      console.log(action.payload);

      state.bookmarkedCharacterIds.push(action.payload);
    },
  },
});

export const { setBookmarked } = bookmarkedCharacterSlice.actions;

export default bookmarkedCharacterSlice.reducer;

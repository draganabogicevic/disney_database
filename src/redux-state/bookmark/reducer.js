import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmark: false,
  listOfBookmarked: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    setBookmarked(state, action) {
      state.listOfBookmarked.push({
        id: action.payload.id,
      });
      console.log("state is", state);
    },
  },
});

export const { setBookmarked } = bookmarkSlice.actions;

export default bookmarkSlice;

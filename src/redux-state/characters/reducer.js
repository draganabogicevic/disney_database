import { createSlice } from "@reduxjs/toolkit";
import Character from "../../entities/Character";
import { getCharacters, getCharacter } from "./action";

const initialState = {
  loading: false,
  characters: {},
};

const characterSlices = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: {
    [getCharacters.pending]: (state) => {
      state.loading = true;
    },
    [getCharacters.fulfilled]: (state, action) => {
      state.loading = false;
      const newCharacter = (action.payload || []).reduce(
        (res, current = {}) => ({
          ...res,
          [current._id]: new Character(current).characterObject,
        }),
        {}
      );
      state.characters = { ...state.characters, ...newCharacter };
    },
    [getCharacters.rejected]: (state) => {
      state.loading = false;
    },
    [getCharacter.pending]: (state) => {
      state.loading = true;
    },
    [getCharacter.fulfilled]: (state, action) => {
      state.loading = false;
      const newCharacter = {
        [action.payload._id]: new Character(action.payload).characterObject,
      } 
      state.characters = { ...state.characters, ...newCharacter };
    },
    [getCharacter.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default characterSlices.reducer;

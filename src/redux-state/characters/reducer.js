import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Character from "../../entities/Character";
import {
  fetchAllCharacters,
  fetchAllCharactersByPages,
} from "../../service/api";
const initialState = {
  loading: false,
  characters: {},
};

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (num, thunkAPI) => {
    const response = fetchAllCharactersByPages(num).then((data) => data);
    return response;
  }
);

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
      console.log(action.payload);
      const newCharacter = (action.payload || []).reduce(
        (res, current = {}) => ({
          ...res,
          [current._id]: new Character(current),
        }),
        {}
      );
      state.characters = { ...state.characters, ...newCharacter };
      console.log(state.characters);
    },
    [getCharacters.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// export const { getCharactersRequest, getCharactersRequestSuccess } =
//   characterSlices.actions;

export default characterSlices.reducer;

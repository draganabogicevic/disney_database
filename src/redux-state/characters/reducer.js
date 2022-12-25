import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Character from "../../entities/Character";
import { fetchAllCharactersByPages } from "../../service/api";
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
  },
});

export default characterSlices.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Character from "../../entities/Character";
import { fetchCharactersBySearch } from "../../service/api";
const initialState = {
  loadingForSearch: false,
  searchedCharacters: {},
};

export const getSearchedCharacters = createAsyncThunk(
  "searchedCharacters/getSearchedCharacters",
  async (str, thunkAPI) => {
    const response = fetchCharactersBySearch(str).then((data) => data);
    return response;
  }
);

const searchedCharactersSlices = createSlice({
  name: "searchedCharacters",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchedCharacters.pending]: (state) => {
      state.loadingForSearch = true;
    },
    [getSearchedCharacters.fulfilled]: (state, action) => {
      state.loadingForSearch = false;
      const newCharacter = (action.payload || []).reduce(
        (res, current = {}) => ({
          ...res,
          [current._id]: new Character(current).characterObject,
        }),
        {}
      );
      state.searchedCharacters = {
        ...newCharacter,
      };

      console.log(state.searchedCharacters);
    },
    [getSearchedCharacters.rejected]: (state) => {
      state.loadingForSearch = false;
    },
  },
});

export default searchedCharactersSlices.reducer;

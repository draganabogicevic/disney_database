import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCharactersByPages, fetchCharacterById } from "../../service/api";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (num, thunkAPI) => {
    const response = await fetchAllCharactersByPages(num).then((data) => data);
    return response;
  }
);

export const getCharacter = createAsyncThunk(
  "characters/getCharacter",
  async (id, thunkAPI) => {
    const response = await fetchCharacterById(id).then((data) => data);
    console.log(response)
    return response;
  }
);
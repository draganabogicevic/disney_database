import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCharactersByPages } from "../../service/api";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (num, thunkAPI) => {
    const response = await fetchAllCharactersByPages(num).then((data) => data);
    return response;
  }
);

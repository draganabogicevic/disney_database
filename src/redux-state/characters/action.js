import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCharactersByPages } from "../../service/api";

export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (num, thunkAPI) => {
    const response = fetchAllCharactersByPages(num).then((data) => data);
    return response;
  }
);

import { createSlice } from "@reduxjs/toolkit";

const getDataFromLs = () => {
  try {
    const dataFromLs = JSON.parse(localStorage.getItem("ratedCharacters"));
    const prevRatedCharacters = dataFromLs ? dataFromLs : {};
    console.log(prevRatedCharacters);
    return prevRatedCharacters;
  } catch (err) {
    console.log(err);
  }
};

console.log(getDataFromLs());

const initialState = {
  rateCharacters: getDataFromLs() || {},
};

const rateCharacterSlice = createSlice({
  name: "rateCharacters",
  initialState,
  reducers: {
    setRate(state, action) {
      const newRated = {
        [action.payload.id]: action.payload,
      };

      state.rateCharacters = {
        ...state.rateCharacters,
        ...newRated,
      };
    },
    removeRate(state, action) {
      delete state.rateCharacters[action.payload];
    },
    saveRatedToLs(state) {
      localStorage.setItem(
        "ratedCharacters",
        JSON.stringify(state.rateCharacters)
      );
    },
  },
});

export const { setRate, removeRate, saveRatedToLs } =
  rateCharacterSlice.actions;

export default rateCharacterSlice.reducer;

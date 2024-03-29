import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

// export const fetchAllCharacters = async (num) => {
//   const result = await Api.get(`/characters?page=${num}`);
//   return result;
// };

export const fetchCharactersBySearch = async (str) => {
  const result = await Api.get(`/character?name=${str}`);
  return result.data.data;
};

export const fetchAllCharactersByPages = async (num) => {
  const result = Api.get(`/character?page=${num}`);
  return (await result).data.data;
};

export const fetchCharacterById = async (id) => {
  const result = Api.get(`/character/${id}`);
  console.log(result);
  return (await result).data;
};

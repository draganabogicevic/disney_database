import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.disneyapi.dev",
});

// export const fetchAllCharacters = async (num) => {
//   const result = await Api.get(`/characters?page=${num}`);
//   return result;
// };

export const fetchAllCharacters = async (str) => {
  const result = await Api.get(
    `https://api.disneyapi.dev/character?name=${str}`
  );
  console.log(result.data.data);
  return result.data.data;
};

export const fetchAllCharactersByPages = async (num) => {
  const result = Api.get(`/characters?page=${num}`);
  return (await result).data.data;
};

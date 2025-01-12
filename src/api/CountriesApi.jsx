import axios from "axios";

// Create an axios instance

export const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// Https request to get all countries

export const getCountries = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// // Https request to get a single country

// export const getCountry = (name) => {
//   return api.get(`/name/${name}?fullText=true`);
// };

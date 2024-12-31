import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

// Get Method

export const getCountries = () => {
  api.get("/all?fields=name,capital,population,region,flags").then((res) => {
    return res.data;
  });
};

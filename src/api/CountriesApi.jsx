import axios from "axios";

export const getCountries = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

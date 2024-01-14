import axios from "axios";

const getCountriesData = async () => {
  let response;
  try {
    response = axios.get("https://restcountries.com/v3.1/all");
  } catch (error) {
    console.log(error);
  }

  return response;
};

export { getCountriesData };

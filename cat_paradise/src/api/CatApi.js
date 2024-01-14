import axios from "axios";

const getAllCats = async () => {
  let response;
  try {
    response = await axios.get("https://api.thecatapi.com/v1/breeds");
  } catch (err) {
    console.log(err);
  }
  return response;
};

export { getAllCats };

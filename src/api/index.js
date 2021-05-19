import axios from "axios";

const API_HOST = process.env.REACT_APP_API_HOST;
const API_KEY = process.env.REACT_APP_API_KEY;

const getMovies = (keyword) => {
  return axios({
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: encodeURI(`${API_HOST}?apikey=${API_KEY}&s=${keyword}`),
  });
};

export { getMovies };
